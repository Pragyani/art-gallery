import React, { useState } from "react";
import './productDetail.css';
import Rating from '@mui/material/Rating';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from "react-redux";
import { addPost, addCartProducts } from "../reducers/indx";

const ProductDetail = ({ Products }) => {
    const dispatch = useDispatch();
    const [bookmarkedProducts, setBookmarkedProducts] = useState({});

    const handleSaveProduct = (product) => {
        dispatch(addPost(product));
        alert('Product saved successfully!');
    };

    const addToCarthandle = (product) => {
        dispatch(addCartProducts(product));
        alert('Product added to cart');
    };

    const handleBookmarkToggle = (product) => {
        setBookmarkedProducts((prev) => ({
            ...prev,
            [product.id]: !prev[product.id]
        }));
    };

    console.log('r', handleBookmarkToggle)

    const handleBookmarkClick = (product) => {
        handleBookmarkToggle(product);
        if (!bookmarkedProducts[product.id]) {
            handleSaveProduct(product);
        }
    };

    return (
        <>
            <div className="detail-container">
                <div className="container-box">
                    <div className="heading">
                        <h2>Our Posts</h2>
                        <hr className="hr-line" />
                    </div>

                    <div className="re-container">
                        <div className="product-fluid">
                            {
                                Products.length !== 0 && Products.map((item) => {
                                    return (
                                        <div className="products" key={item.id}>
                                            <div className="product-box">
                                                <div className="product-img">
                                                    <img src={item?.image} alt="Product" />
                                                </div>
                                            </div>

                                            <div className="product-breif">
                                                <div className="info-prod">
                                                    <div className="info-data">
                                                        <h4>Designed By Pragya</h4>
                                                        <h5 className="name">{item.name}</h5>
                                                        <h5 className="price-tag">Price - <span>{item?.price}</span></h5>
                                                        <h5>Rating - <Rating name="customized-10" defaultValue={item?.rating} max={5} className="rating-crd" /></h5>
                                                        <p>Stock Status - <h6>{item?.stockStatus}</h6></p>
                                                        <h4>Brand Name - <b>{item?.brand}</b></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="saved-mark-product">
                                                <h3 onClick={() => handleBookmarkClick(item)}>
                                                    {bookmarkedProducts[item.id] ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                                                </h3>
                                                <h3 onClick={() => addToCarthandle(item)}>
                                                    <AddShoppingCartIcon className="cart-ikn" />
                                                </h3>
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
