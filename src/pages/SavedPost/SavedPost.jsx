import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './savePost.css';

const SavedProducts = () => {
    const [savedProducts, setSavedProducts] = useState([]);

    useEffect(() => {
        const storedSavedProducts = JSON.parse(localStorage.getItem("bookmarkedProductsList")) || [];
        setSavedProducts(storedSavedProducts);
    }, []);

    return (
        <div className="saved-semiConatiner">
            <div className="saved-products-container">
                <h1>Your saved items..</h1>
                <div className="saved-products-list">
                    {savedProducts.length === 0 ? (
                        <p className="saved-cl-page">
                            No products saved yet! <br />
                            <span>
                                <Link to={'/'}>BACK TO HOME <ArrowForwardIosIcon className="arr" /></Link>
                            </span>
                        </p>
                    ) : (
                        savedProducts.map((product) => (
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

export default SavedProducts;
