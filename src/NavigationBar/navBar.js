import React from "react";
import './nav.css';
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
                            <li>Home</li>
                            <li>Blog</li>
                            <li>About</li>
                            <li>Contact </li>
                        </ul>

                    </div>

                </div>
            </div>
            <hr />
        </>
    )
}
export default NavBAr;