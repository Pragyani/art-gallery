import React, { useState } from "react";
import './productDetail.css';
import { useDispatch } from "react-redux";
import { addPost, addCartProducts, addPopularPost } from "../reducers/indx";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
import { FcBookmark } from "react-icons/fc";
import { FiBookmark } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi2";

const ProductDetail = ({ Products }) => {
    const dispatch = useDispatch();
    const [bookmarkedProducts, setBookmarkedProducts] = useState({});
    const [cartedmarkedProducts, setCartedMarkedProduct] = useState({});
    const [voteMarked, setvoteMarked] = useState({});

    const handleSaveProduct = (product) => {
        dispatch(addPost(product));
    };

    const addToCarthandle = (product) => {
        dispatch(addCartProducts(product));
    };

    const handleSavedPopularPosts = (product) => {
        dispatch(addPopularPost(product));
    }

    const handleBookmarkToggle = (product) => {
        setBookmarkedProducts((prev) => ({
            ...prev,
            [product.id]: !prev[product.id]
        }));
    };

    const handleBookmarkClick = (product) => {
        handleBookmarkToggle(product);
        if (!bookmarkedProducts[product.id]) {
            handleSaveProduct(product);
        }
    };

    const carthandlemarked = (product) => {
        setCartedMarkedProduct((prev) => ({
            ...prev,
            [product.id]: !prev[product.id]
        }));
    };

    const CartedHandleMarkedClicked = (product) => {
        carthandlemarked(product);
        if (!cartedmarkedProducts[product.id]) {
            addToCarthandle(product);
        }
    }

    const handleVoteMarkToggle = (product) => {
        setvoteMarked((prev) => ({
            ...prev,
            [product.id]: !prev[product.id]
        }));
    };

    const handlePopularPost = (product) => {
        handleVoteMarkToggle(product);
        if (!voteMarked[product.id]) {
            handleSavedPopularPosts(product);
        }
    }
    return (
        <>
            <div className="detail-container">
                <div className="container-box">
                    <div className="re-container">
                        <div className="product-fluid">
                            {
                                Products.length !== 0 && Products.map((item) => {
                                    return (
                                        <div className="products" key={item.id}>
                                            <div className="user-plug">
                                                <PersonPinIcon className="user-i-post" />
                                                <div>Your Post : <b><span>{item?.brand}</span></b></div>
                                            </div>

                                            <div className="product-box">
                                                <div className="product-img">
                                                    <img src={item?.image} alt="Product" />
                                                </div>
                                            </div>

                                            <div className="product-breif">
                                                <div className="info-prod">
                                                    <div className="info-data">
                                                        <span className="info-data-p">
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                            when an unknown printer
                                                            took a galley of type and scrambled it to make a type specimen book.
                                                        </span>

                                                        <h4>Designed By {item?.brand}</h4>
                                                        <p>Stock Status - <h6>{item?.stockStatus}</h6></p>
                                                        <h5 className="price-tag">MRP - <CurrencyRupeeIcon className="price-tag-ruppee" /><span>{item?.price}</span></h5>

                                                        <div className="post-icons">
                                                            <div className="liked-ico">
                                                                <span onClick={() => handlePopularPost(item)} className="hrt-st">
                                                                    {voteMarked[item.id] ? <FcLike className="fc-like-i" /> : <FcLikePlaceholder className="fc-like-i" />}
                                                                </span>
                                                            </div>
                                                            <FcShare className="share-icon" />
                                                            <span onClick={() => handleBookmarkClick(item)} className="hrt-st">
                                                                {bookmarkedProducts[item.id] ? <FcBookmark className="bookedMarks" /> : <FiBookmark className="bookedMarks" />}
                                                            </span>

                                                            <h3 onClick={() => CartedHandleMarkedClicked(item)} className="crt-st">
                                                                {cartedmarkedProducts[item.id] ? <HiShoppingCart className="shopin-crt" /> : <HiOutlineShoppingCart className="shopin-crt" />}
                                                            </h3>
                                                        </div>
                                                        <span className="input-span-tag"><input placeholder="Add Comment ...." type="text" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProductDetail;