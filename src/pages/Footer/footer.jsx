import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <div className="cl-foterr-class">
                    <div className="footer-slics">
                        <h1> <Link to={'./'}>art.Gallery</Link></h1>

                        <div className="web-info">
                            <span className="cl-web-add">
                                Address : <span className="id">126-C Green Avenue , Shalimar Bagh
                                    <br /> <span className="br-letter"> Delhi-110092.</span></span>
                            </span>
                        </div>

                        <div className="contct-no">
                            <div className="footer-wb-no">Contact us : <span className="id">+11-34528357 , 98645792161</span></div>
                            <div className="web-info-emails">Email id: <span className="id">@myartgmail.com</span></div>
                        </div>

                        <h3>Thanks for visit our  art.Gallery</h3>
                    </div>
                </div>
            </section>
            {/* <br /><br /> */}
        </>
    )
}

export default Footer;