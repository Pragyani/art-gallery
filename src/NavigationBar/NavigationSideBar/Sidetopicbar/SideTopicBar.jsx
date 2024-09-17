import React from "react";
import './sidetopic.css';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

const SideTopicBar = () => {
    return (
        <>
            <div className="category-lst">
                <ul>

                    <span className="nme-cl-cr">Topics <ArrowDropDownRoundedIcon /></span>
                    <li><img src="https://i.pinimg.com/564x/a0/ca/a4/a0caa4c1da70e2bd26c0d636cb42278a.jpg" /><span className="li-cl-name">Mandala </span></li>
                    <li><img src="https://i.pinimg.com/564x/56/44/a4/5644a47fc82ee64bb2cdc7166c813eb0.jpg" /><span className="li-cl-name">Sketeches</span></li>
                    <li><img src="https://i.pinimg.com/564x/46/0d/e9/460de961b583cf5830763826c68a947a.jpg" /><span className="li-cl-name">Quilling</span></li>
                    <li><img src="https://i.pinimg.com/564x/23/5b/61/235b616e260c0ddd19a9a59ff9283bf2.jpg" /><span className="li-cl-name">Painting</span></li>
                </ul>
            </div>

        </>
    )
}
export default SideTopicBar;