import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

// icon
import { ImBlog } from "react-icons/im";

const AuthorProfile = () => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const { authname } = useParams();
    const [authinfo, setAuthinfo]=useState([])
    const [Post, setPost]=useState([])

    // Fetch author information 
    const url = `${SERVER_URL}/user`;
    useEffect(() => {
        axios({
            method: "get",
            url: url,
        }).then(function (response) {
            const filterAuthor=response.data.filter((authItem) => {
                return authItem.username === authname;
            })
            setAuthinfo(filterAuthor[0]);
        });
    }, []);

    // Fetch author articals 
    const blogUrl = `${SERVER_URL}/blog`;
    useEffect(() => {
        axios({
            method: "get",
            url: blogUrl,
        }).then(function (response) {
            if(authinfo !== null){
                const filterPost=response.data.filter((post) => {
                    return post.author === authinfo.id;
                })
                setPost(filterPost);
            }
        });
    }, [authinfo]);

    return (
        <>
            <div className="cover"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md" id="left">
                        <div className="card" id="user">
                            <div className="card-header">
                                Profile ID: 1010012
                                <a className="action" href="#">
                                    Edit Profile
                                </a>
                            </div>
                            <img id="userImage" />
                            <div className="card-block px-4 py-3">
                                <h4 className="card-title">{authinfo.username}</h4>
                                <div className="row">
                                    <div className="col">
                                        <div className="description font-weight-bold">{authinfo.description}</div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-primary mx-auto" id="renew">
                                        Renew Membership
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card" id="connections">
                            <div className="card-header">
                                <div className="label">Connections</div>
                                <a className="action" href="#">
                                    Find
                                </a>
                            </div>
                            <div className="list d-flex justify-content-between flex-wrap">
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                                <img className="list-item" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row mt-2">
                            <div className="col">
                                <div className="card" id="recentActivity">
                                    <div className="card-header">
                                        Your Post
                                        <a className="action" href="#">
                                            All Activity
                                        </a>
                                    </div>
                                    <ul className="list-group">
                                        {Post &&
                                            Post.map((item, index) => {
                                                const { title, slug, image, update_date } = item;
                                                const timestamp = item.update_date;
                                                const timeAgo = moment(timestamp).fromNow();
                                                return (
                                                    <li key={index} className="list-group-item">
                                                        <div className="row">
                                                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 pe-lg-0 text-center">
                                                                <ImBlog />
                                                            </div>
                                                            <div className="col-lg-8 col-md-7 col-sm-8 ps-lg-0">
                                                                {title}
                                                            </div>
                                                            <div className="col-lg-2 col-md-2 col-sm-2  text-lg-end">
                                                                {timeAgo}
                                                            </div>
                                                            <div className="col-lg-1 col-md-2 col-sm-1  text-lg-end">
                                                                <Link
                                                                    className="btn btn-primary"
                                                                    to={`../blog-details/${slug}`}
                                                                >
                                                                    View
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AuthorProfile;
