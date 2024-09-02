import React from "react";
import './sidebar.css';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ClassIcon from '@mui/icons-material/Class';
import QuizIcon from '@mui/icons-material/Quiz';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import SignpostIcon from '@mui/icons-material/Signpost';

const SideBar = () => {

    const cartItems = useSelector(state => state.cartedProducts);
    console.log('numberodCart', cartItems);

    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="content-fluid">
                        <div className="sidebar">
                            <h2 className="side-heading">Your Category</h2>

                            <div className="category-list">
                                <ul>
                                    <Link to={'/'}> <li><SignpostIcon className="user-prof-i" />Our Post <ArrowRightRoundedIcon className="forward-icon" /></li></Link>
                                    <Link to={'./saved-post'}><li> <ClassIcon className="user-prof-i" />Saved Post  <ArrowRightRoundedIcon className="forward-icon" /></li></Link>
                                </ul>
                            </div>

                            <div className="category-list">
                                <ul>
                                    <li><QuizIcon className="user-prof-i" /> FAQ <ArrowRightRoundedIcon className="forward-icon" /></li>
                                    <Link to={'/your-account'} ><li><PersonAddIcon className="user-prof-i" />Create Account <ArrowRightRoundedIcon className="forward-icon" /></li></Link>
                                    <Link to={'/profilepage'}><li><AccountCircleRoundedIcon className="user-prof-i" />Your Profile</li></Link>
                                    <Link to={'/add-to-cart'}><li><ShoppingCartIcon className="user-prof-i" />Your Cart <button className="crt-btn">{cartItems.length}</button></li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contnt-pt-2">
                    <div className="pt-2-block">
                        <div className="pt-II-img">
                            <img src="https://i.pinimg.com/564x/18/cb/fc/18cbfc9c07ae20c17f2e8b54aa1a57a9.jpg" alt="mandlaimage" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar;
