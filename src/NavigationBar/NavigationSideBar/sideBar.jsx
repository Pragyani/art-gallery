import React from "react";
import './sidebar.css';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const SideBar = () => {
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="content-fluid">
                        <div className="sidebar">
                            <h2 className="side-heading">Category</h2>

                            <div className="category-list">
                                <ul>
                                    <li>Latest Post <ArrowRightRoundedIcon className="forward-icon" /></li>
                                    <Link to={'./saved-post'}><li>Saved Post  <ArrowRightRoundedIcon className="forward-icon" /></li></Link>
                                </ul>
                            </div>

                            <div className="category-list">
                                <ul>

                                    <Link to={'/your-account'} ><li>Create Account <ArrowRightRoundedIcon className="forward-icon" /></li></Link>
                                    <Link to={'./profilepage'}><li>Your Profile <AccountCircleRoundedIcon className="user-prof-i" /></li></Link>
                                    <li>FAQ <ArrowRightRoundedIcon className="forward-icon" /></li>

                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SideBar;