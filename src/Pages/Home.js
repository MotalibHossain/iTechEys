import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
// icon
import { MdOutlineDoubleArrow, MdOutlineSearch } from 'react-icons/md'
import { IoChevronForwardOutline } from 'react-icons/io5'

// Component import
import Sidebar from '../components/Home/Sidebar.js'
import FetchDataFromApi from '../Utils/DataFetch'

const Home = () => {
	const [post, setPost] = useState([])
	const [latestPost, setLatestPost] = useState([])

	const url = 'http://127.0.0.1:8000/'
	useEffect(() => {
		FetchDataFromApi(url).then(data => {
			setPost(data)
			setLatestPost({
				id: data[0].id,
				title: data[0].title,
				slug: data[0].slug,
				description: data[0].description,
				image: data[0].image,
			})
		})
	}, [])
	const { id, title, slug, description, image } = latestPost
	// console.log("post", post);

	return (
		<div className='Main-Container container-fluid '>
			<section className='Section-1 mt-3'>
				<div className='row'>
					<div className='col-lg-8 col-md-12 col-sm-12'>
						<div className='home-slider'>
							<Carousel>
								{post &&
									post.map((Item, index) => {
										const { id, title, slug, description, image, category } = Item
										return (
											<Carousel.Item>
												<div className='banner-img-overla'>
													<img className='d-block w-100' src={image} alt='First slide' />
												</div>
												<Carousel.Caption>
													<h3>{title}</h3>
													<p>{description}</p>
												</Carousel.Caption>
											</Carousel.Item>
										)
									})}
							</Carousel>
						</div>
						{/* <div className="main-banner">
                            <div className="banner-img">
                                <div className="banner-img-overlay">
                                    <img src={latestPost.image} alt="image" />
                                </div>
                            </div>
                            <div className="post-content text-white">
                                <Link
                                    className="post-title post_title"
                                    to={`blog-details/${slug}`}
                                    state={{ title, description, image }}
                                >
                                    {latestPost.title}
                                </Link>
                                <span className="latestPostDec">
                                    {latestPost.description}
                                </span>
                            </div>
                        </div> */}
					</div>
					<div className='col-lg-4 col-md-4 col-sm-4 pl-0 side-title'>
						<ul className='ps-0'>
							{post.map((Item, index) => {
								const { id, title, slug, description, image, category } = Item
								return (
									<li key={id}>
										<Link
											className='d-flex align-items-center'
											to={`blog-details/${slug}`}
											state={{ id, title, description, image }}
										>
											<IoChevronForwardOutline />
											<p className='text-justify post_title m-0'>{title}</p>
										</Link>
										<hr className='m-2 ms-0' />
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</section>

			<section className='Section-2'>
				<div className='row'>
					<div className='col-lg-8 col-md-8'>
						<div className='Sec-2-title d-flex align-items-center p-2'>
							<MdOutlineDoubleArrow />
							{/* <marquee behavior="scroll" direction="left"> */}
							<h6 className='m-0'>
								<Link to={`blog-details/${slug}`}>{latestPost.title}</Link>
							</h6>
							{/* </marquee> */}
							<a href={`blog-details/${slug}`} class='button button-pulse ms-auto'>
								বিস্তারিত
							</a>
						</div>
					</div>
					<div className='col-lg-4 col-md-4'>
						<div class='search mt-sm-2 mt-md-0 mt-lg-0'>
							<MdOutlineSearch className='fa fa-search' />
							<input type='text' className='form-control' placeholder='সার্চ করুন iTecheys জুড়ে' />
							<button class='btn btn-primary p-0'>Search</button>
						</div>
					</div>
				</div>
			</section>

			<section className='Section-3'>
				<div className='row mb-30'>
					<div className='col-lg-8 col-md-8 Card-container'>
						<div className='Card-body'>
							<div className='row'>
								{post.map((Item, index) => (
									<PostCard item={Item} key={index} />
								))}
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-4 blog-aside'>
						<Sidebar post={post} />
					</div>
				</div>
			</section>
		</div>
	)
}

const PostCard = ({ item }) => {
	const { id, title, slug, description, image, author, category } = item
	return (
		<div className='col-lg-6 col-md-6 col-sm-6'>
			<Link to={`blog-details/${slug}`}>
				<div className='post-card'>
					<div className='post-card-img'>
						<img className='post-banner' src={image} alt='post image' />
						<div className='post-card-meta'>
							<div className='post-card-author'>
								<div className='post-author-image'>
									<img src='https://bootdey.com/img/Content/avatar/avatar7.png' alt='' />
								</div>
								<div className='post-author-username'>{author.username}</div>
							</div>
							<p className='post-tag'>{category.name}</p>
						</div>
					</div>
					<div className='post-card-body'>
						<h4 className='post-title'>{title}</h4>
						<p className='post-body'>{description}</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Home
