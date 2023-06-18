import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

// import redux material
import { useSelector } from "react-redux";

// message framework
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icon
import { RiArrowDownSLine, RiListCheck2 } from "react-icons/ri";
import { FaUserCog, FaEllipsisV, FaAngleDoubleRight } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

// File import
import logo1 from "../asset/itecheys-logo-2.png";
import "../style/Dashboard.css";
import "../style/Dashboardmin.css";

const Dashboard = () => {
    const { UserInfo } = useSelector((state) => state);
    const { user_id, username, email, description } = JSON.parse(UserInfo);

    const [post, setPost] = useState();
    const [edit, setEdit] = useState(false);
    const [ID, setId] = useState(false);
    const [Comment, setComment] = useState([]);
    const [editPost, setEditPost] = useState();
    const [editCheck, setEditCheck] = useState();

    const url = "http://127.0.0.1:8000/";
    const urlcomment = "http://127.0.0.1:8000/comment/";
    useEffect(() => {
        // Blog Post data fetch
        axios({
            method: "get",
            url: url,
        }).then(function (response) {
            setPost(response.data);
        });

        // Post Comment data fetch
        axios({
            method: "get",
            url: urlcomment,
        }).then(function (response) {
            setComment(response.data);
        });
    }, []);

    // Close Edit Modal
    const CloseEditModal = () => {
        setEdit(false);
        setCurrentPostEdit("");
    };
    // Handle edit. Edit post open in modal form
    const HandleEdit = (id) => {
        setId(id);
        const filterData = post.filter((item) => item.id === id);
        setEditPost(filterData[0]);
        setEditCheck(filterData[0].published);
    };

    // ---------------------------------------------------------
    //                  Post Eidt functionality
    // ---------------------------------------------------------
    const [currentPostEdit, setCurrentPostEdit] = useState();

    const HandleCurrentEdit = (e) => {
        const { name, value } = e.target;
        setCurrentPostEdit((prev) => {
            return { ...prev, [name]: value };
        });
    };

    // Submit post
    const updateUrl = `http://127.0.0.1:8000/blog-edit/${ID && ID}`;
    const HandleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "PATCH",
            url: updateUrl,
            data: currentPostEdit,
        })
            .then(function (response) {
                setPost(response.data);
                setEdit(false);
                toast("Post update successfully.");
            })
            .catch(function (error) {
                toast(error.message);
            });
    };

    // console.log("editCheck-------", editCheck);
    // console.log("Edit-------", currentPostEdit);
    // console.log("currentPostEdit-------", currentPostEdit);

    return (
        <div className="Dashboard">
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <div className="app-header header-shadow">
                    <div className="app-header__logo">
                        <div className="logo-src">
                            <img src={logo1} alt="logo" width="120px" />
                        </div>
                        <div className="header__pane ml-auto">
                            <div>
                                <button
                                    type="button"
                                    className="hamburger close-sidebar-btn hamburger--elastic"
                                    data-class="closed-sidebar"
                                >
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="app-header__mobile-menu">
                        <div>
                            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="app-header__menu">
                        <span>
                            <button
                                type="button"
                                className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                            >
                                <span className="btn-icon-wrapper">
                                    {/* <i className="fa fa-ellipsis-v fa-w-6"></i> */}
                                    <FaEllipsisV className="fa-w-6" />
                                </span>
                            </button>
                        </span>
                    </div>
                    <div className="app-header__content">
                        <div className="app-header-left">
                            <div className="search-wrapper">
                                <div className="input-holder">
                                    <input type="text" className="search-input" placeholder="Type to search" />
                                    <button className="search-icon">
                                        <span></span>
                                    </button>
                                </div>
                                <button className="close"></button>
                            </div>
                            {/* <ul className="header-menu nav">
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link">
                                        <i className="nav-link-icon fa fa-database"> </i>
                                        Statistics
                                    </a>
                                </li>
                                <li className="btn-group nav-item">
                                    <a href="javascript:void(0);" className="nav-link">
                                        <i className="nav-link-icon fa fa-edit"></i>
                                        Projects
                                    </a>
                                </li>
                                <li className="dropdown nav-item">
                                    <a href="javascript:void(0);" className="nav-link">
                                        <FaThumbsUp className="nav-link-icon"/>
                                        Settings
                                    </a>
                                </li>
                            </ul>{" "} */}
                        </div>
                        <div className="app-header-right">
                            <div className="header-btn-lg pr-0">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                            <div className="btn-group">
                                                <a
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    className="p-0 btn"
                                                >
                                                    <img
                                                        width="42"
                                                        className="rounded-circle"
                                                        src="assets/images/avatars/1.jpg"
                                                        alt=""
                                                    />
                                                    <FaUserCog className="user-icon mr-2 opacity-8" />
                                                </a>
                                                <div
                                                    tabIndex="-1"
                                                    role="menu"
                                                    aria-hidden="true"
                                                    className="dropdown-menu dropdown-menu-right"
                                                >
                                                    <button type="button" tabIndex="0" className="dropdown-item">
                                                        User Account
                                                    </button>
                                                    <button type="button" tabIndex="0" className="dropdown-item">
                                                        Settings
                                                    </button>
                                                    <h6 tabIndex="-1" className="dropdown-header">
                                                        Header
                                                    </h6>
                                                    <button type="button" tabIndex="0" className="dropdown-item">
                                                        Actions
                                                    </button>
                                                    <div tabIndex="-1" className="dropdown-divider"></div>
                                                    <button type="button" tabIndex="0" className="dropdown-item">
                                                        Dividers
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-content-left  ml-3 header-user-info pr-3">
                                            <div className="widget-heading text-capitalize">{username}</div>
                                            <div className="widget-subheading">Product Manager</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-main">
                    <div className="app-sidebar sidebar-shadow">
                        <div className="app-header__logo">
                            <div className="logo-src">
                                <img src={logo1} alt="logo" width="120px" />
                            </div>
                            <div className="header__pane ml-auto">
                                <div>
                                    <button
                                        type="button"
                                        className="hamburger close-sidebar-btn hamburger--elastic"
                                        data-class="closed-sidebar"
                                    >
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="app-header__mobile-menu">
                            <div>
                                <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="app-header__menu">
                            <span>
                                <button
                                    type="button"
                                    className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                                >
                                    <span className="btn-icon-wrapper">
                                        <i className="fa fa-ellipsis-v fa-w-6"></i>
                                    </span>
                                </button>
                            </span>
                        </div>
                        <div className="scrollbar-sidebar">
                            <div className="app-sidebar__inner">
                                <ul className="vertical-nav-menu">
                                    <li className="app-sidebar__heading">Dashboards</li>
                                    <li>
                                        <a href="elements-utilities.html" className="mm-active">
                                            <MdDashboard className="metismenu-icon text-center" />
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">Blog Post</li>
                                    <li>
                                        <a href="elements-utilities.html">
                                            <RiListCheck2 className="metismenu-icon" />
                                            Post List
                                            <RiArrowDownSLine className="metismenu-state-icon caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="elements-buttons-standard.html">
                                                    <i className="metismenu-icon"></i>
                                                    Post Comment
                                                </a>
                                            </li>
                                            <li>
                                                <a href="elements-dropdowns.html">Post Like</a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li>
                                        <a href="elements-utilities.html">
                                            <i className="metismenu-icon pe-7s-car"></i>
                                            Components
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="components-tabs.html">
                                                    <i className="metismenu-icon"></i>Tabs
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-accordions.html">
                                                    <i className="metismenu-icon"></i>Accordions
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-notifications.html">
                                                    <i className="metismenu-icon"></i>Notifications
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-modals.html">
                                                    <i className="metismenu-icon"></i>Modals
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-progress-bar.html">
                                                    <i className="metismenu-icon"></i>Progress Bar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-tooltips-popovers.html">
                                                    <i className="metismenu-icon"></i>Tooltips &amp; Popovers
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-carousel.html">
                                                    <i className="metismenu-icon"></i>Carousel
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-calendar.html">
                                                    <i className="metismenu-icon"></i>Calendar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-pagination.html">
                                                    <i className="metismenu-icon"></i>Pagination
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-scrollable-elements.html">
                                                    <i className="metismenu-icon"></i>Scrollable
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components-maps.html">
                                                    <i className="metismenu-icon"></i>Maps
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="tables-regular.html">
                                            <i className="metismenu-icon pe-7s-display2"></i>
                                            Tables
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">Widgets</li>
                                    <li>
                                        <a href="dashboard-boxes.html">
                                            <i className="metismenu-icon pe-7s-display2"></i>
                                            Dashboard Boxes
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">Forms</li>
                                    <li>
                                        <a href="forms-controls.html">
                                            <i className="metismenu-icon pe-7s-mouse"></i>Forms Controls
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forms-layouts.html">
                                            <i className="metismenu-icon pe-7s-eyedropper"></i>Forms Layouts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forms-validation.html">
                                            <i className="metismenu-icon pe-7s-pendrive"></i>Forms Validation
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">Charts</li>
                                    <li>
                                        <a href="charts-chartjs.html">
                                            <i className="metismenu-icon pe-7s-graph2"></i>ChartJS
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">PRO Version</li>
                                    <li>
                                        <a
                                            href="https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/"
                                            target="_blank"
                                        >
                                            <i className="metismenu-icon pe-7s-graph2"></i>
                                            Upgrade to PRO
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <div className="row">
                                <div className="col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content bg-midnight-bloom">
                                        <div className="widget-content-wrapper text-white">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Total Post</div>
                                                {/* <div className="widget-subheading">Last year expenses</div> */}
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-white">
                                                    <span>{post && post?.length}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content bg-primary">
                                        <div className="widget-content-wrapper text-white">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Total Comment</div>
                                                {/* <div className="widget-subheading">Total Clients Profit</div> */}
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-white">
                                                    <span>{Comment?.length}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content bg-grow-early">
                                        <div className="widget-content-wrapper text-white">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Total Like</div>
                                                {/* <div className="widget-subheading">People Interested</div> */}
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-white">
                                                    <span>4642</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content bg-premium-dark">
                                        <div className="widget-content-wrapper text-white">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Products Sold</div>
                                                <div className="widget-subheading">Revenue streams</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-warning">
                                                    <span>$14M</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-card mb-3 card">
                                        <div className="card-header">
                                            Active Post
                                            <div className="btn-actions-pane-right">
                                                <div role="group" className="btn-group-sm btn-group">
                                                    <button className="active btn btn-focus">Last Week</button>
                                                    <button className="btn btn-focus">All Month</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">SL</th>
                                                        <th className="pl-4">Title</th>
                                                        <th>Published</th>
                                                        <th className="text-center">Like</th>
                                                        <th className="text-center">Comment</th>
                                                        <th className="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {post &&
                                                        post.map((item, index) => {
                                                            const {
                                                                id,
                                                                slug,
                                                                title,
                                                                Post_Comment,
                                                                Post_Liked,
                                                                category,
                                                                published,
                                                            } = item;
                                                            console.log("update", published);
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="text-center text-muted">{index}</td>
                                                                    <td>
                                                                        <div className="widget-content p-0">
                                                                            <div className="widget-content-wrapper">
                                                                                <div className="widget-content-left mr-3">
                                                                                    <div className="widget-content-left">
                                                                                        <img
                                                                                            width="40"
                                                                                            className="rounded-circle"
                                                                                            src="assets/images/avatars/4.jpg"
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="widget-content-left flex2">
                                                                                    <div className="widget-heading">
                                                                                        {title}
                                                                                    </div>
                                                                                    <div className="widget-subheading opacity-7">
                                                                                        {category?.name}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <input type="checkbox" checked={published} />
                                                                    </td>
                                                                    <td className="text-center">
                                                                        {Post_Liked?.length}
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <div className="">{Post_Comment?.length}</div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => {
                                                                                HandleEdit(id);
                                                                                setEdit(true);
                                                                            }}
                                                                            id="PopoverCustomT-1"
                                                                            className="btn btn-info btn-sm mr-2"
                                                                        >
                                                                            <FiEdit />
                                                                        </button>
                                                                        <Link
                                                                            id="PopoverCustomT-1"
                                                                            className="btn btn-primary btn-sm"
                                                                            to={`../blog-details/${slug}`}
                                                                        >
                                                                            Details
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="d-block text-center card-footer">
                                            {/* <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                                                <i className="pe-7s-trash btn-icon-wrapper"> </i>
                                            </button> */}
                                            <button className="btn-wide btn btn-success">
                                                Load more
                                                <FaAngleDoubleRight className="ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pr-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-danger">
                                                            71%
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            {/* <div
                                                                className="progress-bar bg-danger"
                                                                role="progressbar"
                                                                aria-valuenow="71"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                                style="width: 71%;"
                                                            ></div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Income Target</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pr-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-success">
                                                            54%
                                                        </div>
                                                    </div>
                                                    {/* <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            <div
                                                                className="progress-bar bg-success"
                                                                role="progressbar"
                                                                aria-valuenow="54"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                                style="width: 54%;"
                                                            ></div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Expenses Target</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pr-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-warning">
                                                            32%
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            {/* <div
                                                                className="progress-bar bg-warning"
                                                                role="progressbar"
                                                                aria-valuenow="32"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                                style="width: 32%;"
                                                            ></div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Spendings Target</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pr-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            {/* <div
                                                                className="progress-bar bg-info"
                                                                role="progressbar"
                                                                aria-valuenow="89"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                                style="width: 89%;"
                                                            ></div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Totals Target</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="app-wrapper-footer">
                            <div className="app-footer">
                                <div className="app-footer__inner">
                                    <div className="app-footer-left">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Footer Link 1
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Footer Link 2
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="app-footer-right">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Footer Link 3
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    <div className="badge badge-success mr-1 ml-0">
                                                        <small>NEW</small>
                                                    </div>
                                                    Footer Link 4
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                    </div>
                    <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
                </div>
            </div>

            {/* <!-- Post edit Modal --> */}
            <div className="EditModal">
                <Modal show={edit} onHide={CloseEditModal} size="lg">
                    <Modal.Header className="bg-primary text-white" closeButton>
                        <Modal.Title>Edit your Article</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <div className="container"> */}
                        <form className="submit-post" onSubmit={HandleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label> Title {editPost?.id}</label>
                                        <input
                                            type="text"
                                            name="title"
                                            defaultValue={editPost?.title}
                                            className="form-control"
                                            placeholder=""
                                            onChange={HandleCurrentEdit}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label> Slug</label>
                                        <input
                                            type="text"
                                            name="slug"
                                            defaultValue={editPost?.slug}
                                            className="form-control"
                                            placeholder=""
                                            onChange={HandleCurrentEdit}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label> Image</label>
                                        <input
                                            type="file"
                                            name="image"
                                            className="form-control"
                                            placeholder=""
                                            // onChange={onImageChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Catagory</label>
                                        <select
                                            className="form-select"
                                            name="category"
                                            defaultValue={editPost?.category.id}
                                            onChange={HandleCurrentEdit}
                                        >
                                            <option>Catagory</option>
                                            <option value={editPost?.category.id}>{editPost?.category.name}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Author</label>
                                        <input
                                            // ref={authorName}
                                            type="text"
                                            name="author"
                                            className="form-control"
                                            placeholder=""
                                            value={editPost?.author.id}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="checkbox pt-5">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="published"
                                                value={editCheck ? false : true}
                                                checked={editCheck}
                                                onClick={() => setEditCheck(!editCheck)}
                                                onChange={HandleCurrentEdit}
                                            />
                                            <span className="ps-2">Published.</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea
                                            type="text"
                                            name="description"
                                            defaultValue={editPost?.description}
                                            className="form-control"
                                            placeholder="Description"
                                            onChange={HandleCurrentEdit}
                                        />
                                    </div>
                                </div>
                            </div>
                            <Modal.Footer className="border-0 px-0">
                                <button type="submit" className="btn btn-xs btn-primary me-0" variant="primary">
                                    Edit
                                </button>
                            </Modal.Footer>
                        </form>
                        {/* </div> */}
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default Dashboard;
