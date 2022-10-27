import React, { useState, useEffect } from "react";

const BlogPost = () => {
    const [blog, setBlog] = useState();
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");

    // const [inputData, setInputData] = useState({
    //     name: "",
    //     category_img: "",
    // });

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/");
            const data = await response.json();
            return data;
        };
        fetchBlogs().then((data) => {
            setBlog(data);
        });
    }, []);

    // Create Catetory Handler
    const handleChange = (e) => {
        // setInputData({ ...inputData, [e.target.name]: e.target.value });
        setName(e.target.value);
    };

    const onImageChange = (event) => {
        setImage(event.currentTarget.files[0]);
    };

    // Create Catetory Handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form_data = new FormData();
        form_data.append("name", name);
        form_data.append("category_img", image, image.name);
        const postData = async () => {
            try {
                await fetch("http://127.0.0.1:8000/api/", {
                    method: "post",
                    headers: {
                        // "Content-Type": "multipart/form-data",
                    },
                    body: form_data,
                });
            } catch (err) {
                console.log(err);
            }
        };
        postData();

        // const data = await fetch("http://127.0.0.1:8000/api/", {
        //     method: "post",
        //     // headers: { "Content-Type": "multipart/form-data" },
        //     body: form_data,
        // });
        // const uploadedImage = await data.json();
        // console.log(uploadedImage);

        // setInputData({
        //     name: "",
        //     category_img: "",
        // });
    };

    if (blog === undefined) {
        return <div>LOADING...</div>;
    }
    return (
        <div>
            {JSON.stringify(blog)}
            <h1>Insert Data</h1>
            <form>
                <input type="text" name="name" placeholder="Category Name" value={name} onChange={handleChange} />
                <br />
                <input type="file" placeholder="Category Image" onChange={onImageChange} accept="image/*" />
                {/* <input name="banner" type="file" accept="image/*" onChange={onImageChange} /> */}
                <br />
                <input type="submit" value="Create Category" onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default BlogPost;
