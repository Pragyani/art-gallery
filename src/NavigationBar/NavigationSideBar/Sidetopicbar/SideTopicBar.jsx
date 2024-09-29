import React from "react";
import './sidetopic.css';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { SideBarImage1, SideBarImage2, SideBarImage3, SideBarImage4 } from "../../../utils";

const SideTopicBar = () => {
    return (
        <>
            <div className="category-lst">
                <ul>
                    
                    <span className="nme-cl-cr">Topics <ArrowDropDownRoundedIcon /></span>
                    <li><img src={SideBarImage1} /><span className="li-cl-name">Mandala </span></li>
                    <li><img src={SideBarImage2} /><span className="li-cl-name">Sketeches</span></li>
                    <li><img src={SideBarImage3} /><span className="li-cl-name">Quilling</span></li>
                    <li><img src={SideBarImage4} /><span className="li-cl-name">Painting</span></li>
                </ul>
            </div>

        </>
    )
}
export default SideTopicBar;