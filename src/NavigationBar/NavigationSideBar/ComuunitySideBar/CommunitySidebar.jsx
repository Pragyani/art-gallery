import React from "react";
import './Sbar.css';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AttractionsIcon from '@mui/icons-material/Attractions';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const CommunitySideBar = () => {
    return (
        <>
            <div className="art-bar">
                <div className="art-side-bar">
                    <div className="poppulr-arts">
                        <h3>Popular Pages by<b> Pragya</b></h3>
                    </div>

                    <div className="cl-list">
                        <ul className="art-list">
                            <li><LocalFloristIcon className="page-a-icon" /><span className="nmes-li"> Art.Drribles</span></li>
                            <li><AttractionsIcon className="page-a-icon" /><span className="nmes-li"> Rangoli Art</span></li>
                            <li><SatelliteAltIcon className="page-a-icon" /><span className="nmes-li"> Explore Space</span></li>
                            <li><SportsEsportsIcon className="page-a-icon" /><span className="nmes-li"> Game Zone</span></li>

                        </ul>
                    </div>
                </div>
                <h4>See more ...</h4>

            </div>
        </>
    )
}
export default CommunitySideBar;