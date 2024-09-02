import React from "react";
import './productDetail.css';
import Rating from '@mui/material/Rating';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch } from "react-redux";
import { addCartPost, addPosts } from "../reducers/indx";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductDetail = ({ Products }) => {
    const dispatch = useDispatch();

    const handleSaveProduct = (product) => {
        dispatch(addPosts(product));
        alert('Product saved successfully!');
    };

    const addToCarthandle = (product) => {
        dispatch(addCartPost(product));
        alert('product cart item added')
    }

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
                                        <div className="products">
                                            <div className="product-box">
                                                <div className="product-img">
                                                    <img src={item?.image} alt="mS" />
                                                </div>
                                            </div>

                                            <div className="product-breif">
                                                <div className="info-prod">
                                                    <div className="info-data">
                                                        <h4>Desgined By Pragya</h4>
                                                        <h5 className="name">{item.name}</h5>
                                                        <h5 className="price-tag">Price - <span>{item?.price}</span></h5>
                                                        <h5>Rating -<Rating name="customized-10" defaultValue={item?.rating} max={5} className="rating-crd" /></h5>
                                                        <p>StockStatus - <h6>{item?.stockStatus}</h6> </p>
                                                        <h4>Brand Name - <b>{item?.brand}</b></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="saved-mark-product">
                                                <h3 onClick={() => handleSaveProduct(item)}><BookmarkIcon /></h3>
                                                <h3 onClick={() => addToCarthandle(item)}><AddShoppingCartIcon className="cart-ikn" /></h3>
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