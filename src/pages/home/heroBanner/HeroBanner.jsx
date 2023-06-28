import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from "../../../components/lazyloadimage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import "./heroBanner.scss";

const HeroBanner = () => {
    const [background, setBackground] = useState('');
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const {data, loading} = useFetch('/movie/upcoming');

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data])

    const searchQueryHandler = (e) => {
        if (e.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className="heroBanner">
            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <h1 className="title">Welcome</h1>
                    <h2 className="subTitle">Millions of Movie, TV Shows and People to discover. Explore Now.</h2>
                    
                    <div className="searchInput">
                        <input type="text" 
                            placeholder='Search for a movie or TV show...' 
                            onKeyUp={searchQueryHandler} 
                            onChange={(e) => setQuery(e.target.value)}/>
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner