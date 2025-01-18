import React, { useEffect } from "react";
import './CartPage.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rating from '@mui/material/Rating';
import SideBar from "../../NavigationBar/NavigationSideBar/sideBar";
import { setCartProducts } from "../../reducers/indx";
import { IoMdRemoveCircle } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";

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
        dispatch(setCartProducts(updatedCartItem))
    }

    return (
        <div className="cart-products-container">
            <div className="cart-products-list">
                {/* <h1><FaOpencart className="open-cart"/>CART ITEMS</h1> */}
                {cartProducts.length === 0 ? (
                    <p className="stck-p">No products in cart yet! <br /> <span><Link to={'/'}>BACK TO HOME <ArrowForwardIosIcon className="arr" /></Link></span></p>
                ) : (
                    cartProducts.map((product) => (
                        <div className="fluid-post">
                            <div className="re-container">
                                <div className="product-fluid">
                                    <div key={product.id} className="products">
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

                                        {/* <div className="remove-item-button"  onClick={() => removeItem(product.id)}><IoMdRemoveCircle /></div > */}
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