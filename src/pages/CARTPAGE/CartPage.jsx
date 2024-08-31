import React from "react";
import './CartPage.css';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rating from '@mui/material/Rating';

const CartPage =()=>{
    const CartProducts = useSelector((state) => state.cartedProducts);

    console.log('aniSAVEDPOS',CartProducts)

    return (
        <div className="saved-products-container">
            <h1> ADD TO CART ITEMS</h1>
            <div className="saved-products-list">
                {CartProducts.length === 0 ? (
                    <p>No products saved yet! <br /> <span><Link to={'/'}>BACK TO HOME <ArrowForwardIosIcon className="arr" /></Link></span></p>

                ) : (
                    CartProducts.map((product) => (
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
    );
}
export default CartPage;