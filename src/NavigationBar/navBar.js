import React from "react";
import './nav.css';
import { Link } from "react-router-dom";
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';

const NavBAr = () => {
    return (
        <>
            <div className="collective-nav">
                <div className="navigate-flex">
                    <div className="nav-p1">
                        <h3>PragyAnirudh</h3>
                        <input type="text" placeholder="Search of New Design" /> <YoutubeSearchedForIcon className="searchIcon" />

                    </div>

                    <div className="nav-p2">
                        <ul className="ul-list">
                         <Link to={'/'}><li>Home</li></Link>
                         <Link to={'/about'}><li>About</li></Link>
                          <li>Support</li>
                          <li>FAQ</li>
                          <li>Account</li>
                        </ul>

                    </div>

                </div>
            </div>
            <hr />
        </>
    )
}
export default NavBAr;