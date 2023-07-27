import React from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";

const Image_with_title_sidebar = (props) => {
    const post = props.post;

    return (
        <>
            <div className="Post__gallary_sidebar">
                {post &&
                    post.slice(0, 4).map((item, index) => {
                        const { title, description, slug, author, category, image } = item;
                        return (
                            <div className="row mb-4" key={index}>
                                <div className="col-lg-4 col-md-4">
                                    <img src={image} className="rounded-1 w-100 h-100" alt="" />
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <Link to={`blog-details/${slug}`}>
                                        <h3 className="post-title">{title}</h3>
                                    </Link>
                                    <TextTruncate line={2} element="p" text={description} />
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Image_with_title_sidebar;
