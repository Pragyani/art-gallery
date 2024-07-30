import React from "react";
import './sidebar.css';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { Link } from "react-router-dom";

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
                                    <li>Latest Posters <ArrowRightRoundedIcon className="forward-icon"/></li>
                                    <li>Explore Your Feed <ArrowRightRoundedIcon className="forward-icon"/></li>
                                    <li>Home Page </li>
                                    <li>Unavalibile Products <ArrowRightRoundedIcon className="forward-icon"/></li>
                                </ul>
                            </div>

                            <div className="category-list">
                                <ul>
                
                                    <li>FAQ <ArrowRightRoundedIcon className="forward-icon"/></li>
                                    <Link to={'/your-account'} ><li>Create Account <ArrowRightRoundedIcon className="forward-icon"/></li></Link>
                                    <li>User Profile<ArrowRightRoundedIcon className="forward-icon"/></li>
                                  
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