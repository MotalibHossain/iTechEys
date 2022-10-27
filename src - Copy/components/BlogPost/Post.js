import React, { useState, useEffect } from "react";


const Post = () => {
    const [post, setPost]=useState([])

    const fetchBlogs = async () => {
        const response = await fetch("http://127.0.0.1:8000/");
        const data = await response.json();
        return data;
    };
    useEffect(() => {
        fetchBlogs().then((data) => {
            setPost(data);
        });
    }, []);

    console.log("post",post)
    return <>
        {post.map((item,index)=>{
            return(
                <div className="row" key={index}>
                    <p>{item.title}</p>
                    <img className="w-25 h-25" src={`https://www.pythonanywhere.com/user/motalib/files/home/motalib/e-ShopAPI${item.category_img}`} alt="" />
                </div>
            )
        })}
    </>;
};

export default Post;
