/*** React dependencies*/
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi2";
import { FiBookmark } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
import { IoBookmark } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { MdPersonPin } from "react-icons/md";

/*** Internal dependencies*/
import "./productDetail.css";
import { addPost, toggleCartProduct, addPopularPost } from "../reducers/indx";
import CommentBox from "./CommentModal/CommetnModal";
import NotFoundPage from "../pages/notfoundpage/NotFoundPage";
import ProductDetailData from "./ProductDetailData";

const ProductDetail = ({ Products }) => {
    const dispatch = useDispatch();
    const [bookmarkedProducts, setBookmarkedProducts] = useState({});
    const [voteMarked, setVoteMarked] = useState({});
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [heartAnimation, setHeartAnimation] = useState(null);

    const cartProducts = useSelector((state) => state.cartProducts);
    const inputValue = useSelector((state) => state.inputSlice);

    const filteredProducts = Products.filter((product) => product?.brand.toLowerCase().includes(inputValue?.toLowerCase()));

    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedProducts")) || {};
        const savedVotes = JSON.parse(localStorage.getItem("voteMarked")) || {};

        setBookmarkedProducts(savedBookmarks);
        setVoteMarked(savedVotes);
    }, []);

    const handleSaveProduct = (product) => {
        dispatch(addPost(product));
    };

    const addToCarthandle = (product) => {
        dispatch(toggleCartProduct(product));
        const updatedCart = cartProducts.find((item) => item.id === product.id)
            ? cartProducts.filter((item) => item.id !== product.id)
            : [...cartProducts, product];
        localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    };

    const handleBookmarkToggle = (product) => {
        setBookmarkedProducts((prev) => {
            const newState = { ...prev, [product.id]: !prev[product.id] };
            localStorage.setItem("bookmarkedProducts", JSON.stringify(newState));
            return newState;
        });

        if (!bookmarkedProducts[product.id]) {
            handleSaveProduct(product);
        }
        const bookmarkedProductsList = JSON.parse(localStorage.getItem("bookmarkedProductsList")) || [];
        if (!bookmarkedProducts[product.id]) {
            localStorage.setItem("bookmarkedProductsList", JSON.stringify([...bookmarkedProductsList, product]));
        } else {
            localStorage.setItem(
                "bookmarkedProductsList",
                JSON.stringify(bookmarkedProductsList.filter((bookmarkedProduct) => bookmarkedProduct.id !== product.id))
            );
        }
    };
    const handleVoteMarkToggle = (product) => {
        setVoteMarked((prev) => {
            const newState = { ...prev, [product.id]: !prev[product.id] };
            localStorage.setItem("voteMarked", JSON.stringify(newState));
            return newState;
        });

        if (!voteMarked[product.id]) {
            handleSaveProduct(product);
            dispatch(addPopularPost(product));
        }

        if (!voteMarked[product.id]) {
            setHeartAnimation(product.id);
            setTimeout(() => setHeartAnimation(null), 600);
        }

        const likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
        if (!voteMarked[product.id]) {
            localStorage.setItem("likedProducts", JSON.stringify([...likedProducts, product]));
        } else {
            localStorage.setItem(
                "likedProducts",
                JSON.stringify(likedProducts.filter((likedProduct) => likedProduct.id !== product.id))
            );
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
                            {filteredProducts.length !== 0 ? (
                                filteredProducts.map((item) => (
                                    <ProductDetailData
                                        key={item.id}
                                        item={item}
                                        heartAnimation={heartAnimation}
                                        cartProducts={cartProducts}
                                        voteMarked={voteMarked}
                                        bookmarkedProducts={bookmarkedProducts}
                                        handleVoteMarkToggle={handleVoteMarkToggle}
                                        handleBookmarkToggle={handleBookmarkToggle}
                                        addToCarthandle={addToCarthandle}
                                        handleShowComments={handleShowComments}
                                    />
                                ))
                            ) : (
                                <NotFoundPage />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {showCommentBox && selectedPost && (<CommentBox postComment={selectedPost} onClose={() => setShowCommentBox(false)} />)}
        </>
    );
};
export default ProductDetail;