import axios from "axios";
import React, { useState, useEffect } from "react";

const SubmitPost = () => {
    // const [image, setImage] = useState(null);

    const [title, setTitle] = useState("");
    // const [slug, setSlug] = useState("");
    // const [description, setDescription] = useState("");
    // const [categoryy, setCategoryy] = useState("");
    // const [publish, setPublish] = useState("");

    const HandelChange = (e) => {
        setTitle(e.target.value);
    };
    // const HandelChange2 = (e) => {
    //     setSlug(e.target.value);
    // };
    // const HandelChange3 = (e) => {
    //     setDescription(e.target.value);
    // };
    // const HandelChange4 = (e) => {
    //     setCategoryy(e.target.value);
    // };
    // const HandelChange5 = (e) => {
    //     setPublish(e.target.value);
    // };
    // const onImageChange = (event) => {
    //     setImage(event.currentTarget.files[0]);
    // };
    const HandleSubmit =(e)=> {
        e.preventDefault();
        var form_data = new FormData();
        form_data.append("title", title);
        // form_data.append("slug", slug);
        // form_data.append("description", description);
        // form_data.append("categoryy", categoryy);
        // form_data.append("publish", publish);
        // form_data.append("blog_image", image);

        for(var[key, value] of form_data.entries()){
            console.log(key, ":" ,value)
        }
        axios
            .post("http://127.0.0.1:8000/", form_data, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log("Post request error",err));
    };

    return (
        <>
            <div className="container">
                <form className="submit-post" onSubmit={HandleSubmit}>
                    <h2>Submit your Article</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label> Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder=""
                                    onChange={HandelChange}
                                />
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <label> Slug</label>
                                <input
                                    type="text"
                                    name="slug"
                                    className="form-control"
                                    placeholder=""
                                    onChange={HandelChange2}
                                />
                            </div>
                        </div> */}
                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <label> Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    className="form-control"
                                    placeholder=""
                                    onChange={onImageChange}
                                />
                            </div>
                        </div> */}

                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <label>Category</label>
                                <input
                                    type="number"
                                    name="categoryy"
                                    className="form-control"
                                    placeholder=""
                                    onChange={HandelChange4}
                                />
                            </div>
                        </div> */}

                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <label>Catagory</label>
                                <select className="form-select" name="category" onChange={HandelChange}>
                                    <option>Catagory</option>
                                    {category.map((Item, index) => {
                                        return (
                                            <option value={Item.id} key={index}>
                                                {Item.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    id="description"
                                    placeholder="Description"
                                    onChange={HandelChange3}
                                />
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="checkbox py-3">
                        <label>
                            <input
                                type="checkbox"
                                name="publish"
                                value="True"
                                id="newsletter"
                                onChange={HandelChange5}
                            />{" "}
                            Published.
                        </label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default SubmitPost;
