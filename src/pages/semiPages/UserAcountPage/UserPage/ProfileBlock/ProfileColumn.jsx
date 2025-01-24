import React from "react";
import './profilecolumn.css';
import { UserIMAGE } from "../../../../../utils";

const ProfileColumn = () => {
    return (
        <>
            <div className="column-box">
                <div className="column-mt-1">
                    <div className="colun-flexbox">

                        <img src={UserIMAGE} alt="image" />

                        <div className="user-data">
                            <span className="brnd-name"><h1>PragyAni Gallery</h1></span>

                            <span className="user-id"><h3>@anipragss</h3></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileColumn;