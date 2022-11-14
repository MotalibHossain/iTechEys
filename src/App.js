import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./style/Style.css"

// message framework
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components import
import Header from "./Layout/Header";
import Footer from "./Layout/Footer.js"

// pages
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import SubmitPost from "./Pages/SubmitPost";
import BlogDetails from "./Pages/BlogDetails";
// user system import 
import Login from "./Pages/Login"
import Registration from "./Pages/Registration"
import Error from "./Pages/Error";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/service" element={<Service />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/save-post" element={<SubmitPost />}></Route>
                    {/* User system  */}
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/registration" element={<Registration />}></Route>
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
