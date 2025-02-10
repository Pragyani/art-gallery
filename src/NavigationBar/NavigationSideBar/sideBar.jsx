/**
 * React dependencies
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Internal dependencies
 */
import SideTopicBar from "./Sidetopicbar/SideTopicBar";
import { menuItems } from "./Sidetopicbar/utils";
import "./sidebar.css";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("home");
    const navigate = useNavigate();

    return (
        <div className="sidebar">
            {menuItems(activeItem)?.map(({ id, label, icon: Icon, link }) => (
                <div
                    key={id}
                    onClick={() => {
                        navigate(link);
                        setActiveItem(id);
                    }}
                    className={`menu-item ${activeItem === id ? "active" : ""}`}
                >
                    {Icon}
                    <span>{label}</span>
                </div>
            ))}
            <SideTopicBar />
            <div className="footer">Pragya, Inc. © 2024. All rights reserved.</div>
        </div>
    );
};

export default Sidebar;
