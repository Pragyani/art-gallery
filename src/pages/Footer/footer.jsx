import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <div className="cl-foterr-class">
                    <div className="footer-slics">
                        <Link to={'./'}> <h1>art.Gallery</h1></Link>

                        <div className="web-info">
                            <span className="cl-web-add">
                                126-C Green Avenue , Shalimar Bagh
                                <br /> <span className="br-letter"> Delhi-110092.</span>
                            </span>
                        </div>

                        <div className="contct-no">
                            <div className="footer-wb-no">+11-34528357 , 98645792161</div>
                            <div className="web-info-emails">Email id: <span className="id">@myartgmail.com</span></div>
                        </div>

                        <h3>Thanks for visit our  art.Gallery</h3>
                    </div>
                </div>
            </section>
            <br /><br />
        </>
    )
}

export default Footer;