import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./carousel.scss";

const Carousel = (data, loading) => {
    const carouselContainer = useRef();
    const {url} = useSelector((state) => state.home);
    const navigate = useNavigate();

    const nagigation = (dir) => {

    }

    return <div className="carousel">
        <ContentWrapper>
            <BsFillArrowLeftCircleFill 
                className="carouselLeftNav arrow"
                onClick={() => nagigation("left")}
            />
            <BsFillArrowRightCircleFill 
                className="carouselRightNav arrow"
                onClick={() => nagigation("right")}
            />
            {!loading ? (
                <div className="carouselItems">
                    {data?.map((item) => {
                        return (
                            <div key={item.id} className="carouselItem">
                                
                            </div>
                        )
                    })}
                </div>
            ) : (
                <span>Loading...</span>
            )}
        </ContentWrapper>
    </div>
}

export default Carousel