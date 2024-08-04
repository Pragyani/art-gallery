import React, { useState } from "react";
import './userpage.css';
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterIcon from '@mui/icons-material/Filter';

const ProfilePage = () => {
    const [showInput, setShowInput] = useState(false);


    const handleItemClick = () => {
        setShowInput(!showInput);
    };


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
                                    <Button className="edit-btn">edit profile </Button>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="mega-userProfile">
                            <div className="cl-rowUser">

                                <ul className="cl-ul">
                                    <li onClick={handleItemClick}> ADD <KeyboardArrowDownIcon /></li>
                                    <li>Edit</li>
                                    <li>Delete</li>
                                </ul>
                                {showInput && (
                                    <div className="input-container">

                                        <div className="input-box">
                                            <h3>create new post</h3><hr className="h3-hr" />
                                            <div className="flex-item">
                                                <div className="img-area">
                                                    <div className="image-field">
                                                        <FilterIcon className="select-item" />

                                                        <form action="/action_page.php">
                                                            <label for="myfile">Drag phots and videos here</label>
                                                            <input type="file" />
                                                        </form>

                                                    </div>
                                                </div>
                                                <hr className="horizontl-line" />

                                                <div className="local-input">
                                                    <div className="cl-local">
                                                        <div className="user-pic">
                                                            <img src="https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg" alt="" />

                                                            <h4> your name</h4>
                                                        </div>

                                                        <div className="caption-block">
                                                            <input className="centered-input" type="text" placeholder="write a caption.." />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="txt-laign">

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