import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Icon 
import { RiArrowDownSLine, RiListCheck2 } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa";

import logo1 from "../asset/itecheys-logo-2.png";
import "../style/Dashboard.css";
import "../style/Dashboardmin.css";

const Dashboard = () => {
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
                                    <i className="fa fa-ellipsis-v fa-w-6"></i>
                                </span>
                            </button>
                        </span>
                    </div>{" "}
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
                            <ul className="header-menu nav">
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
                            </ul>{" "}
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
                                                    <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                                </a>
                                                <div
                                                    tabindex="-1"
                                                    role="menu"
                                                    aria-hidden="true"
                                                    className="dropdown-menu dropdown-menu-right"
                                                >
                                                    <button type="button" tabindex="0" className="dropdown-item">
                                                        User Account
                                                    </button>
                                                    <button type="button" tabindex="0" className="dropdown-item">
                                                        Settings
                                                    </button>
                                                    <h6 tabindex="-1" className="dropdown-header">
                                                        Header
                                                    </h6>
                                                    <button type="button" tabindex="0" className="dropdown-item">
                                                        Actions
                                                    </button>
                                                    <div tabindex="-1" className="dropdown-divider"></div>
                                                    <button type="button" tabindex="0" className="dropdown-item">
                                                        Dividers
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-content-left  ml-3 header-user-info">
                                            <div className="widget-heading">Alina Mclourd</div>
                                            <div className="widget-subheading">VP People Manager</div>
                                        </div>
                                        <div className="widget-content-right header-user-info ml-3">
                                            <button
                                                type="button"
                                                className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                                            >
                                                <i className="fa text-white fa-calendar pr-1 pl-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
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
                                        <FontAwesomeIcon icon="fa-solid fa-thumbs-up" style={{color: "#1f60d1",}} />
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">Blog Post</li>
                                    <li>
                                        <a href="elements-utilities.html">
                                            <RiListCheck2 className="metismenu-icon"/>
                                            Post List
                                            <RiArrowDownSLine className="metismenu-state-icon caret-left"/>
                                            
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="elements-buttons-standard.html">
                                                    <i className="metismenu-icon"></i>
                                                    Post Comment
                                                </a>
                                            </li>
                                            <li>
                                                <a href="elements-dropdowns.html">
                                                Post Like
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
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
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <div className="row">
                                <div className="col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content bg-midnight-bloom">
                                        <div className="widget-content-wrapper text-white">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Total Orders</div>
                                                <div className="widget-subheading">Last year expenses</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-white">
                                                    <span>1896</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content bg-arielle-smile">
                                        <div className="widget-content-wrapper text-white">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Clients</div>
                                                <div className="widget-subheading">Total Clients Profit</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-white">
                                                    <span>$ 568</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content bg-grow-early">
                                        <div className="widget-content-wrapper text-white">
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Followers</div>
                                                <div className="widget-subheading">People Interested</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="widget-numbers text-white">
                                                    <span>46%</span>
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
                            {/* <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="mb-3 card">
                                        <div className="card-header-tab card-header-tab-animation card-header">
                                            <div className="card-header-title">
                                                <i className="header-icon lnr-apartment icon-gradient bg-love-kiss">
                                                    {" "}
                                                </i>
                                                Sales Report
                                            </div>
                                            <ul className="nav">
                                                <li className="nav-item">
                                                    <a href="javascript:void(0);" className="active nav-link">
                                                        Last
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="nav-link second-tab-toggle"
                                                    >
                                                        Current
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="tabs-eg-77">
                                                    <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                                                        <div className="widget-chat-wrapper-outer">
                                                            <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                                <canvas id="canvas"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">
                                                        Top Authors
                                                    </h6>
                                                    <div className="scroll-area-sm">
                                                        <div className="scrollbar-container">
                                                            <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                                                <li className="list-group-item">
                                                                    <div className="widget-content p-0">
                                                                        <div className="widget-content-wrapper">
                                                                            <div className="widget-content-left mr-3">
                                                                                <img
                                                                                    width="42"
                                                                                    className="rounded-circle"
                                                                                    src="assets/images/avatars/9.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="widget-content-left">
                                                                                <div className="widget-heading">
                                                                                    Ella-Rose Henry
                                                                                </div>
                                                                                <div className="widget-subheading">
                                                                                    Web Developer
                                                                                </div>
                                                                            </div>
                                                                            <div className="widget-content-right">
                                                                                <div className="font-size-xlg text-muted">
                                                                                    <small className="opacity-5 pr-1">
                                                                                        $
                                                                                    </small>
                                                                                    <span>129</span>
                                                                                    <small className="text-danger pl-2">
                                                                                        <i className="fa fa-angle-down"></i>
                                                                                    </small>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="widget-content p-0">
                                                                        <div className="widget-content-wrapper">
                                                                            <div className="widget-content-left mr-3">
                                                                                <img
                                                                                    width="42"
                                                                                    className="rounded-circle"
                                                                                    src="assets/images/avatars/5.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="widget-content-left">
                                                                                <div className="widget-heading">
                                                                                    Ruben Tillman
                                                                                </div>
                                                                                <div className="widget-subheading">
                                                                                    UI Designer
                                                                                </div>
                                                                            </div>
                                                                            <div className="widget-content-right">
                                                                                <div className="font-size-xlg text-muted">
                                                                                    <small className="opacity-5 pr-1">
                                                                                        $
                                                                                    </small>
                                                                                    <span>54</span>
                                                                                    <small className="text-success pl-2">
                                                                                        <i className="fa fa-angle-up"></i>
                                                                                    </small>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="widget-content p-0">
                                                                        <div className="widget-content-wrapper">
                                                                            <div className="widget-content-left mr-3">
                                                                                <img
                                                                                    width="42"
                                                                                    className="rounded-circle"
                                                                                    src="assets/images/avatars/4.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="widget-content-left">
                                                                                <div className="widget-heading">
                                                                                    Vinnie Wagstaff
                                                                                </div>
                                                                                <div className="widget-subheading">
                                                                                    Java Programmer
                                                                                </div>
                                                                            </div>
                                                                            <div className="widget-content-right">
                                                                                <div className="font-size-xlg text-muted">
                                                                                    <small className="opacity-5 pr-1">
                                                                                        $
                                                                                    </small>
                                                                                    <span>429</span>
                                                                                    <small className="text-warning pl-2">
                                                                                        <i className="fa fa-dot-circle"></i>
                                                                                    </small>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="widget-content p-0">
                                                                        <div className="widget-content-wrapper">
                                                                            <div className="widget-content-left mr-3">
                                                                                <img
                                                                                    width="42"
                                                                                    className="rounded-circle"
                                                                                    src="assets/images/avatars/3.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="widget-content-left">
                                                                                <div className="widget-heading">
                                                                                    Ella-Rose Henry
                                                                                </div>
                                                                                <div className="widget-subheading">
                                                                                    Web Developer
                                                                                </div>
                                                                            </div>
                                                                            <div className="widget-content-right">
                                                                                <div className="font-size-xlg text-muted">
                                                                                    <small className="opacity-5 pr-1">
                                                                                        $
                                                                                    </small>
                                                                                    <span>129</span>
                                                                                    <small className="text-danger pl-2">
                                                                                        <i className="fa fa-angle-down"></i>
                                                                                    </small>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <div className="widget-content p-0">
                                                                        <div className="widget-content-wrapper">
                                                                            <div className="widget-content-left mr-3">
                                                                                <img
                                                                                    width="42"
                                                                                    className="rounded-circle"
                                                                                    src="assets/images/avatars/2.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="widget-content-left">
                                                                                <div className="widget-heading">
                                                                                    Ruben Tillman
                                                                                </div>
                                                                                <div className="widget-subheading">
                                                                                    UI Designer
                                                                                </div>
                                                                            </div>
                                                                            <div className="widget-content-right">
                                                                                <div className="font-size-xlg text-muted">
                                                                                    <small className="opacity-5 pr-1">
                                                                                        $
                                                                                    </small>
                                                                                    <span>54</span>
                                                                                    <small className="text-success pl-2">
                                                                                        <i className="fa fa-angle-up"></i>
                                                                                    </small>
                                                                                </div>
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
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="mb-3 card">
                                        <div className="card-header-tab card-header">
                                            <div className="card-header-title">
                                                <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure">
                                                    {" "}
                                                </i>
                                                Bandwidth Reports
                                            </div>
                                            <div className="btn-actions-pane-right">
                                                <div className="nav">
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate"
                                                    >
                                                        Tab 1
                                                    </a>
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt"
                                                    >
                                                        Tab 2
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-content">
                                            <div className="tab-pane fade active show" id="tab-eg-55">
                                                <div className="widget-chart p-3">
                                                 <div style="height: 350px">
                                                        <canvas id="line-chart"></canvas>
                                                    </div>
                                                    <div className="widget-chart-content text-center mt-5">
                                                        <div className="widget-description mt-0 text-warning">
                                                            <i className="fa fa-arrow-left"></i>
                                                            <span className="pl-1">175.5%</span>
                                                            <span className="text-muted opacity-8 pl-1">
                                                                increased server resources
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pt-2 card-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                63%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Generated Leads
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                             <div
                                                                                className="progress-bar bg-danger"
                                                                                role="progressbar"
                                                                                aria-valuenow="63"
                                                                                aria-valuemin="0"
                                                                                aria-valuemax="100"
                                                                                style="width: 63%;"
                                                                            ></div> 
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                32%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Submitted Tickers
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                         <div
                                                                                className="progress-bar bg-success"
                                                                                role="progressbar"
                                                                                aria-valuenow="32"
                                                                                aria-valuemin="0"
                                                                                aria-valuemax="100"
                                                                                style="width: 32%;"
                                                                            ></div> 
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                71%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Server Allocation
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                         <div
                                                                                className="progress-bar bg-primary"
                                                                                role="progressbar"
                                                                                aria-valuenow="71"
                                                                                aria-valuemin="0"
                                                                                aria-valuemax="100"
                                                                                style="width: 71%;"
                                                                            ></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                41%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Generated Leads
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                            <div
                                                                                className="progress-bar bg-warning"
                                                                                role="progressbar"
                                                                                aria-valuenow="41"
                                                                                aria-valuemin="0"
                                                                                aria-valuemax="100"
                                                                                style="width: 41%;"
                                                                            ></div> 
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="row">
                                <div className="col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">Total Orders</div>
                                                    <div className="widget-subheading">Last year expenses</div>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="widget-numbers text-success">1896</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">Products Sold</div>
                                                    <div className="widget-subheading">Revenue streams</div>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="widget-numbers text-warning">$3M</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">Followers</div>
                                                    <div className="widget-subheading">People Interested</div>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="widget-numbers text-danger">45,9%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                                    <div className="card mb-3 widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">Income</div>
                                                    <div className="widget-subheading">Expected totals</div>
                                                </div>
                                                <div className="widget-content-right">
                                                    <div className="widget-numbers text-focus">$147</div>
                                                </div>
                                            </div>
                                            <div className="widget-progress-wrapper">
                                                <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                    <div
                                                        className="progress-bar bg-info"
                                                        role="progressbar"
                                                        aria-valuenow="54"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                        style="width: 54%;"
                                                    ></div>
                                                </div>
                                                <div className="progress-sub-label">
                                                    <div className="sub-label-left">Expenses</div>
                                                    <div className="sub-label-right">100%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-card mb-3 card">
                                        <div className="card-header">
                                            Active Users
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
                                                        <th className="text-center">#</th>
                                                        <th>Name</th>
                                                        <th className="text-center">City</th>
                                                        <th className="text-center">Status</th>
                                                        <th className="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center text-muted">#345</td>
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
                                                                        <div className="widget-heading">John Doe</div>
                                                                        <div className="widget-subheading opacity-7">
                                                                            Web Developer
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">Madrid</td>
                                                        <td className="text-center">
                                                            <div className="badge badge-warning">Pending</div>
                                                        </td>
                                                        <td className="text-center">
                                                            <button
                                                                type="button"
                                                                id="PopoverCustomT-1"
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center text-muted">#347</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-content-left">
                                                                            <img
                                                                                width="40"
                                                                                className="rounded-circle"
                                                                                src="assets/images/avatars/3.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">
                                                                            Ruben Tillman
                                                                        </div>
                                                                        <div className="widget-subheading opacity-7">
                                                                            Etiam sit amet orci eget
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">Berlin</td>
                                                        <td className="text-center">
                                                            <div className="badge badge-success">Completed</div>
                                                        </td>
                                                        <td className="text-center">
                                                            <button
                                                                type="button"
                                                                id="PopoverCustomT-2"
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center text-muted">#321</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-content-left">
                                                                            <img
                                                                                width="40"
                                                                                className="rounded-circle"
                                                                                src="assets/images/avatars/2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">
                                                                            Elliot Huber
                                                                        </div>
                                                                        <div className="widget-subheading opacity-7">
                                                                            Lorem ipsum dolor sic
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">London</td>
                                                        <td className="text-center">
                                                            <div className="badge badge-danger">In Progress</div>
                                                        </td>
                                                        <td className="text-center">
                                                            <button
                                                                type="button"
                                                                id="PopoverCustomT-3"
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center text-muted">#55</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-content-left">
                                                                            <img
                                                                                width="40"
                                                                                className="rounded-circle"
                                                                                src="assets/images/avatars/1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">
                                                                            Vinnie Wagstaff
                                                                        </div>
                                                                        <div className="widget-subheading opacity-7">
                                                                            UI Designer
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">Amsterdam</td>
                                                        <td className="text-center">
                                                            <div className="badge badge-info">On Hold</div>
                                                        </td>
                                                        <td className="text-center">
                                                            <button
                                                                type="button"
                                                                id="PopoverCustomT-4"
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="d-block text-center card-footer">
                                            <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                                                <i className="pe-7s-trash btn-icon-wrapper"> </i>
                                            </button>
                                            <button className="btn-wide btn btn-success">Save</button>
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
        </div>
    );
};

export default Dashboard;
