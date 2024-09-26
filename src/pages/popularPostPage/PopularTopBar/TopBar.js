import React from "react";
import './topbar.css';
import { TopBarImage1, TopBarImage2, TopBarImage3, TopBarImage4, TopBarImage5, TopBarImage6, TopBarImage7 } from "../../../utils";

const TopBar = () => {
    return (
        <>
            <div className="page-cl-content">
                <div className="popular-page-item">
                    <div className="item-page">
                        <ul className="poplr-pages-content">
                            <li>
                                <img src={TopBarImage1} alt="popul-page-imamges" />
                                <h4>Space Painting</h4>
                            </li>

                            <li>
                                <img src={TopBarImage2} alt="popul-page-imamges" />
                                <h4>Mandala Art</h4>
                            </li>
                            <li>
                                <img src={TopBarImage3} alt="popul-page-imamges" />
                                <h4>Canvas Painting</h4>
                            </li>
                            <li>
                                <img src={TopBarImage4} alt="popul-page-imamges" />
                                <h4>Designs</h4>
                            </li>
                            <li>
                                <img src={TopBarImage5} alt="popul-page-imamges" />
                                <h4>Painting</h4>
                            </li>
                            <li>
                                <img src={TopBarImage6} alt="popul-page-imamges" />
                                <h4>Doddle Art</h4>
                            </li>
                            <li>
                                <img src={TopBarImage7} alt="popul-page-imamges" />
                                <h4>Madhubani Art</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopBar;