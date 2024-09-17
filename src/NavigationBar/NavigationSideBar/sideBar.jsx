import React, { useState } from "react";
import './sidebar.css';
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ClassIcon from '@mui/icons-material/Class';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import SignpostIcon from '@mui/icons-material/Signpost';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SideTopicBar from "./Sidetopicbar/SideTopicBar";

const SideBar = () => {

    const cartItems = useSelector(state => state.cartProducts);

    return (
        <div className="container">
            <div className="content">
                <div className="content-fluid">
                    <div className="sidebar">
                        <>
                            <div className="category-list">
                                <ul>
                                    <Link to={'/'}><li><HomeRoundedIcon className="user-prof-i" /> Home</li> </Link>
                                    <Link to={'/popular-page'}><li><TrendingUpIcon className="user-prof-i" />Popular Post</li></Link>
                                    <hr />
                                    <div className="matrl-list">
                                        <Link to={'./saved-post'}><li><TurnedInRoundedIcon className="user-prof-i" />Saved Post</li></Link>
                                        <Link to={'/your-account'}><li><PersonAddIcon className="user-prof-i" />Create Account</li></Link>
                                        <Link to={'/profilepage'}><li><AccountCircleRoundedIcon className="user-prof-i" />Your Profile</li></Link>
                                        <Link to={'/add-to-cart'}><li><ShoppingCartIcon className="user-prof-i" />Your Cart<button className="crt-btn">{cartItems.length}</button></li></Link>
                                    </div>
                                    <hr />

                                    <SideTopicBar/>
                                </ul>
                            </div>
                        </>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default SideBar;