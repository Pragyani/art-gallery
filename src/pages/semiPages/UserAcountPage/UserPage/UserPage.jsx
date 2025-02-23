import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';

/**Internal Dependencies */
import './userpage.css';
import { BasicModal } from './BasicModal/modal';
import ProfileColumn from './ProfileBlock/ProfileColumn';
import ConfirmDeleteModal from './DeleteModal/Deletemodal';
import LongMenu from './optionMenu';

const ProfilePage = ({ data }) => {

    const [artData, setArtData] = useState(() => {
        const savedData = localStorage.getItem('artData');
        return savedData ? JSON.parse(savedData) : data;
    });

    const [selectedItem, setSelectedItem] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);

    useEffect(() => {
        localStorage.setItem('artData', JSON.stringify(artData));
    }, [artData]);

    const handleEditClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const handleAddNewClick = () => {
        setSelectedItem(null);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedItem(null);
    };

    const handleDeleteClick = (item) => {
        setPostToDelete(item);
        setConfirmDeleteOpen(true);
    };

    const handleConfirmDelete = (item) => {
        setArtData((prevData) => prevData.filter((post) => post !== item));
        setConfirmDeleteOpen(false);
        setPostToDelete(null);
    };

    const handleCancelDelete = () => {
        setConfirmDeleteOpen(false);
        setPostToDelete(null);
    };

    return (
        <>
            <div className="profile-prt">
                <div className="profile-content">
                    <section className="user-profile">
                        <ProfileColumn />
                        <div className="mega-userProfile">
                            <div className="cl-rowUser">
                                <div className="cl-as-post">
                                    <button onClick={handleAddNewClick} className="add-new-post-btn"><FaPlus className='grid-layOut' />Add New Post</button>
                                    <button className="add-new-post-btn"><Link to={'/saved-post'}><FaRegBookmark className='grid-layOut' />Saved Post</Link></button>
                                </div>
                                <div className="re-contaier">
                                    {artData.map((item, index) => (
                                        <div className="product-fl" key={index}>
                                            <div className="products-w">
                                                <div className="product-box">
                                                    <div className="product-img">
                                                        <img src={item.image} alt="Product" />
                                                    </div>
                                                </div>

                                                <div className="product-breif">
                                                    <div className="price-section">
                                                        <span className="current-price">{item?.name}</span>
                                                        <span className="current-price">₹{item?.price}</span>

                                                        <span className="original-price">₹999</span>
                                                        <span className="discount">30% OFF</span>
                                                        <div className="dropdown-e-d">
                                                        <LongMenu item={item} onEdit={handleEditClick}  onDelete={handleDeleteClick} className='menu-option'/>
                                                    </div>
                                                    </div>
                                                    <div className="display-flex">
                                                        <div className="designer-info">
                                                            <span className="designed-by">By {item?.brand}</span>
                                                        </div>
                                                    </div>
                                                    <p className="description">
                                                        {item?.caption ? item.caption : 'A unique collection of hand-drawn doodles perfect for creative projects and designs.'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <BasicModal open={modalOpen} handleClose={handleCloseModal} postToEdit={selectedItem} setArtData={setArtData} />
            <ConfirmDeleteModal open={confirmDeleteOpen} onClose={handleCancelDelete} onConfirmDelete={handleConfirmDelete} postToDelete={postToDelete} />
        </>
    );
};
export default ProfilePage;