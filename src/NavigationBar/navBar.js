import React from "react";
import './nav.css';
import { Link } from "react-router-dom";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { UseTheme } from "../theme-context/theme-context";
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../reducers/indx";

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
                        <Link to={'./'}><h1>art.Gallery</h1></Link>
                    </div>

                    <div className="input-field">
                        <div className="searchbox">
                            <input type="text" placeholder="Search your item...." onChange={handleInputChange} value={inputValue} />
                            <SearchSharpIcon className="shrp-i" />
                        </div>
                    </div>

                    <div className="nav-p2">
                        <ul className="nav-ul">
                            <Link to={'/'}><li className="ul-li"> Your Post</li> </Link>
                            <li className="ul-li">Default Mode<input type="checkbox" onChange={toogleTheme} checked={theme === 'light'} /></li>
                            <li className="ul-l">
                                <span className="li-span-img">
                                    <Link to={'/profilepage'}> <img src="https://i.pinimg.com/564x/aa/b2/03/aab2036f11e01e7bc615488478e36568.jpg" /></Link>
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