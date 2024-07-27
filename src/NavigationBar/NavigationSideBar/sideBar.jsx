import React from "react";
import './sidebar.css';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

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
                                    <li>Top Most Like Poster <ArrowRightRoundedIcon className="forward-icon"/></li>
                                    <li>Explore Your Feed <ArrowRightRoundedIcon className="forward-icon"/></li>
                                    <li>Your Account <ArrowRightRoundedIcon className="forward-icon"/></li>
                                    <li>Home Page </li>
                                </ul>
                            </div>

                            <div className="category-list">
                                <ul>
                                    <li>Unavalibile Products <ArrowRightRoundedIcon className="forward-icon"/></li>
                                    <li>FAQ <ArrowRightRoundedIcon className="forward-icon"/></li>
                                    <li>Sponsored Products<ArrowRightRoundedIcon className="forward-icon"/></li>
                                  
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