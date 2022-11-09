import React from 'react'

const Registration = () => {
  return (
    <>
        <section class="login-block">
                <div class="container login-container">
                    <div class="row">
                        <div class="col-md-4 login-sec">
                            <h2 class="text-center">Register</h2>
                            <form class="login-form">
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="text-uppercase pb-2">
                                        Email
                                    </label>
                                    <input type="text" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group pt-2">
                                    <label for="exampleInputPassword1" class="text-uppercase pb-2">
                                        Password
                                    </label>
                                    <input type="password" class="form-control" placeholder="" />
                                </div>

                                <div class="form-check mb-2 pt-2">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" />
                                        <small>Remember Me</small>
                                    </label>
                                    <br />
                                </div>
                                <button type="submit" class="btn btn-login float-right">
                                    Submit
                                </button>
                            </form>
                            <div class="copy-text">
                                Created with <i class="fa fa-heart"></i> by{" "}
                                <a href="http://iTechEys.com" target="_blank">iTechEys Team ❤</a>
                            </div>
                        </div>
                        <div class="col-md-8 banner-sec">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox">
                                    <div class="carousel-item active banner-img-overlay">
                                        <img
                                            class="d-block img-fluid"
                                            src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                                            alt="First slide"
                                        />
                                        <div class="carousel-caption d-none d-md-block">
                                            <div class="banner-text">
                                                <h2>This is First Slide</h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            class="d-block img-fluid"
                                            src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg"
                                            alt="Second slide"
                                        />
                                        <div class="carousel-caption d-none d-md-block">
                                            <div class="banner-text">
                                                <h2>This is Second Slide</h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img
                                            class="d-block img-fluid"
                                            src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg"
                                            alt="Third slide"
                                        />
                                        <div class="carousel-caption d-none d-md-block">
                                            <div class="banner-text">
                                                <h2>This is Heaven</h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Registration