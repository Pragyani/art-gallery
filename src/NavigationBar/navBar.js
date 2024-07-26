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
                        <h1>Art.Dribbles</h1>
                    </div>
                    <div className="nav-p2">
                        <ul className="nav-ul">
                            <Link to={'/about'}><li className="ul-li"><HdrStrongRoundedIcon className="material-icons" />About us</li></Link>
                            <Link to={'/'}><li className="ul-li"><HomeRoundedIcon className="material-icons" />Home</li></Link>
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