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
                            126-C Green Avenue , Shalimar Bagh <br/>
                            Delhi-110092.
                        </span>
                       </div>
                    </div>
                </div>
            </section>
<br /><br />
        </>
    )
}

export default Footer;