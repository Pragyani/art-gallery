import React from "react";
import './home.css';
import ProductDetail from "../../ProductDetails/productDetail";
import SideBar from "../../NavigationBar/NavigationSideBar/sideBar";

const Home = ({ data }) => {
    return (
        <>
            <div className="home-page">
                <SideBar />
                <hr className="hr-dep"/>
                <ProductDetail Products={data} />
            </div>
        </>
    )
}
export default Home;