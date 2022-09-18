import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./style/Style.css"

// Components import
import Header from "./Layout/Header";

// pages
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import SubmitPost from "./Pages/SubmitPost";
import Error from "./Pages/Error";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/home" element={<Home />} ></Route>
                    <Route path="/service" element={<Service />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/save-post" element={<SubmitPost />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
