import React from "react";
import './accountsPage.css';
import Button from '@mui/material/Button';
import SideBar from "../../../NavigationBar/NavigationSideBar/sideBar";

const AccountPage = () => {
    return (
        <>
            <div className="acount-cl">
                <SideBar /><hr className="accountpage-hr" />
                <div className="cl-container">
                    <div className="boxes-ro">
                        <div className="colum">
                            <div className="col-lg">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="" />
                            </div>

                            <div className="content-field">
                                <div className="input-contaainer">
                                    <div className="text-flied">
                                        <h3>Welcome to the Art.Dribles Team</h3>
                                        <h4>Please login to your account</h4>
                                    </div>

                                    <section className="input-section">
                                        <form className="form-field">
                                            <input placeholder="user name or phone number" type="text" className="user-input-col" />
                                            <br />
                                            <input placeholder=" enter your  password" type="password" className="user-input-col" />
                                        </form>
                                    </section>

                                    <div className="btn-section">
                                        <Button className="button">Login</Button>
                                    </div>

                                    <div className="reset-password">
                                        <h5>Forgot password ?</h5>
                                    </div>

                                    <div className="sign-up-box">
                                        <div className="col-flexbox">
                                            <h4>Don't have an account ?</h4>

                                            <div className="bttn-bar">
                                                <span className="btn">
                                                    <Button className="buton">Create New Account</Button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AccountPage;