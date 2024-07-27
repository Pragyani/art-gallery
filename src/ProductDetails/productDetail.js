import React from "react";
import './productDetail.css'

const ProductDetail = ({ Products }) => {
    // console.log('pragyaProductDetails',Products)  // working console
    return (
        <>
            <div className="heading">
                <h1>OUR PRODUCTS</h1>

            </div>

            <div className="productDetail-page">
                <div className="prodPage">
                    <div className="content-containerflex">

                        <div className="product-cont">
                            <div className="product-boxf">
                                <div className="box-image">
                                    <img src="https://i.ibb.co/yFN9S23/Adobe-Scan-17-Jul-2024-2.jpg" alt="myProductImage" />
                                </div>

                                <div className="box-content">
                                    <h1>Pragya Drawing</h1>
                                    <span>Price : <h3>12$</h3></span>
                                    <h5>STOCK STAUS : Out</h5>
                                    <h5>Brand Name : Art </h5>
                                    <h5>Rating : 5</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />    <br />
        </>
    )
}
export default ProductDetail;