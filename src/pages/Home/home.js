import React from "react";
import './home.css';
import ProductDetail from "../../ProductDetails/productDetail";

const Home = ({ data }) => {
    return (
        <>
            <div className="home-page">
                <ProductDetail Products={data} />
            </div>
        </>
    )
}
export default Home;