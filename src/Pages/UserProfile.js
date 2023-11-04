import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import "../style/userProfile.css";
// icon
import { ImBlog } from "react-icons/im";
// import redux material
import { useSelector, useDispatch } from "react-redux";

const UserProfile = () => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const { UserInfo } = useSelector((state) => state);
    const { user_id, username, email, description } = JSON.parse(UserInfo);

    // Blog post fetch
    const url = `${SERVER_URL}/blog`;
    const [Post, setPost] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: url,
        }).then(function (response) {
            setPost(
                response.data.filter((post) => {
                    return post.author === user_id;
                })
            );
        });
    }, []);

    console.log("Post", Post);
    console.log(user_id, username, email, description);
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
                                <h4 className="card-title">{username}</h4>
                                <div className="row">
                                    <div className="col">
                                        <div className="description font-weight-bold">{description}</div>
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
                        <div className="row">
                            <div className="col">
                                <div className="alert bg-primary text-white mb-0">
                                <button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button>
                                    <div className="row">
                                        <div className="col-lg">
                                            <div className="row">
                                                <div className="col">2015 Innovation Conference</div>
                                            </div>
                                            <div className="row my-2">
                                                <div className="col small text-white">
                                                    Interesting speakers, delicious food, do not miss this event!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg signup">
                                            <button className="btn btn-secondary" href="#">
                                                Sign up Today!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <div className="card" id="upcomingEvents">
                                    <div className="card-header">
                                        Upcoming Events
                                        <a className="action" href="#">
                                            All Upcoming
                                        </a>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="row no-gutters">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col">
                                                            Greater Atlanta Chamber of Commerce 2015
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col small">March 15th, 2015</div>
                                                    </div>
                                                </div>
                                                <div className="col view">
                                                    <button className="btn btn-primary">View</button>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row no-gutters">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col">
                                                            Wednesday Potluck Dinner, Chicago Chapter
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col small">March 15th, 2015</div>
                                                    </div>
                                                </div>
                                                <div className="col view">
                                                    <button className="btn btn-primary">View</button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card" id="goals">
                                    <div className="card-header">
                                        Goals
                                        <a className="action" href="#">
                                            Set New Goal
                                        </a>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="row no-gutters">
                                                <div className="col">March 2015 Donations</div>
                                                <div className="col text-right">$300.00</div>
                                            </div>
                                            <div className="row my-2">
                                                <div className="col">
                                                    <div className="progress">
                                                        <div className="progress-bar"></div>
                                                        {/* <div className="progress-bar" style="width:63%;"></div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col small">$221.34 collected! 63% of your goal</div>
                                                <div className="col details text-right">
                                                    <a className="action" href="#">
                                                        Details
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row no-gutters">
                                                <div className="col">Event Fundraising</div>
                                                <div className="col text-right">$1,500.00</div>
                                            </div>
                                            <div className="row my-2">
                                                <div className="col">
                                                    <div className="progress">
                                                        <div className="progress-bar"></div>
                                                        {/* <div className="progress-bar" style="width:14%;"></div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col small">$221.34 collected! 14% of your goal</div>
                                                <div className="col details text-right">
                                                    <a className="action" href="#">
                                                        Details
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
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

export default UserProfile;
