import React from "react";
import './userpage.css';
import { Button } from "@mui/material";

const ProfilePage = () => {
    return (
        <>
            <div className="profile-prt">
                <div className="profile-content">
                    <section className="user-profile">
                        <div className="text-file">
                            <div className="user-pImg">
                                <img src="https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg" />
                            </div>
                        </div>

                        <div className="profile-details">
                            <div className="txt-container">
                                <h1 className="user-name">
                                    Your Name
                                </h1>

                                <div className="caption-area">
                                    <input placeholder="Write your thoughts......" type="text" />
                                </div>


                                <div className="contentEdit-btn">
                                    <Button className="edit-btn">edit profile</Button>
                                </div>
                            </div>
                        </div>


                    </section>
                </div>
            </div>
        </>
    )
}
export default ProfilePage;