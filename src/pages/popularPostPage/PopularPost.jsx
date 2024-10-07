import React from "react";
import { useSelector } from "react-redux";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SideBar from "../../NavigationBar/NavigationSideBar/sideBar";
import './popularpostpage.css'
import TopBar from "./PopularTopBar/TopBar";

const PopularPost = () => {
    const PostPopulars = useSelector((state) => state.popularPost);
    return (
        <>
            <div className="sidesection">

                <SideBar /><hr className="popularpage-hr" />
                <div className="popular-products-container">
                    <h1>Popular Posts
                    <hr className="headline-hr" />
                    </h1>
                    <TopBar />
                    <div className="popular-products-list">
                        {PostPopulars.length === 0 ? (
                            <p className="home-cl-pge">Latest Post Are Popular yet! <br /> <span><Link to={'/'}>BACK TO HOME <ArrowForwardIosIcon className="arr" /></Link></span></p>

                        ) : (
                            PostPopulars.map((product) => (
                                <div className="fluid-post">
                                    <div className="re-container">
                                        <div className="product-fluid">
                                            <div key={product.id} className="products">
                                                <div className="product-box">
                                                    <div className="product-img">
                                                        <img src={product.image} alt="product" />
                                                    </div>
                                                </div>

                                                <div className="product-breif">
                                                    <div className="info-prod">
                                                        <div className="info-data">
                                                            <h4>Desgined By Pragya</h4>
                                                            <h5 className="name">{product.name}</h5>
                                                            <h5 className="price-tag">Price - <span>{product.price}</span></h5>
                                                            <h5>Rating -<Rating name="customized-10" defaultValue={product.rating} max={5} className="rating-crd" /></h5>
                                                            <p>StockStatus - <h6>{product.stockStatus}</h6> </p>
                                                            <h4>Brand Name - <b>{product.brand}</b></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularPost;
