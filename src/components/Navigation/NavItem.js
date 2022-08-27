import React, { useState } from "react";

// react icon
import { BiSearch, BiCaretUp, BiArrowToTop } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = () => {
    const [dropDown, setDropdown] = useState(false);

    return (
        <>
            <div className="Main-Navbar">
                <div className="LeftNav">
                    <ul className="Navbar">
                        <li className="NavItem">
                            <a className="NavLink" href="#">
                                Home
                            </a>
                        </li>
                        <li className="NavItem">
                            <a className="NavLink" href="#">
                                About
                            </a>
                        </li>
                        <li className="NavItem">
                            <a className="NavLink" href="#">
                                Service
                            </a>
                        </li>
                        <li className="NavItem">
                            <a className="NavLink" href="#">
                                Contact
                            </a>
                        </li>
                        <li className="NavItem" onClick={() => setDropdown(!dropDown)}>
                            <a className="NavLink" href="#">
                                Blog
                                <i className="ms-1 icond" id={dropDown ? "iconDropdown" : ""}>
                                    <BiCaretUp />
                                </i>
                            </a>
                            <ul className="DropDown" id={dropDown ? "ShowDropDown" : ""}>
                                <li className="NavItem">
                                    <a className="NavLink" href="/home">
                                        Home
                                    </a>
                                </li>
                                <li className="NavItem">
                                    <a className="NavLink" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="NavItem">
                                    <a className="NavLink" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="NavItem">
                                    <a className="NavLink" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="NavItem">
                                    <a className="NavLink" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="NavItem">
                                    <a className="NavLink" href="/about">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="NavItem">
                            <a className="NavLink" href="#">
                                Portfollio{" "}
                                <i>
                                    <BiArrowToTop />
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="RightNav">
                    <ul className="Navbar">
                        <li className="NavItem">
                            <BiSearch />
                        </li>
                        <li className="NavItem">
                            <a className="NavLink" href="">
                                <CgProfile size="25" />
                            </a>
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
