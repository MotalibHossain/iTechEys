import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import Sonnet from "../../components/Sonnet";

const Sidebar = () => {
    return (
        <div className="Sidebar bg-white">
            <div className="Sidebar-body">
                <Tabs defaultActiveKey="new-blog" id="sidebar-title" className="mb-3" justify>
                    <Tab eventKey="new-blog" title="নতুন ব্লগ">
                        <p>home</p>
                    </Tab>
                    <Tab eventKey="hot-blog" title="হট ব্লগ">
                        <p>dfg</p>
                    </Tab>
                    <Tab eventKey="others" title="অন্যান্য">
                        <p>ooooo</p>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};
export default Sidebar;
