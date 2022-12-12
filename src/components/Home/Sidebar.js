import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import Sonnet from "../../components/Sonnet";

import TextTruncate from "react-text-truncate";
import Post from "../BlogPost/Post";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    const  post = props.post;

    return (
        <div className="Sidebar bg-white">
            <div className="Sidebar-body">
                <Tabs defaultActiveKey="hot-blog" id="sidebar-title" className="mb-3" justify>
                    <Tab eventKey="new-blog" title="নতুন ব্লগ">
                        <ul className="ps-0">
                            {post && post.map((Item, index) => {
                                const { id, title, slug, description, image, category } = Item;
                                return (
                                    <li key={id}>
                                        <Link to={`blog-details/${slug}`} state={{ id, title, description, image }}>
                                            <TextTruncate line={1} truncateText="...." text={title} />
                                        </Link>
                                        <hr className="m-2 ms-0" />
                                    </li>
                                );
                            })}
                        </ul>
                    </Tab>
                    <Tab eventKey="hot-blog" title="হট ব্লগ">
                        <ul className="ps-0">
                            {post && post.map((Item, index) => {
                                const { id, title, slug, description, image, category } = Item;
                                return (
                                    <li key={id}>
                                        <Link to={`blog-details/${slug}`} state={{ id, title, description, image }}>
                                            <TextTruncate line={1} truncateText="...." text={title} />
                                        </Link>
                                        <hr className="m-2 ms-0" />
                                    </li>
                                );
                            })}
                        </ul>
                    </Tab>
                    <Tab eventKey="others" title="অন্যান্য">
                        <ul className="ps-0">
                            {post && post.map((Item, index) => {
                                const { id, title, slug, description, image, category } = Item;
                                return (
                                    <li key={id}>
                                        <Link to={`blog-details/${slug}`} state={{ id, title, description, image }}>
                                            <TextTruncate line={1} truncateText="...." text={title} />
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
