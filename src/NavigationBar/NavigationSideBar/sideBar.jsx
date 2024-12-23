import React from "react";
import './sidebar.css';
import { Link } from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
import SideTopicBar from "./Sidetopicbar/SideTopicBar";
import Button from '@mui/material/Button';
import { GoHeartFill } from "react-icons/go";

const SideBar = () => {
    const cartItems = useSelector(state => state.cartProducts);

    return (
        <div className="container">
            <div className="content">
                
                    <div className="sidebar">
                        <div className="category-list">
                            <ul>
                                <Link to={'/'}><li><HomeRoundedIcon className="user-prof-i" /> Home</li></Link>
                                <Link to={'/popular-page'}><li><GoHeartFill className="user-prof-i" /> Liked Post</li></Link>
                                {/* <hr className="sidar-line" /> */}
                                <Link to={'/saved-post'}><li><TurnedInRoundedIcon className="user-prof-i" /> Saved Post</li></Link>
                                <Link to={'/your-account'}><li><PersonAddIcon className="user-prof-i" /> Create Account</li></Link>
                                <Link to={'/add-to-cart'}><li><ShoppingCartIcon className="user-prof-i" />Your Cart <Button variant="text" className="crt-btn">{cartItems.length}</Button></li></Link>
                                {/* <hr className="sidar-line" /> */}


                                {/* <SideTopicBar /> */}
                            </ul>
                        </div>
                    </div>
             
            </div>
        </div>
    );
};

export default SideBar;
