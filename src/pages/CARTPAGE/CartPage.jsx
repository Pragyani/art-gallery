import React from "react";
import './CartPage.css';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rating from '@mui/material/Rating';
import SideBar from "../../NavigationBar/NavigationSideBar/sideBar";

const CartPage = () => {
    const cartProducts = useSelector((state) => state.cartProducts);

    return (
        <div className="cart-products-container">
            <SideBar /> <hr />

            <h1>CART ITEMS</h1>
            <div className="cart-products-list">
                {cartProducts.length === 0 ? (
                    <p>No products in cart yet! <br /> <span><Link to={'/'}>BACK TO HOME <ArrowForwardIosIcon className="arr" /></Link></span></p>
                ) : (
                    cartProducts.map((product) => (
                        <div className="fluid-post" key={product.id}>
                            <div className="re-container">
                                <div className="product-fluid">
                                    <div className="products">
                                        <div className="product-box">
                                            <div className="product-img">
                                                <img src={product.image} alt="product" />
                                            </div>
                                        </div>

                                        <div className="product-breif">
                                            <div className="info-prod">
                                                <div className="info-data">
                                                    <h4>Designed By Pragya</h4>
                                                    <h5 className="name">{product.name}</h5>
                                                    <h5 className="price-tag">Price - <span>{product.price}</span></h5>
                                                    <h5>Rating -<Rating name="customized-10" defaultValue={product.rating} max={5} className="rating-crd" /></h5>
                                                    <p>Stock Status - <h6>{product.stockStatus}</h6> </p>
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
    );
};

export default CartPage;
