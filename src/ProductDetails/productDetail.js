import React, { useState } from "react";
import './productDetail.css';
import Rating from '@mui/material/Rating';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from "react-redux";
import { addPost, addCartProducts } from "../reducers/indx";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ShareIcon from '@mui/icons-material/Share';

const ProductDetail = ({ Products }) => {
    const dispatch = useDispatch();
    const [bookmarkedProducts, setBookmarkedProducts] = useState({});
    const [cartedmarkedProducts, setCartedMarkedProduct] = useState({});

    const handleSaveProduct = (product) => {
        dispatch(addPost(product));
    };

    const addToCarthandle = (product) => {
        dispatch(addCartProducts(product));
    };

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

                                            <p>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer
                                                took a galley of type and scrambled it to make a type specimen book.
                                            </p>

                                            <div className="product-box">
                                                <div className="product-img">
                                                    <img src={item?.image} alt="Product" />
                                                </div>
                                            </div>

                                            <div className="product-breif">
                                                <div className="info-prod">
                                                    <div className="info-data">
                                                        <div className="post-icons">
                                                            <FavoriteBorderSharpIcon className="hrt-st" />
                                                            <ShareIcon className="hrt-st" />
                                                            <h3 onClick={() => handleBookmarkClick(item)} className="hrt-st">
                                                                {bookmarkedProducts[item.id] ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                                                            </h3>
                                                            <h3 onClick={() => CartedHandleMarkedClicked(item)} className="crt-st">
                                                                {cartedmarkedProducts[item.id] ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
                                                            </h3>
                                                        </div>

                                                        <h4>Designed By Pragya</h4>
                                                        <h5 className="name">{item.name}</h5>
                                                        <h5 className="price-tag">Price - <span>{item?.price}</span></h5>
                                                        {/* <h5>Rating - <Rating name="customized-10" defaultValue={item?.rating} max={5} className="rating-crd" /></h5> */}
                                                        <p>Stock Status - <h6>{item?.stockStatus}</h6></p>
                                                        {/* <h4>Brand Name - <b>{item?.brand}</b></h4> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="saved-mark-product">


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