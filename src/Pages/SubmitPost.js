import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
// message framework
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubmitPost = () => {
    const effectRan = useRef(false);
    // Error alert 
    const [show, setShow] = useState(true);
    const [message, setMessage]=useState()

    const [blogCategory, setblogCategory] = useState([]);
    const [image, setImage] = useState(null);

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [publish, setPublish] = useState("");

    const HandelChange = (e) => {
        setTitle(e.target.value);
    };
    const HandelChange2 = (e) => {
        setSlug(e.target.value);
    };
    const HandelChange3 = (e) => {
        setDescription(e.target.value);
    };
    const HandelChange4 = (e) => {
        setCategory(e.target.value);
    };

    const HandelChange5 = (e) => {
        setPublish(e.target.value);
    };
    const onImageChange = (event) => {
        setImage(event.currentTarget.files[0]);
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        var form_data = new FormData();
        form_data.append("title", title);
        form_data.append("slug", slug);
        form_data.append("description", description);
        form_data.append("category", category);
        form_data.append("publish", publish);
        form_data.append("image", image);

        for (var [key, value] of form_data.entries()) {
            console.log(key, ":", value);
        }
        axios
            .post("http://127.0.0.1:8000/blog/", form_data, {
                // headers: {
                //     "content-type": "multipart/form-data",
                // },
            })
            .then((res) => {
                console.log(res);
                // setMessage(res.statusText+" "+" Successfully");
                toast(res.statusText+" "+" Successfully");
                e.target.reset()
            })
            .catch((error) => {
                let errorKey = Object.keys(error.response.data)[0];
                let errorValue = Object.values(error.response.data)[0];
                // setMessage(errorKey+ ":"+ errorValue);
                toast(errorKey+ ":"+ errorValue);
            });
    };

    // category fetch data
    const FetchDataFromApi = async () => {
        const response = await fetch("http://127.0.0.1:8000/blog-category/");
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        if (effectRan.current === false) {
            // this is for not load two time "Strict mood"
            FetchDataFromApi().then((data) => {
                setblogCategory(data);
            });
            return () => {
                effectRan.current = true;
            };
        }
    }, []);

    return (
        <>
            <div className="container">
                <form className="submit-post" onSubmit={HandleSubmit}>
                    <div className="row">
                        <div className="col-lg-4">
                            <h2>Submit your Article</h2>
                        </div>
                        <div className="col-lg-8">
                            {message && show && (
                                <Alert className="mb-0 mt-1 p-1" variant="danger" onClose={() => setShow(!show)} dismissible>
                                    <Alert.Heading className="mb-0 ms-3">{message}</Alert.Heading>
                                </Alert>
                            )}
                        </div>
                    </div>
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
                        <div className="col-md-6">
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
                        </div>
                        <div className="col-md-6">
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
                        </div>

                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <label>Category</label>
                                <input
                                    type="number"
                                    name="category"
                                    className="form-control"
                                    placeholder=""
                                    onChange={HandelChange4}
                                />
                            </div>
                        </div> */}

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Catagory</label>
                                <select className="form-select" name="category" onChange={HandelChange4}>
                                    <option>Catagory</option>
                                    {blogCategory.map((Item, index) => {
                                        return (
                                            <option value={Item.id} key={index}>
                                                {Item.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
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
                        </div>
                    </div>
                    <div className="checkbox py-3">
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
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default SubmitPost;
