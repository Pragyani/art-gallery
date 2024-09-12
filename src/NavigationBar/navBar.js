import React from "react";
import './nav.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HdrStrongRoundedIcon from '@mui/icons-material/HdrStrongRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import { Link } from "react-router-dom";

const NavBAr = () => {
    return (
        <>
            <div className="NavigationBar">
                <div className="navBar">
                    <div className="nav-p1">
                        <h1>art.Gallery</h1>
                    </div>
                    <div className="nav-p2">
                        <ul className="nav-ul">
                            <Link to={'/'}><li className="ul-li"><HomeRoundedIcon className="material-icons" />Home</li></Link>
                            <Link to={'/about'}><li className="ul-li"><HdrStrongRoundedIcon className="material-icons" />About us</li></Link>
                            <li className="ul-li"><CallRoundedIcon className="material-icons" />Contact Us</li>
                            <li className="ul-li"><SettingsSuggestRoundedIcon className="material-icons" />Setting</li>

                        </ul>
                    </div>
                </div>
            </div>

            <hr />
        </>
    )
}
export default NavBAr;