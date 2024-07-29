import React from "react";
import './productDetail.css';
import Rating from '@mui/material/Rating';

const ProductDetail = ({ Products }) => {

    return (
        <>

            <div className="detail-container">
                <div className="container-box">
                    <div className="heading">
                        <h2>Our Products</h2>
                        <hr className="hr-line"/>
                    </div>

                    <div className="re-container">
                        <div className="product-fluid">
                            {
                                Products.length !== 0 && Products.map((item) => {
                                    return (
                                        <div className="products">
                                            <div className="product-box">
                                                <div className="product-img">
                                                    <img src={item.image} alt="mS" />
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

                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>

            <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />
        </>
    )
}
export default ProductDetail;