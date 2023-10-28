import React from "react";
import Slider from "react-slick";

export const MultiBlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  };

  return (
    <>
        <div className="row">
          <div className="col-lg-3">
              <Slider {...settings}>
                    <div class="card" style="width: 18rem;">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and make up
                          the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and make up
                          the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
              </Slider>
          </div>
        </div>
    </>
  );
};
