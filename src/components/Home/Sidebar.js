import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IoChevronForwardOutline } from "react-icons/io5";

import Post from "../BlogPost/Post";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    const post = props.post;

    return (
        <div className="Sidebar bg-white">
            <div className="Sidebar-body">
                <Tabs defaultActiveKey="hot-blog" id="sidebar-title" className="mb-3" justify>
                    <Tab eventKey="new-blog" title="নতুন ব্লগ">
                        <ul className="mb-2 ps-0">
                            {post && post.map((Item, index) => {
                                const { id, title, slug, description, image, category } = Item;
                                return (
                                    <li key={id}>
                                        <Link className="d-flex  align-items-center post_title" to={`blog-details/${slug}`} state={{ id, title, description, image }}>
                                            <IoChevronForwardOutline />
                                            {title}👉
                                        </Link>
                                        <hr className="m-2 ms-0" />
                                    </li>
                                );
                            })}
                        </ul>
                    </Tab>
                    <Tab eventKey="hot-blog" title="হট ব্লগ">
                        <ul className="mb-2 ps-0">
                            {post && post.map((Item, index) => {
                                const { id, title, slug, description, image, category } = Item;
                                return (
                                    <li key={id}>
                                        <Link className="d-flex  align-items-center post_title" to={`blog-details/${slug}`} state={{ id, title, description, image }}>
                                            <IoChevronForwardOutline />
                                            {title}👉
                                        </Link>
                                        <hr className="m-2 ms-0" />
                                    </li>
                                );
                            })}
                        </ul>
                    </Tab>
                    <Tab eventKey="others" title="অন্যান্য">
                        <ul className="mb-2 ps-0">
                            {post && post.map((Item, index) => {
                                const { id, title, slug, description, image, category } = Item;
                                return (
                                    <li key={id}>
                                        <Link className="d-flex align-items-center post_title" to={`blog-details/${slug}`} state={{ id, title, description, image }}>
                                            <IoChevronForwardOutline />
                                            {title}
                                        </Link>
                                        <hr className="m-2 ms-0" />
                                    </li>
                                );
                            })}
                        </ul>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};
export default Sidebar;
