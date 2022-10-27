import React, { useState, useEffect } from "react";
import TextTruncate from "react-text-truncate";
import Post from "../components/BlogPost/Post";
import { Link } from 'react-router-dom'
// icon 
import { MdOutlineDoubleArrow, MdOutlineSearch } from 'react-icons/md';

const Home = () => {
    const [post, setPost] = useState([]);
    const [latestPost, setLatestPost] = useState([])

    const FetchDataFromApi = async (e) => {
        const response = await fetch("http://127.0.0.1:9000/");
        const data = await response.json();
        return data;
    };
    useEffect(() => {
        FetchDataFromApi().then((data) => {
            setPost(data);
            setLatestPost({
                "title": data[0].title,
                "slug": data[0].slug,
                "description": data[0].description,
                "image": data[0].image
            })
        });
    }, []);
    const { title, slug, description, image } = latestPost


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
                                    <TextTruncate
                                        line={1}
                                        truncateText="...."
                                        text={latestPost.title}
                                    />
                                </Link>
                                <p>
                                    <TextTruncate
                                        line={2}
                                        // element="span"
                                        truncateText="…"
                                        text={latestPost.description}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 pl-0 side-title">
                        <ul className="ps-0">
                            {post.map((Item, index) => {
                                const { id, title, slug, description, image, category } = Item;
                                return (
                                    <li key={id}>
                                        <Link to={`blog-details/${slug}`} state={{ id, title, description, image }}>
                                            <TextTruncate
                                                line={1}
                                                truncateText="...."
                                                text={title}
                                            />
                                        </Link>
                                        <hr className="m-2 ms-0" />
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </section>
            <section className="Section-2 bg-white">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9 pe-lg-0 pe-md-0">
                        <div className="Sec-2-title d-flex p-2">
                            <MdOutlineDoubleArrow />
                            <h6 className="m-0">
                                <Link to={`blog-details/${slug}`} state={{ title, description, image }}>
                                    {latestPost.title}
                                </Link>
                            </h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 ps-lg-0 ps-md-0">
                        <div className="Sec-2-search d-flex p-2">
                            <MdOutlineSearch />
                            <input className="search-input" type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="Section-3">
                <div className="row mb-30">
                    <div className="col-lg-9 col-md-9 col-sm-9">
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
                                                        <div className="d-flex mt-1">Motalib Hossain</div>
                                                    </div>
                                                    <p className="time mb-0 mt-1">{category}</p>
                                                </div>
                                                <div className="post">
                                                    <h5 className="post-title mt-2">
                                                        {/* <a href='#' >{Item.title}.slice(0,80)</a> */}
                                                        <Link to={`blog-details/${slug}`} state={{ id, title, description, image }}>
                                                            <TextTruncate
                                                                line={2}
                                                                // element="span"
                                                                truncateText="........"
                                                                text={title}
                                                            // textTruncateChild={<a href="#">Read on</a>}
                                                            />
                                                        </Link>
                                                    </h5>
                                                    {/* <h5 className='post-title mt-2'>ইন্টার্নশিপ বা ট্রেনিং বদলে দিবে বেকারদের জীবন</h5> */}
                                                    <p className="post-body">
                                                        {/* {truncateString(Item.description, 60)}...<a href='/'>Read on</a> */}
                                                        <TextTruncate
                                                            line={2}
                                                            element="span"
                                                            truncateText="…"
                                                            text={description}
                                                            textTruncateChild={<Link className="readOn" to={`blog-details/${slug}`} state={{ id, title, description, image }}>Read on</Link>}
                                                        />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3"></div>

                </div>
            </section>

        </div>
    );
};

export default Home;
