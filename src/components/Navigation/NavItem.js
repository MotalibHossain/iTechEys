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
                                হোম
                            </a>
                        </li>
                        <li className="NavItem">
                            <a className="NavLink" href="#">
                                থিম ডাউনলোড
                            </a>
                        </li>
                        <li className="NavItem">
                            <a className="NavLink" href="#">
                                সার্ভিস সমূহ
                            </a>
                        </li>
                        <li className="NavItem">
                            <a className="NavLink" href="#">
                                যোগাযোগ
                            </a>
                        </li>
                        <li className="NavItem" onClick={() => setDropdown(!dropDown)}>
                            <a className="NavLink" href="#">
                                সব ক্যাটেগরি
                                <i className="ms-1 icond" id={dropDown ? "iconDropdown" : ""}>
                                    <BiCaretUp />
                                </i>
                            </a>
                            <ul className="DropDown" id={dropDown ? "ShowDropDown" : ""}>
                                <li className="NavItem">
                                    <a className="NavLink" href="/home">
                                        টেকনলজি
                                    </a>
                                </li>
                                <li className="NavItem">
                                    <a className="NavLink" href="/about">
                                        ফ্রিল্যান্সিং গপ্প
                                    </a>
                                </li>
                                <li className="NavItem">
                                    <a className="NavLink" href="/about">
                                        Programming
                                    </a>
                                </li>
                                <li className="NavItem">
                                    <a className="NavLink" href="/about">
                                        Tips and Tricks
                                    </a>
                                </li>
                                <li className="NavItem">
                                    <a className="NavLink" href="/about">
                                        Tech News
                                    </a>
                                </li>
                                <li className="NavItem">
                                    <a className="NavLink" href="/about">
                                        Web Development
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="NavItem">
                            <a className="NavLink" href="#">
                                পোস্ট করুন
                                {/* <i>
                                    <BiArrowToTop />
                                </i> */}
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
                            <a className="NavLink text-light" href="">
                                <CgProfile size="20" />
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
