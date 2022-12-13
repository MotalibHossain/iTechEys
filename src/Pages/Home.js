import React, { useState, useEffect } from "react";
import TextTruncate from "react-text-truncate";
import Post from "../components/BlogPost/Post";
import { Link } from "react-router-dom";
// icon
import { MdOutlineDoubleArrow, MdOutlineSearch } from "react-icons/md";
import { IoChevronForwardOutline } from "react-icons/io5";

// Component import
import Sidebar from "../components/Home/Sidebar.js"

const Home = () => {
    const [post, setPost] = useState([]);
    const [latestPost, setLatestPost] = useState([]);

    const FetchDataFromApi = async (e) => {
        const response = await fetch("http://127.0.0.1:8000/");
        const data = await response.json();
        return data;
    };
    useEffect(() => {
        FetchDataFromApi().then((data) => {
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
        <div className="container-fluid">
            <section className="Section-1 mt-3">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="main-banner">
                            <div className="banner-img">
                                <div className="banner-img-overlay">
                                    <img src={latestPost.image} alt="image" />
                                </div>
                            </div>
                            <div className="post-content text-white">
                                <Link to={`blog-details/${slug}`} state={{ title, description, image }}>
                                    <TextTruncate line={2} truncateText="...." text={latestPost.title} />
                                </Link>
                                <TextTruncate
                                    line={2}
                                    // element="span"
                                    truncateText="…"
                                    text={latestPost.description}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 pl-0 side-title">
                        <ul className="ps-0">
                            {post.map((Item, index) => {
                                const { id, title, slug, description, image, category } = Item;
                                return (
                                    <li key={id}>
                                        <Link className="d-flex align-items-center" to={`blog-details/${slug}`} state={{ id, title, description, image }}>
                                            <IoChevronForwardOutline />
                                            <TextTruncate line={1} truncateText="...." text={title.slice(0, 65)} />
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
                            <a href={`blog-details/${slug}`} class="button button-pulse ms-auto">বিস্তারিত</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div class="search mt-sm-2">
                            <MdOutlineSearch className="fa fa-search" />
                            <input type="text" className="form-control" placeholder="Have a question?" />
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
                                                    {/* <img
                                        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                                        alt="post image"
                                    /> */}
                                                </div>
                                                <div className="post-card-body">
                                                    <div className="user-title d-flex justify-content-between pt-1 pb-1 mt-1">
                                                        <div className="user d-flex mb-0 ">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                                alt="Profile Image"
                                                            />
                                                            <div className="d-flex mt-1">Motalib</div>
                                                        </div>
                                                        <p className="time mb-0 mt-1">{category.name}</p>
                                                    </div>
                                                    <div className="post">
                                                        <h5 className="post-title mt-2">
                                                            {/* <a href='#' >{Item.title}.slice(0,80)</a> */}
                                                            <Link to={`blog-details/${slug}`}>
                                                                <TextTruncate
                                                                    line={2}
                                                                    // element="span"
                                                                    truncateText="..."
                                                                    text={title}
                                                                // textTruncateChild={<a href="#">Read on</a>}
                                                                />
                                                            </Link>
                                                        </h5>
                                                        <p className="post-body">
                                                            {description.slice(0, 100)} &nbsp; &nbsp;
                                                            <Link className="readOn" to={`blog-details/${slug}`}>
                                                                Read on
                                                            </Link>
                                                            {/* <TextTruncate
                                                            line={2}
                                                            element="span"
                                                            truncateText="…"
                                                            text={description.slice(0,55)}
                                                            textTruncateChild={
                                                                <Link
                                                                    className="readOn"
                                                                    to={`blog-details/${slug}`}>
                                                                    Read on
                                                                </Link>
                                                            }
                                                        /> */}
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
