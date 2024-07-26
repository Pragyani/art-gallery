import React from "react";
import './header.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container-header">
                    <div className="content-fluid">
                        <div className="content-p1">
                            <h1>Talent Must Opporunity</h1>
                            <h4>let the magic of art <br /> breathe new life <br /> into you</h4>
                            <p>Art Speaks Where words Are Unable to Explain</p>
                            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>

                        <hr />
                        
                        <div className="content-p2">
                            <div className="cntent-img">
                                <img src="https://i.pinimg.com/736x/a4/7b/80/a47b805094f84df1314b19be51269b88.jpg" alt="MYimage" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Header;