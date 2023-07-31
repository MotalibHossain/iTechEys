import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import "../style/homepage.css";
// icon
import { MdOutlineDoubleArrow, MdOutlineSearch } from "react-icons/md";
import { IoChevronForwardOutline } from "react-icons/io5";

// Component import
import Sidebar from "../components/Home/Sidebar.js";
import Image_with_title_sidebar from "../components/Home/Image_with_title_sidebar";

const Home = () => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const [post, setPost] = useState([]);
    const [latestPost, setLatestPost] = useState([]);

    const url = `${SERVER_URL}`;
    console.log("home url------", process.env);
    useEffect(() => {
        axios({
            method: "get",
            url: url,
        }).then(function (response) {
            setPost(response.data);
            setLatestPost(response.data[0]);
        });
    }, []);

    // Load more functionality
    const [loadIndex, setloadendIndex] = useState(4);
    function calculateSliceArgs(item) {
        const endIndex = loadIndex + 2;
        console.log(endIndex, item);
        setloadendIndex(endIndex);
    }

    return (
        <div className="Main-Container container-fluid ">
            <section className="Section-1 mt-3">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="home-slider">
                            <Carousel>
                                {post &&
                                    post.map((Item, index) => {
                                        const { id, title, slug, description, image, category } = Item;
                                        return (
                                            <Carousel.Item key={index}>
                                                <div className="banner-img-overla">
                                                    <img className="d-block w-100" src={image} alt="First slide" />
                                                </div>
                                                <Carousel.Caption>
                                                    <h3>{title}</h3>
                                                    <p>{description}</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        );
                                    })}
                            </Carousel>
                        </div>
                        {/* <div className="main-banner">
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
                        </div> */}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 pl-0 side-title">
                        <ul className="ps-0">
                            {post.map((Item, index) => {
                                const { id, title, slug, description, image, category } = Item;
                                return (
                                    <li key={index}>
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

            <section className="Section-2 my-4">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="Sec-2-title d-flex align-items-center p-2">
                            <MdOutlineDoubleArrow />
                            {/* <marquee behavior="scroll" direction="left"> */}
                            <h6 className="m-0">
                                <Link to={`blog-details/${latestPost?.slug}`}>{latestPost?.title}</Link>
                            </h6>
                            {/* </marquee> */}
                            <Link to={`blog-details/${latestPost?.slug}`} className="button button-pulse ms-auto">
                                বিস্তারিত
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="search mt-sm-2 mt-md-0 mt-lg-0">
                            <MdOutlineSearch className="fa fa-search" />
                            <input type="text" className="form-control" placeholder="সার্চ করুন iTecheys জুড়ে" />
                            <button className="btn btn-primary p-0">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Section-3">
                <div className="row mb-30">
                    <div className="col-lg-8 col-md-8 Card-container">
                        <div className="Card-body">
                            <div className="row">
                                {post.slice(0, loadIndex).map((Item, index) => (
                                    <PostCard item={Item} key={index} />
                                ))}
                                <div className="col-lg-12 mb-3 text-center">
                                    <button
                                        className="btn-animate"
                                        onClick={() => calculateSliceArgs(2)}
                                        disabled={post.length === loadIndex ? "true" : ""}
                                    >
                                        <span>Load More</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 blog-aside">
                        <Sidebar post={post} />
                        <div className="Sidebar bg-white p-3 mt-4">
                            <Image_with_title_sidebar post={post} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="Section-4">
                <div className="row mb-30">
                    <div className="col-lg-8 col-md-8">
                        <div className="Post__gallary">
                            {post &&
                                post.slice(0, 6).map((item, index) => {
                                    const { title, slug, author, category, image } = item;
                                    const gridClass =
                                        index === 0
                                            ? "big"
                                            : "" || index === 1
                                            ? "vertical"
                                            : "" || index === 3
                                            ? "vertical"
                                            : "" || index === 5
                                            ? "horizontal"
                                            : "";

                                    return (
                                        <div className={`gallery-item ${gridClass}`}>
                                            <div className="gallery_img">
                                                <img src={image} />
                                            </div>
                                            <div className="overlay">
                                                <Link to={`blog-details/${slug}`}>
                                                    <TextTruncate line={2} element="p" text={title} />
                                                </Link>
                                                <div className="post-card-meta pb-1">
                                                    <Link to={`/author-profile/${author.username}`}>
                                                        <div className="post-card-author">
                                                            <div className="post-author-image">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                                    alt="author profile image"
                                                                />
                                                            </div>
                                                            <div className="post-author-username">
                                                                {author.username}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <p className="post-tag">
                                                        <Link to={`blog-details/${slug}`}>Read More</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4"></div>
                </div>
            </section>

            <section class="pt-5 pb-5">
                <div class="row">
                    <div class="col-6">
                        <h3 class="mb-3">Carousel cards title </h3>
                    </div>
                    <div class="col-6 text-right">
                        <a
                            class="btn btn-primary mb-3 mr-1"
                            href="#carouselExampleIndicators2"
                            role="button"
                            data-slide="prev"
                        >
                            <i class="fa fa-arrow-left"></i>
                        </a>
                        <a
                            class="btn btn-primary mb-3 "
                            href="#carouselExampleIndicators2"
                            role="button"
                            data-slide="next"
                        >
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                    <div class="col-12">
                        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-md-4 mb-3">
                                            <div class="card">
                                                <img
                                                    class="img-fluid"
                                                    alt="100%x280"
                                                    src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                />
                                                <div class="card-body">
                                                    <h4 class="card-title">Special title treatment</h4>
                                                    <p class="card-text">
                                                        With supporting text below as a natural lead-in to additional
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <div class="card">
                                                <img
                                                    class="img-fluid"
                                                    alt="100%x280"
                                                    src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                                                />
                                                <div class="card-body">
                                                    <h4 class="card-title">Special title treatment</h4>
                                                    <p class="card-text">
                                                        With supporting text below as a natural lead-in to additional
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <div class="card">
                                                <img
                                                    class="img-fluid"
                                                    alt="100%x280"
                                                    src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                                                />
                                                <div class="card-body">
                                                    <h4 class="card-title">Special title treatment</h4>
                                                    <p class="card-text">
                                                        With supporting text below as a natural lead-in to additional
                                                        content.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const PostCard = ({ item }) => {
    const { id, title, slug, description, image, author, category } = item;
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <Link to={`blog-details/${slug}`}>
                <div className="post-card">
                    <div className="post-card-img">
                        <img className="post-banner" src={image} alt="post image" />
                        <div className="post-card-meta">
                            <Link to={`/author-profile/${author.username}`}>
                                <div className="post-card-author">
                                    <div className="post-author-image">
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                            alt="author profile image"
                                        />
                                    </div>
                                    <div className="post-author-username">{author.username}</div>
                                </div>
                            </Link>
                            <p className="post-tag">{category.name}</p>
                        </div>
                    </div>
                    <div className="post-card-body">
                        <abbr title={title}>
                            <h4 className="post-title">{title}</h4>
                        </abbr>
                        <p className="post-body">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Home;
