import React, { useState, useEffect } from "react";
import TextTruncate from "react-text-truncate";
import Post from "../components/BlogPost/Post";

const Home = () => {
    const [post, setPost] = useState([]);

    const FetchDataFromApi = async (e) => {
        const response = await fetch("http://127.0.0.1:8000/");
        const data = await response.json();
        return data;
    };
    useEffect(() => {
        FetchDataFromApi().then((data) => {
            setPost(data);
        });
    });

    return (
        <div className="container">
            <div className="row mb-30">
                {post.map((Item, index) => {
                    const { id, title, description } = Item;
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                            <div className="post-card pb-0">
                                <div className="post-card-img">
                                    {/* <img src={Item.images} alt="post image" /> */}
                                    <img
                                        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                                        alt="post image"
                                    />
                                </div>
                                <div className="post-card-body">
                                    <div className="user-title d-flex justify-content-between pt-1 pb-1 mt-1">
                                        <div className="user d-flex mb-0 ">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                alt="Profile Image"
                                            />
                                            <div className="d-flex mt-1">Motalib Hossain</div>
                                        </div>
                                        <p className="time mb-0 mt-1">{Item.category}</p>
                                    </div>
                                    <div className="post">
                                        <h5 className="post-title mt-2">
                                            {/* <a href='#' >{Item.title}.slice(0,80)</a> */}
                                            <Link to={Item.slug} state={{ id, title, description }}>
                                            <TextTruncate
                                                line={1}
                                                element="span"
                                                truncateText="........"
                                                text={Item.title}
                                                // textTruncateChild={<a href="#">Read on</a>}
                                            />
                                            </Link>
                                        </h5>
                                        {/* <h5 className='post-title mt-2'>ইন্টার্নশিপ বা ট্রেনিং বদলে দিবে বেকারদের জীবন</h5> */}
                                        <p className="post-body">
                                            {/* {truncateString(Item.description, 60)}...<a href='/'>Read on</a> */}
                                            <TextTruncate
                                                line={2}
                                                element="span"
                                                truncateText="…"
                                                text={Item.description}
                                                textTruncateChild={<a href="#">Read on</a>}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
