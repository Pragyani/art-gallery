import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SideBar from "../../NavigationBar/NavigationSideBar/sideBar";
import './popularpostpage.css'
import TopBar from "./PopularTopBar/TopBar";

const PopularPost = () => {
    const [likedProducts, setLikedProducts] = useState([]);

    useEffect(() => {
        const storedLikedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
        setLikedProducts(storedLikedProducts);
    }, []);

    return (
        <div className="sidesection">
            <div className="popular-products-container">
                <TopBar />
                <div className="popular-products-list">
                    {likedProducts.length === 0 ? (
                        <p className="home-cl-pge">Latest Post Are Popular yet! <br /> <span><Link to={'/'}>BACK TO HOME <ArrowForwardIosIcon className="arr" /></Link></span></p>
                    ) : (
                        likedProducts.map((product) => (
                            <div className="fluid-post" key={product.id}>
                                <div className="re-container">
                                    <div className="product-fluid">
                                        <div className="products">
                                            <div className="product-box">
                                                <div className="product-img">
                                                    <img src={product.image} alt="product" />
                                                </div>
                                            </div>

                                            <div className="product-container">
                                                <div className="price-section">
                                                    <span className="current-price">Doodle Collection</span>
                                                    <span className="current-price">₹{product?.price}</span>
                                                    <span className="original-price">₹999</span>
                                                    <span className="discount">30% OFF</span>
                                                </div>
                                                <div className="display-flex">
                                                    <div className="designer-info">
                                                        <span className="designed-by">By {product?.brand}</span>
                                                    </div>
                                                </div>
                                                <p className="description">
                                                    A unique collection of hand-drawn doodles perfect for creative projects and designs.
                                                </p>
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
    );
};

export default PopularPost;