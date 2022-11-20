import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
// message framework
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [message, setMessage] = useState();
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    const HandelChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const HandelSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/token/",
            data: loginInfo,
        })
            .then(function (response) {
                console.log("Login Response", response);

                if (response.statusText == "OK") {
                    var token = response.data.access;
                    var decoded = jwt_decode(token);
                    localStorage.setItem("UserInfo",{decoded});
                    localStorage.setItem("IsAuthenticate", true);
                    toast("Successfully login");
                    navigate("/");
                } else {
                    console.log("post data response", response);
                    setMessage(response.statusText);
                }
            })
            .catch(function (error) {
                console.log("post data response", error);
                let errorValue = Object.values(error.response.data);
                setMessage(errorValue);
            });
        e.target.reset();
    };
    return (
        <>
            <section className="login-block">
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-4 login-sec">
                            <h2 className="text-center">Login Now</h2>
                            {message && <p classNameName="text-danger">{message}</p>}
                            <form className="login-form" onSubmit={HandelSubmit}>
                                <div className="form-group">
                                    <label className="text-uppercase pb-2">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        placeholder=""
                                        onChange={HandelChange}
                                    />
                                </div>
                                <div className="form-group pt-2">
                                    <label className="text-uppercase pb-2">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder=""
                                        onChange={HandelChange}
                                    />
                                </div>

                                <div className="form-check mb-2 pt-2">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                        <small>Remember Me</small>
                                    </label>
                                    <br />
                                </div>
                                <button type="submit" className="btn btn-login float-right">
                                    Login
                                </button>
                            </form>
                            <div className="copy-text">
                                Created with <i className="fa fa-heart"></i> by{" "}
                                <a href="http://iTechEys.com" target="_blank">
                                    iTechEys Team ❤
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8 banner-sec">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="0"
                                        className="active"
                                    ></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active banner-img-overlay">
                                        <img
                                            className="d-block img-fluid"
                                            src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                                            alt="First slide"
                                        />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>This is First Slide</h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block img-fluid"
                                            src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg"
                                            alt="Second slide"
                                        />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
                                                <h2>This is Second Slide</h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block img-fluid"
                                            src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg"
                                            alt="Third slide"
                                        />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="banner-text">
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
    );
};

export default Login;
