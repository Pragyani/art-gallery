import React, { useState } from "react";
import './productDetail.css';
import { useDispatch, useSelector } from "react-redux";
import { addPost, toggleCartProduct, addPopularPost } from "../reducers/indx";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { FcLikePlaceholder, FcLike, FcShare, FcBookmark } from "react-icons/fc";
import { FiBookmark } from "react-icons/fi";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi2";
import { FaRegComment } from "react-icons/fa6";
import CommentBox from "./CommentModal/CommetnModal";
import NotFoundPage from "../pages/notfoundpage/NotFoundPage";

const ProductDetail = ({ Products }) => {
    const dispatch = useDispatch();
    const [bookmarkedProducts, setBookmarkedProducts] = useState({});
    const [voteMarked, setVoteMarked] = useState({});
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const cartProducts = useSelector(state => state.cartProducts);
    const inputValue = useSelector(state => state.inputSlice);

    const filteredProducts = Products.filter(product =>
        product?.brand.toLowerCase().includes(inputValue?.toLowerCase())
    );

    const handleSaveProduct = (product) => {
        dispatch(addPost(product));
    };

    const addToCarthandle = (product) => {
        dispatch(toggleCartProduct(product));
        const updatedCart = cartProducts.find(item => item.id === product.id)
            ? cartProducts.filter(item => item.id !== product.id)
            : [...cartProducts, product];
        localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
    };

    const handleBookmarkToggle = (product) => {
        setBookmarkedProducts((prev) => ({
            ...prev,
            [product.id]: !prev[product.id]
        }));

        if (!bookmarkedProducts[product.id]) {
            handleSaveProduct(product);
        }
    };

    const handleVoteMarkToggle = (product) => {
        setVoteMarked((prev) => ({
            ...prev,
            [product.id]: !prev[product.id]
        }));

        if (!voteMarked[product.id]) {
            handleSaveProduct(product);
            dispatch(addPopularPost(product));
        }
    };

    const handleShowComments = (product) => {
        setSelectedPost(product);
        setShowCommentBox(true);
    };

    return (
        <>
            <div className="detail-container">
                <div className="container-box">
                    <div className="re-container">
                        <div className="product-fluid">
                            {filteredProducts.length !== 0 ? filteredProducts.map((item) => (
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
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                                                </span>
                                                <h4>Designed By {item?.brand}</h4>
                                                <p>Stock Status - <h6>{item?.stockStatus}</h6></p>
                                                <h5 className="price-tag">MRP - <CurrencyRupeeIcon className="price-tag-ruppee" /><span>{item?.price}</span></h5>
                                                <div className="post-icons">
                                                    <div className="liked-ico">
                                                        <span onClick={() => handleVoteMarkToggle(item)} className="hrt-st">
                                                            {voteMarked[item.id] ? <FcLike className="fc-like-i" /> : <FcLikePlaceholder className="fc-like-i" />}
                                                        </span>
                                                    </div>
                                                    <FcShare className="share-icon" />
                                                    <span onClick={() => handleBookmarkToggle(item)} className="hrt-st">
                                                        {bookmarkedProducts[item.id] ? <FcBookmark className="bookedMarks" /> : <FiBookmark className="bookedMarks" />}
                                                    </span>
                                                    <h3 onClick={() => addToCarthandle(item)} className="crt-st">
                                                        {cartProducts.find(product => product.id === item.id) ? (<HiShoppingCart className="shopin-crt" />) : (<HiOutlineShoppingCart className="shopin-crt" />)}
                                                    </h3>
                                                    <span className="input-span-tag">
                                                        <FaRegComment className="cmnt-rct-i" onClick={() => handleShowComments(item)} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)) : <NotFoundPage />}
                        </div>
                    </div>
                </div>
            </div>
            {showCommentBox && selectedPost && (<CommentBox postComment={selectedPost} onClose={() => setShowCommentBox(false)} />)}
        </>
    );
};
export default ProductDetail;