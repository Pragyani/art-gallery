import React from "react";
import './home.css';
import { Link } from "react-router-dom";

const Home =({data})=>{
    
    return (
        <>
            <div className="item">
                <div className="container-fluid">
                    <div className="box">
                        <div className="container-bx">

                            {
                                data.length !== 0 && data.map((item, index) => {
                                    return (
                                      
                                        <div className="product-item" key={index}>
                                        <Link to={'/productDetail'}>
                                            <img src={item?.image}alt="Mydrawing-Image" />
                                            </Link>
                                        </div>
                                     
                                    )
                                })
                            }
                            {
                                data.length !== 0 && data.map((item, index) => {
                                    return (
                                      
                                        <div className="product-item" key={index}>
                                        <Link to={'/productDetail'}>
                                            <img src={item?.image}alt="Mydrawing-Image" />
                                            </Link>
                                        </div>
                                     
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
            <br /> <br /><br /><br /><br /><br />
        </>
    )
}
export default Home;