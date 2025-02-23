import React from 'react';
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi2";
import { FiBookmark } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
import { IoBookmark } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { MdPersonPin } from "react-icons/md";

const ProductDetailData = ({ item, heartAnimation, cartProducts, voteMarked, bookmarkedProducts, handleVoteMarkToggle, handleBookmarkToggle, addToCarthandle, handleShowComments }) => {
    return (
        <>
            <div className="products" key={item.id}>
                <div className="user-plug">
                    <MdPersonPin className="user-i-post" />
                    <div>Your Post : <b><span>{item?.brand}</span></b></div>
                    <div className="post-time">{item?.postedTime}</div>
                </div>
                <div className="product-box">
                    <div className="product-img">
                        <img src={item?.image} alt="Product" />
                        {heartAnimation === item.id && (
                            <div className="heart-animation"> ❤️ </div>
                        )}
                        <div className="tag success">{item?.stockStatus}</div>
                    </div>
                </div>
                <div className="product-container">
                    <div className="price-section">
                        <span className="current-price">{item?.name}</span>
                        <span className="current-price">₹{item?.price}</span>
                        <span className="original-price">₹999</span>
                        <span className="discount">30% OFF</span>
                    </div>
                    <div className="display-flex">
                        <div className="designer-info">
                            <span className="designed-by">By {item?.brand}</span>
                        </div>
                    </div>
                    <p className="description">
                        A unique collection of hand-drawn doodles perfect for creative projects and designs.
                    </p>
                    <div className="action-buttons">
                        <button
                            className={`add-to-cart ripple-button ${cartProducts.some((product) => product.id === item.id) ? 'no-ripple' : ''}`}
                            onClick={() => addToCarthandle(item)} disabled={cartProducts.some((product) => product.id === item.id)}>

                            <span className="crt-st">
                                {cartProducts.some((product) => product.id === item.id) ? (<HiShoppingCart className="shopin-crt" style={{ color: "goldenrod" }} />) : (<HiOutlineShoppingCart className="shopin-crt" />)}
                            </span>
                            {cartProducts.some((product) => product.id === item.id) ? "Already in Cart" : "Add to Cart"}
                        </button>
                        <div className="secondary-buttons">
                            <button className="icon-button">
                                <span className="liked-ico">
                                    <span onClick={() => handleVoteMarkToggle(item)} className="hrt-st">
                                        {voteMarked[item.id] ? (<FcLike className="fc-like-i" />) : (<FcLikePlaceholder className="fc-like-i" />)}
                                    </span>
                                </span>
                            </button>
                            <button className="icon-button">
                                <span onClick={() => handleBookmarkToggle(item)} className="hrt-st">
                                    {bookmarkedProducts[item.id] ? (
                                        <IoBookmark className="bookedMarks" style={{ color: "#4169E1" }} />) : (<FiBookmark className="bookedMarks" />)}
                                </span>
                            </button>
                            <button className="icon-button">
                                <span className="input-span-tag">
                                    {false ? (<FaComment className="cmnt-rct-i" style={{ color: "#9747FF" }} />) : (<FaRegComment className="cmnt-rct-i" onClick={() => handleShowComments(item)} />)}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetailData;