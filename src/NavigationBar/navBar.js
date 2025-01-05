import React from "react";
import './nav.css';
import { Link } from "react-router-dom";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { UseTheme } from "../theme-context/theme-context";
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../reducers/indx";
import { UserIMAGE } from "../utils";
import Toggle from "../components/toggle";

const NavBAr = () => {
    const { toogleTheme, theme } = UseTheme();

    const inputValue = useSelector((state) => state.inputSlice);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        console.log("Input changed:", e.target.value);
        dispatch(setInput(e.target.value));
    };
    return (
        <>
            <div className="NavigationBar">
                <div className="navBar">
                    <div className="nav-p1">
                        <Link to={'./'}><h1>🖌️ Pragya's Art</h1></Link>
                    </div>

                    <div className="input-field">
                        <div className="searchbox">
                            <input type="text" placeholder="Search your item...." onChange={handleInputChange} value={inputValue} />
                            <SearchSharpIcon className="shrp-i" />
                        </div>
                    </div>

                    <div className="nav-p2">
                        <ul className="nav-ul">
                            <Link to={'/about'}><li className="ul-li">About Us</li></Link>
                            <Toggle checked={theme === 'dark'} onChange={toogleTheme} label={'Dark mode'} />
                            <li className="ul-l">
                                <span className="li-span-img">
                                    <Link to={'/profilepage'}> <img src={UserIMAGE} alt="profile" /></Link>
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>
                <hr className="nav-hr" />
            </div>

        </>
    )
}
export default NavBAr;