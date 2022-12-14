import React, { useState, useEffect, useRef } from "react";
import TextTruncate from "react-text-truncate";
import { useParams, useLocation, json } from "react-router-dom";

// File import
import "../style/blogdetails.css";

const BlogDetails = () => {
    const effectRan = useRef(false);
    const { slug } = useParams();
    const [singlePost, setSinglepost] = useState([]);
    const [BlogPost, setBlogPost] = useState([]);

    const FetchDataFromApi = async () => {
        const response = await fetch("http://127.0.0.1:8000/");
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        if (effectRan.current === false) {
            // this is for not load two time "Strict mood"
            FetchDataFromApi().then((data) => {
                setBlogPost(data);
            });
            return () => {
                effectRan.current = true;
            };
        }
    }, []);

    // Filter data from apu through url slug
    useEffect(() => {
        if (BlogPost.length > 0) {
            const filterdata = BlogPost.filter((blogData) => {
                return blogData.slug == slug;
            });
            setSinglepost(filterdata[0]);
        }
    }, [BlogPost]);

    const { title, description, image, category } = singlePost;
    // console.log("singlePost", singlePost);

    return (
        <>
            <div className="blog-single gray-bg">
                <div className="Main-Container container-fluid">
                    <div className="row align-items-start">
                        <div className="col-lg-9 m-15px-tb">
                            <article className="article">
                                <div className="article-img">
                                    <img src={image} alt="post image" />
                                </div>
                                <div className="article-title">
                                    <h6>
                                        <a href="#">{category && category.name}</a>
                                    </h6>
                                    <h2>{title} </h2>
                                    <div className="media d-flex">
                                        <div className="avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                title=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="auth-info">
                                            <a href="#">
                                                {/* {{ user_profile_info }} {{ blog.author }} */}
                                                Motalib Hossain
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-content">
                                    <p>{description}</p>
                                </div>
                                <div className="nav tag-cloud">
                                    <a href="#">tag</a>
                                    <a href="#">Travel</a>
                                    <a href="#">Web Design</a>
                                    <a href="#">Marketing</a>
                                    <a href="#">Research</a>
                                    <a href="#">Managment</a>
                                </div>
                                <hr />
                                {/* <div className="row">
                    <div className="col-lg-6 like">
                      {% if not liked %}
                      <a href="{% url 'Articles:liked' pk=blog.pk%}">
                        <i className="fas fa-thumbs-up"></i>
                      </a>
                      {% else %}
                      <a href="{% url 'Articles:unlike' pk=blog.pk%}">
                        <i className="fas fa-thumbs-down"></i>
                      </a>
                      {% endif %}
                    </div>
                    <div className="col-lg-6">
                      <div className="float-end">
                        <i className="fas fa-thumbs-up"></i>{{ blog.blog_like.count }} &nbsp;
                        <i className="fas fa-comment"></i>
                        {{ blog.blog_comment.count }}
                      </div>

                    </div>
                  </div> */}
                            </article>
                            <div className="row me-5 ms-5">
                                {/* {% for i in comments %}
                <div className="article-comment mb-3">
                  <div className="col-lg-6">
                    {{ i.user }}
                  </div>
                  <div className="col-lg-6">
                    {{ i.comment }}
                  </div>
                </div>
                {% endfor %} */}
                            </div>
                            <div className="contact-form article-comment">
                                <h4>Leave a Reply</h4>
                                {/* <form action="{% url 'Articles:aticle_details' slug=blog.slug%}" id="contact-form" method="POST">
                  {% csrf_token %}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="message" id="message" placeholder="Your message *" rows="4" className="form-control"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <button className="px-btn theme"><span>Submit</span> <i className="arrow"></i></button>
                      </div>
                    </div>
                  </div>
                </form> */}
                            </div>
                        </div>
                        <div className="col-lg-3 m-15px-tb blog-aside">
                            {/* <!-- Author --> */}
                            <div className="widget widget-author">
                                <div className="widget-title">
                                    <h3>Author</h3>
                                </div>
                                <div className="widget-body">
                                    <div className="media align-items-center d-flex flex-row">
                                        <div className="avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                                title=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="media-body">
                                            {/* <h6>Hello, I'm<br>{{ blog.author }}</h6> */}
                                        </div>
                                    </div>
                                    {/* <p>{{ current_user.bio }} ki</p> */}
                                </div>
                            </div>
                            {/* <!-- End Author -->
              <!-- Trending Post --> */}
                            <div className="widget widget-post">
                                <div className="widget-title">
                                    <h3>Trending Now</h3>
                                </div>
                                <div className="widget-body"></div>
                            </div>
                            {/* <!-- End Trending Post -->
              <!-- Latest Post --> */}
                            <div className="widget widget-latest-post">
                                <div className="widget-title">
                                    <h3>Latest Post</h3>
                                </div>
                                <div className="widget-body">
                                    <div className="latest-post-aside media">
                                        <div className="lpa-left media-body">
                                            <div className="lpa-title">
                                                <h5>
                                                    <a href="#">Prevent 75% of visitors from google analytics</a>
                                                </h5>
                                            </div>
                                            <div className="lpa-meta">
                                                <a className="name" href="#">
                                                    Rachel Roth
                                                </a>
                                                <a className="date" href="#">
                                                    26 FEB 2020
                                                </a>
                                            </div>
                                        </div>
                                        <div className="lpa-right">
                                            <a href="#">
                                                <img
                                                    src="https://via.placeholder.com/400x200/FFB6C1/000000"
                                                    title=""
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="latest-post-aside media">
                                        <div className="lpa-left media-body">
                                            <div className="lpa-title">
                                                <h5>
                                                    <a href="#">Prevent 75% of visitors from google analytics</a>
                                                </h5>
                                            </div>
                                            <div className="lpa-meta">
                                                <a className="name" href="#">
                                                    Rachel Roth
                                                </a>
                                                <a className="date" href="#">
                                                    26 FEB 2020
                                                </a>
                                            </div>
                                        </div>
                                        <div className="lpa-right">
                                            <a href="#">
                                                <img
                                                    src="https://via.placeholder.com/400x200/FFB6C1/000000"
                                                    title=""
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="latest-post-aside media">
                                        <div className="lpa-left media-body">
                                            <div className="lpa-title">
                                                <h5>
                                                    <a href="#">Prevent 75% of visitors from google analytics</a>
                                                </h5>
                                            </div>
                                            <div className="lpa-meta">
                                                <a className="name" href="#">
                                                    Rachel Roth
                                                </a>
                                                <a className="date" href="#">
                                                    26 FEB 2020
                                                </a>
                                            </div>
                                        </div>
                                        <div className="lpa-right">
                                            <a href="#">
                                                <img
                                                    src="https://via.placeholder.com/400x200/FFB6C1/000000"
                                                    title=""
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Latest Post -->
              <!-- widget Tags --> */}
                            <div className="widget widget-tags">
                                <div className="widget-title">
                                    <h3>Latest Tags</h3>
                                </div>
                                <div className="widget-body">
                                    <div className="nav tag-cloud">
                                        <a href="#">Design</a>
                                        <a href="#">Development</a>
                                        <a href="#">Travel</a>
                                        <a href="#">Web Design</a>
                                        <a href="#">Marketing</a>
                                        <a href="#">Research</a>
                                        <a href="#">Managment</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End widget Tags --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;
