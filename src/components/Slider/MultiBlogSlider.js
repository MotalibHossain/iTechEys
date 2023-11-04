import React from "react";
import Slider from "react-slick";


import { AiOutlineArrowRight } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MultiBlogSlider = ({posts}) => {
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
                {/* <Slider {...settings}> */}
                    {posts &&
                        posts.slice(0,4).map((post, index) => {
                            const { title, description, image } = post;
                            return(
                            // <div key={index} className="col-lg-3 px-3">
                            //     <div class="card">
                            //         <img
                            //             src={image}
                            //             class="card-img-top"
                            //             alt="..."
                            //         />
                            //         <div class="card-body">
                            //             <h5 class="card-title">{title}</h5>
                            //             <p class="card-text">
                            //                 Some quick example text to build on
                            //                 the card title and make up the bulk
                            //                 of the card's content.
                            //             </p>
                            //             <a href="#" class="btn btn-primary">
                            //                 Go somewhere
                            //             </a>
                            //         </div>
                            //     </div>
                            // </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div class="card slide__card">
                                    <div className="card_img">
                                        <img src={image} class="w-100 h-100" alt="slider-image" />
                                    </div>
                                    <div class="card-body mt-2">
                                        <span className="time">April 6, 2022</span>
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="slide-btn">
                                            Read now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                {/* </Slider> */}
            </div>
        </>
    );
};
