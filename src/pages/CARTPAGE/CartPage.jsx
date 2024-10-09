import React, { useEffect } from "react";
import './CartPage.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rating from '@mui/material/Rating';
import SideBar from "../../NavigationBar/NavigationSideBar/sideBar";
import { setCartProducts } from "../../reducers/indx";

const CartPage = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cartProducts);

    useEffect(() => {
        const storedCart = localStorage.getItem('cartProducts');
        if (storedCart) {
            dispatch(setCartProducts(JSON.parse(storedCart)));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

    const removeItem = (productID) => {
        const updatedCartItem = cartProducts.filter((product) => product.id !== productID);
    }

    return (
        <div className="cart-products-container">
            <SideBar /> <hr className="cartpage-hr" />
            <div className="cart-products-list">
                <h1>CART ITEMS</h1>
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
                                                    <p>Stock Status - <h6>{product.stockStatus}</h6></p>
                                                    <h4>Brand Name - <b>{product.brand}</b></h4>
                                                </div>
                                            </div>
                                            <button className="remove-item-button"onClick={() => removeItem(product.id)}>REMOVE ITEM</button></div>
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