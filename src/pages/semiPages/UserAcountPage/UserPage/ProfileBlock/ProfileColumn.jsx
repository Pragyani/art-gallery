import React from "react";
import './profilecolumn.css';

const ProfileColumn = () => {
    return (
        <>
            <div className="column-box">
                <div className="column-mt-1">
                    <div className="colun-flexbox">
                        <div className="user-block">
                            <div className="text-file">
                                <div className="user-pImg">
                                    <img src="https://i.pinimg.com/564x/e7/79/9a/e7799a6ef00324ffb2b3351e061a9259.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        {/* <hr className="column-hr"/> */}
                        
                        <div className="user-data">
                            <span className="brnd-name">BRAND NAME : <h1>PragyAni Gallery</h1></span>
                            <hr className="col-hr"/>
                            <span className="user-id">user id: <h3>@anipragss</h3></span>
                            <hr className="col-hr"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 
export default ProfileColumn;