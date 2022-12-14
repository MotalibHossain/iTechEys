import React, { useState, useEffect } from "react";
import Post from "../components/BlogPost/Post";
import { Link } from "react-router-dom";
// icon
import { MdOutlineDoubleArrow, MdOutlineSearch } from "react-icons/md";
import { IoChevronForwardOutline } from "react-icons/io5";

// Component import
import Sidebar from "../components/Home/Sidebar.js";
import FetchDataFromApi from "../Utils/DataFetch";

const Home = () => {
    const [post, setPost] = useState([]);
    const [latestPost, setLatestPost] = useState([]);

    const url = "http://127.0.0.1:8000/";
    useEffect(() => {
        FetchDataFromApi(url).then((data) => {
            setPost(data);
            setLatestPost({
                id: data[0].id,
                title: data[0].title,
                slug: data[0].slug,
                description: data[0].description,
                image: data[0].image,
            });
        });
    }, []);
    const { id, title, slug, description, image } = latestPost;
    // console.log("post", post);

    return (
        <div className="Main-Container container-fluid ">
            <section className="Section-1 mt-3">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="main-banner">
                            <div className="banner-img">
                                <div className="banner-img-overlay">
                                    <img src={latestPost.image} alt="image" />
                                </div>
                            </div>
                            <div className="post-content text-white">
                                <Link
                                    className="post-title post_title"
                                    to={`blog-details/${slug}`}
                                    state={{ title, description, image }}
                                >
                                    {latestPost.title}
                                </Link>
                                <span className="latestPostDec">
                                    {latestPost.description}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 pl-0 side-title">
                        <ul className="ps-0">
                            {post.map((Item, index) => {
                                const { id, title, slug, description, image, category } = Item;
                                return (
                                    <li key={id}>
                                        <Link
                                            className="d-flex align-items-center"
                                            to={`blog-details/${slug}`}
                                            state={{ id, title, description, image }}
                                        >
                                            <IoChevronForwardOutline />
                                            <p className="text-justify post_title m-0">{title}</p>
                                        </Link>
                                        <hr className="m-2 ms-0" />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="Section-2 bg-white">
                <div className="row">
                    <div className="col-lg-9 col-md-9">
                        <div className="Sec-2-title d-flex align-items-center p-2">
                            <MdOutlineDoubleArrow />
                            {/* <marquee behavior="scroll" direction="left"> */}
                            <h6 className="m-0">
                                <Link to={`blog-details/${slug}`}>{latestPost.title}</Link>
                            </h6>
                            {/* </marquee> */}
                            <a href={`blog-details/${slug}`} class="button button-pulse ms-auto">
                                ???????????????????????????
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div class="search mt-sm-2 mt-md-0 mt-lg-0">
                            <MdOutlineSearch className="fa fa-search" />
                            <input type="text" className="form-control" placeholder="??????????????? ???????????? iTecheys ????????????" />
                            <button class="btn btn-primary p-0">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Section-3">
                <div className="row mb-30">
                    <div className="col-lg-9 col-md-9 Card-container">
                        <div className="Card-body">
                            <div className="row">
                                {post.map((Item, index) => {
                                    const { id, title, slug, description, image, category } = Item;
                                    return (
                                        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                            <div className="post-card pb-0">
                                                <div className="post-card-img">
                                                    <img src={image} alt="post image" />
                                                </div>
                                                <div className="post-card-body">
                                                    <div className="user-title d-flex justify-content-between pt-1 pb-1 mt-1">
                                                        <div className="user d-flex mb-0 ">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                                alt="Profile Image"
                                                            />
                                                            <div className="d-flex mt-2">Motalib</div>
                                                        </div>
                                                        <p className="time mb-0 mt-2">{category.name}</p>
                                                    </div>
                                                    <div className="post">
                                                        <h5 className="post-title mt-2 mb-3">
                                                            <Link className="readOn" to={`blog-details/${slug}`}>
                                                                <h4 className="latestPostDec">{title}</h4>
                                                            </Link>
                                                        </h5>
                                                        <p className="post-body">
                                                            <span>{description}</span>
                                                            <Link className="readOn" to={`blog-details/${slug}`}>
                                                                Read on &nbsp;????
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 blog-aside">
                        <Sidebar post={post} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
