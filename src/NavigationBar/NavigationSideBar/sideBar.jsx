import React, { useState } from "react";
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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SideBar = () => {
    const cartItems = useSelector(state => state.cartProducts);
    console.log('numberodCart', cartItems);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownVisible(prevState => !prevState);
    };

    return (
        <div className="container">
            <div className="content">
                <div className="content-fluid">
                    <div className="sidebar">
                        <h1 className="side-heading" onClick={handleToggleDropdown}>
                            Categories

                            {dropdownVisible ? (
                                <ArrowBackIosIcon className="dwn-i" />
                            ) : (
                                <ArrowForwardIosIcon className="dwn-i" />
                            )}
                        </h1>

                        {dropdownVisible && (
                            <>
                                <div className="category-list">
                                    <ul>
                                        <Link to={'/'}>
                                            <li>
                                                <SignpostIcon className="user-prof-i" />
                                                Your Post
                                                <ArrowRightRoundedIcon className="forward-icon" />
                                            </li>
                                        </Link>
                                        <Link to={'./saved-post'}>
                                            <li>
                                                <ClassIcon className="user-prof-i" />
                                                Saved Post
                                                <ArrowRightRoundedIcon className="forward-icon" />
                                            </li>
                                        </Link>

                                        <li>
                                            <QuizIcon className="user-prof-i" />
                                            FAQ
                                            <ArrowRightRoundedIcon className="forward-icon" />
                                        </li>
                                        <Link to={'/your-account'}>
                                            <li>
                                                <PersonAddIcon className="user-prof-i" />
                                                Create Account
                                                <ArrowRightRoundedIcon className="forward-icon" />
                                            </li>
                                        </Link>
                                        <Link to={'/profilepage'}>
                                            <li>
                                                <AccountCircleRoundedIcon className="user-prof-i" />
                                                Your Profile
                                            </li>
                                        </Link>
                                        <Link to={'/add-to-cart'}>
                                            <li>
                                                <ShoppingCartIcon className="user-prof-i" />
                                                Your Cart
                                                <button className="crt-btn">{cartItems.length}</button>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideBar;