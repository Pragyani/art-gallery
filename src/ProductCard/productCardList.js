import React from "react";
import './productcardlist.css';

const ProductCardList = ({ data }) => {
    // console.log('PragyaData',data)   //this console is working n showing the actual data
    // console.log('pragyaData', data)
    return (
        <>
            <div className="item">
                <div className="container-fluid">
                    <div className="box">
                        <div className="container-bx">

                            {
                                data.length !== 0 && data.map((item, index) => {
                                    return (
                                        <div className="product-item">
                                            <img src={item?.image}alt="Mydrawing-Image" />
                                            <h2>Mandala Art</h2>
                                            <p>Description : {item?.description}</p>
                                            <p>Price : <span className="price-tag">{item?.price}</span></p>
                                            <p>rating : {item?.rating}</p>
                                            <p>stockStatus: <span>{item?.stockStatus}</span></p>
                                            <p>Brand Name : {item?.brand}</p>

                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
            <br /> <br /><br /><br /><br /><br />
        </>
    )
}
export default ProductCardList;