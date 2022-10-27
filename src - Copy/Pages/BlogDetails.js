import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const BlogDetails = () => {
    const {slug}=useParams()
    const SinglePost= useLocation()



  return (
    <div>
        <h1>{SinglePost.state.title}</h1>
        <p>{SinglePost.state.description}</p>
    </div>
  )
}

export default BlogDetails