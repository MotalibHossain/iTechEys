import React,{useState, useEffect} from "react";
import { BrowserRouter, Route, Routes, Redirect, Navigate } from "react-router-dom";
import "./App.css";
import "./style/Style.css";

// message framework
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components import
import Header from "./Layout/Header";
import Footer from "./Layout/Footer.js";

// pages
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import SubmitPost from "./Pages/SubmitPost";
import BlogDetails from "./Pages/BlogDetails";
import UserProfile from "./Pages/UserProfile";
// user system import
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Error from "./Pages/Error";

function App() {
    const [isauthentication, setIsauthentication]=useState(localStorage.getItem("IsAuthenticate"))
    const loginInfo=localStorage.getItem("IsAuthenticate")
    useEffect(()=>{
        setIsauthentication(loginInfo)
    },[])
    console.log(isauthentication)
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/service" element={<Service />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/save-post" element={<SubmitPost />}></Route>
                    {/* Authenticate system  */}
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/registration" element={<Registration />}></Route>
                    {/* User system  */}
                    <Route path="/user-profile" element={!isauthentication ? <Navigate from="/user-profile" to="/login" />:<UserProfile />}></Route>
                    {/* <Route path="/user-profile" element={isauthentication ? <UserProfile />:<Login />}></Route> */}
                    {/* Subpage route  */}
                    <Route path="/blog-details/:slug" element={<BlogDetails />}></Route>
                    {/* Error page  */}
                    <Route path="*" element={<Error />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;
