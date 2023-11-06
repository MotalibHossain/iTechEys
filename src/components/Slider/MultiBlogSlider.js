import React from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MultiBlogSlider = ({posts}) => {
    function formatDate(inputDate) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(inputDate).toLocaleDateString(undefined, options);
        return formattedDate;
    }
    console.log(posts)
    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        initialSlide: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000
    };

    return (
        <>
            <div className="row">
                <Slider {...settings}>
                    {posts &&
                        posts.slice(0,10).map((post, index) => {
                            const { title, slug, description, publish_date, image } = post;
                            return(
                                <div className="col-lg-3 col-md-3 col-sm-3 px-2">
                                    <div class="card slide__card">
                                        <div className="card_img">
                                            <img src={image} class="w-100 h-100" alt="slider-image" />
                                        </div>
                                        <div class="card-body mt-2">
                                            <span className="time">{formatDate(publish_date)}</span>
                                            <Link to={`blog-details/${slug}`} className="card-body-title post_title">
                                                <TextTruncate line={2} element="p" text={title} />
                                            </Link>
                                            <Link className="slide-btn" to={`blog-details/${slug}`}>
                                                Read now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </Slider>
            </div>
        </>
    );
};
