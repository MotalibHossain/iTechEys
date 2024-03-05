import React, { useEffect, useRef, useState } from "react";
// import redux material
import { useSelector } from "react-redux";
// import redux material
import { LogoutAction } from "../Redux/actionCreate/Authaction";
import { useDispatch } from "react-redux";
// react icon
import { BiSearch, BiCaretUp, BiArrowToTop } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
// utils function
import RemoveAuthCredintial from "../Routes/authUtils";

const NavItem = () => {
    const [dropDown, setDropdown] = useState(false);
    const [dropDown1, setDropdown1] = useState(false);
    const { category, setCategory } = useState();
    // Authentication
    const { UserInfo } = useSelector((state) => state);
    const isauthentication = localStorage.getItem("IsAuthenticate");

    const isAdmin = JSON.parse(UserInfo);
    // redux
    const dispatch = useDispatch();
    const Logout = () => {
        RemoveAuthCredintial("IsAuthenticate", "UserInfo");
        dispatch(LogoutAction());
    };

    // Show and hide dropdown menue 
    let dropdownRef = useRef(null)
    const outSideClick = (event) => {
       if(!dropdownRef.current.contains(event.target) ){
            console.log("false")
            setDropdown(false)
            dropdownRef.current = null;
        }
        
    }

    // Handle drop down menu
    const handleMenu=(e)=>{
        if(dropdownRef.current === null){
            dropdownRef.current = e.target
            setDropdown(true)
        }
        else{
            dropdownRef.current = null
            setDropdown(false)
        }
    }

    useEffect(()=>{
        document.addEventListener("click", outSideClick);
        return () => {
            document.removeEventListener('click', outSideClick);
          };
    },[dropdownRef])

    return (
        <>
            <div className="Main-Navbar">
                <div className="LeftNav">
                    <ul className="Navbar">
                        <li className="NavItem">
                            <NavLink className="NavLink nav-link" activeclassname="nav-link--active" to="/">
                                হোম
                            </NavLink>
                        </li>
                        <li className="NavItem">
                            <NavLink className="NavLink nav-link" activeclassname="nav-link--active" to="/theam">
                                {" "}
                                থিম ডাউনলোড
                            </NavLink>
                        </li>
                        <li className="NavItem">
                            <NavLink className="NavLink nav-link" activeclassname="nav-link--active" to="service">
                                সার্ভিস সমূহ
                            </NavLink>
                        </li>
                        <li className="NavItem">
                            <NavLink className="NavLink nav-link" activeclassname="nav-link--active" to="contact">
                                যোগাযোগ
                            </NavLink>
                        </li>
                        <li className="NavItem" onClick={ handleMenu}>
                            <NavLink className="NavLink" href="#">
                                সব ক্যাটেগরি
                                <i className="ms-1 icond" id={dropDown ? "iconDropdown" : ""}>
                                    <BiCaretUp />
                                </i>
                            </NavLink>
                            <ul className="DropDown" id={dropDown ? "ShowDropDown" : ""}>
                                <li className="NavItem">
                                    <NavLink className="NavLink nav-link" activeclassname="nav-link--active" to="/">
                                        {" "}
                                        টেকনলজি
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="NavItem">
                            <NavLink className="NavLink nav-link" activeclassname="nav-link--active" to="/save-post">
                                পোস্ট করুন
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="RightNav">
                    <ul className="Navbar">
                        <li className="NavItem">
                            <BiSearch />
                        </li>
                        <li className="NavItem" onClick={handleMenu}>
                            <NavLink className="NavLink d-flex" href="#">
                                <CgProfile size="20" />
                                <i className="ms-1 icond" id={dropDown ? "iconDropdown" : ""}>
                                    <BiCaretUp />
                                </i>
                            </NavLink>
                            <ul className="DropDown Profile-dropdown" id={dropDown ? "ShowDropDown" : ""}>
                                {isAdmin?.is ? (
                                    <li className="NavItem">
                                        <NavLink className="NavLink nav-link" to="/Dashboard">
                                            Dashboard
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li className="NavItem d-none"></li>
                                )}
                                {isauthentication ? (
                                    <>
                                        <li className="NavItem">
                                            <NavLink className="NavLink nav-link" to="/user-profile">
                                                Profile
                                            </NavLink>
                                        </li>
                                        <li className="NavItem">
                                            <NavLink className="NavLink nav-link" to="" onClick={Logout}>
                                                Logout
                                            </NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="NavItem">
                                            <NavLink className="NavLink nav-link" to="/login">
                                                Login
                                            </NavLink>
                                        </li>
                                        <li className="NavItem">
                                            <NavLink
                                                className="NavLink nav-link"
                                                activeclassname="nav-link--active"
                                                to="/registration"
                                            >
                                                Register
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </li>
                        {/* <li className="NavItem">
                            <BiSearch />
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavItem;
