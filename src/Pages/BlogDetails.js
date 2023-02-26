import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

// import redux material
import { useSelector, useDispatch } from "react-redux";

import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

// File import
import "../style/blogdetails.css";
import Share from "../components/BlogPost/Share";

// Utility function
import FetchDataFromApi from "../Utils/DataFetch";

const BlogDetails = () => {
    const effectRan = useRef(false);
    const { slug } = useParams();
    const [singlePost, setSinglepost] = useState([]);
    const [BlogPost, setBlogPost] = useState([]);

    const url = "http://127.0.0.1:8000/";
    useEffect(() => {
        if (effectRan.current === false) {
            // this is for not load two time "Strict mood"
            FetchDataFromApi(url).then((data) => {
                setBlogPost(data);
            });
            return () => {
                effectRan.current = true;
            };
        }
    }, []);

    // Filter data from apu through url slug
    useEffect(() => {
        if (BlogPost.length > 0) {
            const filterdata = BlogPost.filter((blogData) => {
                return blogData.slug == slug;
            });
            setSinglepost(filterdata[0]);
        }
    }, [BlogPost]);

    const { id, title, description, image, category, author, Post_Comment } = singlePost;
    const shareUrl = `http://iTechEys.com/blog-details/${slug}/`;
    // const shareUrl="https://www.facebook.com/"

    // ============================================================
    //                Post comment and fetch comment
    // =============================================================
    const [PostComment, setPostComment] = useState(Post_Comment);
    const { UserInfo } = useSelector((state) => state);
    const { user_id, username } = JSON.parse(UserInfo);
    const [comment, setComment] = useState("");

    // fetch comment 
    const CommentUrl = "http://127.0.0.1:8000/comment-view/";
    useEffect(() => {
        FetchDataFromApi(CommentUrl).then((data) => {
            setPostComment(data);
        });
    }, []);

    // Post commen 
    const handleComment = (e) => {
        setComment(e.target.value);
    };
    const HandelSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/comment/",
            data: { user: user_id, post: id, comment: comment },
        })
            .then(function (response) {
                setPostComment([{ user:{"username":username}, post: id, comment: comment }, ...Post_Comment]);
            })
            .catch(function (error) {});
        e.target.reset();
    };

    return (
        <>
            <div className="blog-single gray-bg">
                <div className="Main-Container container-fluid">
                    <div className="row align-items-start">
                        <div className="col-lg-9 m-15px-tb">
                            <article className="article">
                                <div className="article-img">
                                    <img src={image} alt="post image" />
                                </div>
                                <div className="article-title">
                                    {/* <h6>
                                        <a href="#">{category && category.name}</a>
                                    </h6> */}
                                    {/* <div className="media d-flex">
                                        <div className="avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                title=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="auth-info pt-3">
                                            <a href="#" className="text-capitalize">{author && author.username}</a>
                                        </div>
                                    </div> */}
                                    <h2>{title} </h2>
                                </div>
                                <div className="article-content">
                                    <p>{description}</p>
                                </div>
                                <div className="nav tag-cloud">
                                    <a href="#">tag</a>
                                    <a href="#">Travel</a>
                                    <a href="#">Web Design</a>
                                    <a href="#">Marketing</a>
                                    <a href="#">Research</a>
                                    <a href="#">Managment</a>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-lg-6 like">
                                        <a href="#">
                                            {/* <AiFillLike /> */}
                                            <AiOutlineLike />
                                        </a>
                                        <a href="#">
                                            {/* <AiFillDislike /> */}
                                            <AiOutlineDislike className="mt-1" />
                                        </a>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className=" col-lg-12">
                                                <Share shareUrl={shareUrl} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="contact-form article-comment mb-3">
                                <h4>Leave a Reply</h4>
                                <form id="contact-form" method="POST" onSubmit={HandelSubmit}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    name="comment"
                                                    id="message"
                                                    placeholder="Your Comment *"
                                                    rows="2"
                                                    className="form-control"
                                                    onChange={handleComment}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="send">
                                                <button className="px-btn theme">
                                                    <span>Submit</span> <i className="arrow"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {Post_Comment &&
                                PostComment.map((item) => {
                                    return (
                                        <div className="article-comment user-title mb-3">
                                            <div className="user d-flex mb-0 ">
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                    alt="Profile Image"
                                                />
                                                <div className="d-flex mt-2 text-capitalize ps-2">
                                                    {item.user.username}
                                                </div>
                                            </div>
                                            <p className="time mb-0 mt-2 ps-5">{item.comment}</p>
                                        </div>
                                );
                            })}
                        </div>
                        <div className="col-lg-3 m-15px-tb blog-aside">
                            {/* <!-- Author --> */}
                            <div className="widget widget-author">
                                <div className="widget-title">
                                    <h3>Author</h3>
                                </div>
                                <div className="widget-body">
                                    <div className="media align-items-center d-flex flex-row">
                                        <div className="avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                                title=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="text-capitalize">
                                                <Link to="/author-profile" state={author}>
                                                    {author && author.username}
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <span className="text-justify">{author && author.description}</span>
                                </div>
                            </div>
                            {/* <!-- End Author -->
              <!-- Trending Post --> */}
                            <div className="widget widget-post">
                                <div className="widget-title">
                                    <h3>Trending Now</h3>
                                </div>
                                <div className="widget-body"></div>
                            </div>
                            {/* <!-- End Trending Post -->
              <!-- Latest Post --> */}
                            <div className="widget widget-latest-post">
                                <div className="widget-title">
                                    <h3>Latest Post</h3>
                                </div>
                                <div className="widget-body">
                                    <div className="latest-post-aside media">
                                        <div className="lpa-left media-body">
                                            <div className="lpa-title">
                                                <h5>
                                                    <a href="#">Prevent 75% of visitors from google analytics</a>
                                                </h5>
                                            </div>
                                            <div className="lpa-meta">
                                                <a className="name" href="#">
                                                    Rachel Roth
                                                </a>
                                                <a className="date" href="#">
                                                    26 FEB 2020
                                                </a>
                                            </div>
                                        </div>
                                        <div className="lpa-right">
                                            <a href="#">
                                                <img
                                                    src="https://via.placeholder.com/400x200/FFB6C1/000000"
                                                    title=""
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="latest-post-aside media">
                                        <div className="lpa-left media-body">
                                            <div className="lpa-title">
                                                <h5>
                                                    <a href="#">Prevent 75% of visitors from google analytics</a>
                                                </h5>
                                            </div>
                                            <div className="lpa-meta">
                                                <a className="name" href="#">
                                                    Rachel Roth
                                                </a>
                                                <a className="date" href="#">
                                                    26 FEB 2020
                                                </a>
                                            </div>
                                        </div>
                                        <div className="lpa-right">
                                            <a href="#">
                                                <img
                                                    src="https://via.placeholder.com/400x200/FFB6C1/000000"
                                                    title=""
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="latest-post-aside media">
                                        <div className="lpa-left media-body">
                                            <div className="lpa-title">
                                                <h5>
                                                    <a href="#">Prevent 75% of visitors from google analytics</a>
                                                </h5>
                                            </div>
                                            <div className="lpa-meta">
                                                <a className="name" href="#">
                                                    Rachel Roth
                                                </a>
                                                <a className="date" href="#">
                                                    26 FEB 2020
                                                </a>
                                            </div>
                                        </div>
                                        <div className="lpa-right">
                                            <a href="#">
                                                <img
                                                    src="https://via.placeholder.com/400x200/FFB6C1/000000"
                                                    title=""
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Latest Post -->
              <!-- widget Tags --> */}
                            <div className="widget widget-tags">
                                <div className="widget-title">
                                    <h3>Latest Tags</h3>
                                </div>
                                <div className="widget-body">
                                    <div className="nav tag-cloud">
                                        <a href="#">Design</a>
                                        <a href="#">Development</a>
                                        <a href="#">Travel</a>
                                        <a href="#">Web Design</a>
                                        <a href="#">Marketing</a>
                                        <a href="#">Research</a>
                                        <a href="#">Managment</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End widget Tags --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;
