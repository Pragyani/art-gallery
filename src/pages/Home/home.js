import React from "react";
import './home.css';
import ProductDetail from "../../ProductDetails/productDetail";
import SideBar from "../../NavigationBar/NavigationSideBar/sideBar";
import CommunitySideBar from "../../NavigationBar/NavigationSideBar/ComuunitySideBar/CommunitySidebar";

const Home = ({ data }) => {
    return (
        <>
            <div className="home-page">
                <SideBar />
                <hr className="home-hr" />
                <ProductDetail Products={data} />
                <CommunitySideBar />
            </div>
        </>
    )
}
export default Home;