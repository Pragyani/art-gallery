import React from "react";
import './nav.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HdrStrongRoundedIcon from '@mui/icons-material/HdrStrongRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import { Link } from "react-router-dom";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SideBar from "./NavigationSideBar/sideBar";
import { UseTheme } from "../theme-context/theme-context";

const NavBAr = () => {
    const {toogleTheme , theme} = UseTheme();

    return (
        <>
            <div className="NavigationBar">
                <div className="navBar">
                    <div className="nav-p1">
                        <h1>art.Gallery</h1>
                    </div>

                    <div className="input-field">
                        <div className="searchbox">
                            <input type="text" placeholder="Search your item...." />
                            <SearchSharpIcon className="shrp-i" />
                        </div>
                    </div>

                    <div className="nav-p2">
                        <ul className="nav-ul">
                            <Link to={'/'}><li className="ul-li"><HomeRoundedIcon className="material-icons" />Home</li></Link>
                            <Link to={'/about'}><li className="ul-li"><HdrStrongRoundedIcon className="material-icons" />About us</li></Link>
                            <li className="ul-li">Theme Mode<input type="checkbox" onChange={toogleTheme} checked={theme === 'light'}/><BasicSwitches/></li>

                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            <SideBar />
        </>
    )
}
export default NavBAr;