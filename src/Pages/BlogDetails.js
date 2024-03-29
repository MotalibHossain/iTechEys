import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";

// bootstrap
import Modal from "react-bootstrap/Modal";

// icons
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

// message framework
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import redux material
import { useSelector, useDispatch } from "react-redux";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from "react-icons/ai";

// File import
import "../style/blogdetails.css";
import Share from "../components/BlogPost/Share";

// Utility function
import FetchDataFromApi from "../Utils/DataFetch";

const BlogDetails = () => {
    const SERVER_URL=process.env.REACT_APP_SERVER_URL
    // modal
    const [edit, setEdit] = useState(false);
    const [dalete, setDelete] = useState(false);

    const effectRan = useRef(false);
    const { slug } = useParams();
    const [singlePost, setSinglepost] = useState([]);
    const [BlogPost, setBlogPost] = useState([]);
    const [PostComment, setPostComment] = useState();
    const [isComment, setIscomment] = useState(false);

    const url = `${SERVER_URL}`;
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

    // Filter data from api through url slug and post comment sorting
    useEffect(() => {
        if (BlogPost.length > 0) {
            const filterdata = BlogPost.filter((blogData) => {
                return blogData.slug == slug;
            });
            setSinglepost(filterdata[0]);

            // Comment section
            const thisBlogComment = filterdata[0].Post_Comment;
            const findCurrentUser = thisBlogComment.findIndex((r) => r.user.username === username);
            const SortedComment = thisBlogComment.splice(findCurrentUser);

            // marge sorted and all comments array
            const comments = SortedComment.concat(thisBlogComment);
            setPostComment(comments);

            // User comment already exits or not
            if (comments !== null) {
                const UserAlreadyComment = comments.filter((item) => item.user.username === username);
                if (UserAlreadyComment.length > 0) {
                    setIscomment(true);
                }
            }
        }
    }, [BlogPost]);

    const { id, title, description, image, author } = singlePost;
    const shareUrl = `http://iTechEys.com/blog-details/${slug}/`;

    // ============================================================
    //                Post comment and fetch comment
    // =============================================================
    const { UserInfo } = useSelector((state) => state);
    // const isAdmin= JSON.parse(UserInfo);
    const [user_id, setUserId] = useState("");
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [commentEdit, setCommentEdit] = useState("");

    // avoid error like the way when user is not login
    useEffect(() => {
        if (UserInfo !== null) {
            const { user_id, username } = JSON.parse(UserInfo);
            setUserId(user_id);
            setUsername(username);
        }
    }, []);

    // write commen
    const handleComment = (e) => {
        setComment(e.target.value);
    };
    // edit comment
    const handleCommentEdit = (e, prev) => {
        setCommentEdit(e.target.value);
    };
    // Submit comment
    const uid = uuid().slice(0, 8);
    const HandelSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/comment/",
            data: { custom_id: uid, user: user_id, post: id, comment: comment },
        })
            .then(function (response) {
                setPostComment([
                    { custom_id: uid, user: { username: username }, post: id, comment: comment },
                    ...PostComment,
                ]);
                // Comment button disable and enable
                const isCommentExits = PostComment.filter((item) => item.user.username === username);
                if (isCommentExits !== null) {
                    setIscomment(true);
                }
            })
            .catch(function (error) {
                toast("Without login, you can't write comment.");
            });
        e.target.reset();
    };
    // Comment update
    let URL = `${SERVER_URL}/comment/delete/${PostComment?.[0]?.custom_id}`;
    const HandelEdit = (e) => {
        e.preventDefault();
        axios({
            method: "PATCH",
            url: URL,
            data: { comment: commentEdit },
        })
            .then(function (response) {
                // comment sorting
                let allComments = response.data;
                const findCurrentUser = allComments.findIndex((r) => r.user.username === username);
                const SortedComment = allComments.splice(findCurrentUser);

                // marge sorted and all comments array
                const comments = SortedComment.concat(allComments);

                setPostComment(comments);
                setEdit(false);
                toast("Comment update successfully.");
            })
            .catch(function (error) {
                toast(error.message);
            });
    };
    // Comment delete
    const HandleDelete = (e) => {
        axios({
            method: "DELETE",
            url: URL,
        })
            .then(function (response) {
                setIscomment(false);
                // console.log("debug_ Post_Comment-----------------", response.data);
                setPostComment(response.data);
                setDelete(false);
                toast("Comment delete successfully.");
            })
            .catch(function (error) {
                toast(error.message);
            });
    };

    // ============================================================
    //                Post Like and fetch comment
    // =============================================================
    const [like, setLike] = useState();
    const [thisPostLike, setThisPostLike] = useState();
    const [deleteCommentId, setDeleteCommentId] = useState();
    const [isLike, setIsLike] = useState(null);

    let LikeUrl = `${SERVER_URL}/liked/`;
    useEffect(() => {
        axios({
            method: "GET",
            url: LikeUrl,
            // "data":{"user":user_id, "post":id,"like":true}
        })
            .then(function (response) {
                setLike(response.data);
            })
            .catch(function (error) {
                toast(error.message);
            });
    }, []);

    useEffect(() => {
        if (id !== undefined && like !== undefined) {
            let liked = like.filter((item) => {
                return item.post === id && item.user === user_id;
            });

            let thisPostLiked = like.filter((item) => {
                return item.post === id;
            });
            setThisPostLike(thisPostLiked);
            
            if (liked.length !== 0) {
                setIsLike(true);
                setDeleteCommentId(liked[0].id);
            } else {
                setIsLike(null);
            }
        }
    }, [like, id]);

    // Handle like
    const HandlePost = () => {
        axios({
            method: "post",
            url: LikeUrl,
            data: { user: user_id, post: id, like: true },
        })
            .then(function (response) {
                setLike(response.data);
            })
            .catch(function (error) {
                toast(error.message);
            });
    };

    // Handle post like delete
    let DeleteLikeUrl = `${SERVER_URL}/liked/${deleteCommentId}`;
    const HandlePostDelete = () => {
        axios({
            method: "delete",
            url: DeleteLikeUrl,
            // "data":{"user":user_id, "post":id,"like":true}
        })
            .then(function (response) {
                setLike(response.data);
            })
            .catch(function (error) {
                toast(error.message);
            });
    };

    // console.log("debug_ comment***********************", PostComment?.[0]?.custom_id);
    // console.log("debug_ Post_Comment-----------------", PostComment);
    // console.log("debug_ isLike-----------------", deleteCommentId, DeleteLikeUrl);

    return (
        <>
            <div className="blog-single gray-bg pb-0">
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
                                    <div className="col-lg-5 like">
                                        {isLike === null ? (
                                            <a class="like__btn" onClick={HandlePost}>
                                                <FaRegThumbsUp />
                                                <span id="count">{thisPostLike?.length}</span> Like
                                            </a>
                                        ) : (
                                            <a class="like__btn" onClick={HandlePostDelete}>
                                                <FaThumbsUp />
                                                <span id="count">{thisPostLike?.length} Liked</span>
                                            </a>
                                        )}
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
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="send">
                                                <button className="px-btn theme" disabled={isComment}>
                                                    <span>Submit</span> <i className="arrow"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {PostComment &&
                                PostComment.map((item, index) => {
                                    // return
                                    if (item.user.username === username) {
                                        return (
                                            <div key={index} className="article-comment user-title mb-3">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9">
                                                        <div className="user d-flex mb-0 ">
                                                            <img
                                                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                                alt="Profile Image"
                                                            />
                                                            <div className="d-flex mt-2 text-capitalize ps-2">
                                                                {item.user.username}
                                                            </div>
                                                        </div>
                                                        <p className="time text-justify mb-0 mt-2 ps-5">
                                                            {item.comment}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 edit text-end">
                                                        <a onClick={() => setEdit(true)}>
                                                            <FiEdit />
                                                        </a>
                                                        <a onClick={() => setDelete(true)}>
                                                            <RiDeleteBin5Line />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div key={index} className="article-comment user-title mb-3">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9">
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
                                                </div>
                                            </div>
                                        );
                                    }
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
                                                <Link to={`/author/${author && author.username}`}>
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
            {/* <!-- Edit Modal --> */}
            <div className="EditModal">
                <Modal show={edit} onHide={() => setEdit(false)}>
                    <Modal.Header className="bg-primary text-white" closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={HandelEdit}>
                        <Modal.Body>
                            <div className="form-group">
                                <label className="pb-2"> Comment</label>
                                <input
                                    type="text"
                                    name="comment-edit"
                                    defaultValue={PostComment?.[0]?.comment}
                                    onChange={handleCommentEdit}
                                    className="form-control"
                                    placeholder=""
                                    required
                                />
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="pt-0 pe-4 border-0">
                            <button type="submit" className="btn btn-xs btn-primary" variant="primary">
                                Edit
                            </button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
            {/* <!-- Delete Modal --> */}
            <div id="DeleteModal">
                <Modal show={dalete} onHide={() => setDelete(false)}>
                    <Modal.Header closeButton className="bg-warning">
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pt-4">
                        <b className="text-danger">Are you sure ? You want to delete this comment.</b>
                    </Modal.Body>
                    <Modal.Footer className="pt-0 pe-4 border-0">
                        <button className="btn btn-xs btn-danger" variant="primary" onClick={HandleDelete}>
                            Delete
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default BlogDetails;
