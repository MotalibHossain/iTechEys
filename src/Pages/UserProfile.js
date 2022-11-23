import React from "react";
import "../style/userProfile.css";

const UserProfile = () => {
    const userinfo=JSON.parse(localStorage.getItem("UserInfo"))
    console.log(userinfo)
    const {username, email, description}=userinfo
    console.log(username, email, description)
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
                        {/* <div className="row mt-4">
                            <div className="col font-weight-bold">[Association Name]</div>
                        </div> */}
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
                        <div className="row">
                            <div className="col">
                                <div className="alert bg-primary text-white">
                                    <button className="close" data-dismiss="alert">
                                        <span>&times;</span>
                                    </button>
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
                        <div className="row">
                            <div className="col">
                                <div className="card" id="recentActivity">
                                    <div className="card-header">
                                        Recent Activity
                                        <a className="action" href="#">
                                            All Activity
                                        </a>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="row no-gutters">
                                                <div className="col">
                                                    <div className="row no-gutters align-content-center">
                                                        <div className="col icon warning">
                                                            <span className="fa-stack fa-lg">
                                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                                <i className="fa fa-usd fa-stack-1x"></i>
                                                            </span>
                                                        </div>
                                                        <div className="col">
                                                            You have a recent payment that did not process
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col right">
                                                    <div className="row no-gutters justify-content-center align-items-center">
                                                        <div className="view">
                                                            <button className="btn btn-primary">View</button>
                                                        </div>
                                                        <div className="text-center">4 Hours Ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row no-gutters">
                                                <div className="col">
                                                    <div className="row no-gutters align-content-center">
                                                        <div className="col icon">
                                                            <i className="fa fa-calendar-o fa-2x"></i>
                                                        </div>
                                                        <div className="col">
                                                            You registered for an event, Greater Atlanta Champer of
                                                            Commerce 2015
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col right">
                                                    <div className="row no-gutters justify-content-center align-items-center">
                                                        <div className="view">
                                                            <button className="btn btn-primary">View</button>
                                                        </div>
                                                        <div className="text-center">2 Days Ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row no-gutters">
                                                <div className="col">
                                                    <div className="row no-gutters align-content-center">
                                                        <div className="col icon">
                                                            <span className="fa-stack fa-lg">
                                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                                <i className="fa fa-usd fa-stack-1x"></i>
                                                            </span>
                                                        </div>
                                                        <div className="col">
                                                            You made a payment in the amount of <em>$34.99</em> to your
                                                            membership account
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col right">
                                                    <div className="row no-gutters justify-content-center align-items-center">
                                                        <div className="view">
                                                            <button className="btn btn-primary">View</button>
                                                        </div>
                                                        <div className="text-center">5 Days Ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="row no-gutters">
                                                <div className="col">
                                                    <div className="row no-gutters align-content-center">
                                                        <div className="col icon">
                                                            <i className="fa fa-envelope fa-2x"></i>
                                                        </div>
                                                        <div className="col">
                                                            You received a message from Bill Jones
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col right">
                                                    <div className="row no-gutters justify-content-center align-items-center">
                                                        <div className="view">
                                                            <button className="btn btn-primary">View</button>
                                                        </div>
                                                        <div className="text-center">7 Days Ago</div>
                                                    </div>
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
