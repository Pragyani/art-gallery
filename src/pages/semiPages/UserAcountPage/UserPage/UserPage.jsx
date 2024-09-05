import React, { useState } from 'react';
import './userpage.css';
import Rating from '@mui/material/Rating';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import { BasicModal } from './BasicModal/modal';
import ProfileColumn from './ProfileBlock/ProfileColumn';

const ProfilePage = ({ data }) => {
    const [artData, setArtData] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

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

    return (
        <>
            <div className="profile-prt">
                <div className="profile-content">
                    <section className="user-profile">
                        <ProfileColumn />
                        <div className="mega-userProfile">
                            <div className="cl-rowUser">
                                <button onClick={handleAddNewClick} className="add-new-post-btn">Add New Post</button>
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
                                                    <div className="info-prod">
                                                        <div className="info-data">
                                                            <h4>Designed By Pragya</h4>
                                                            <h5 className="name">{item.name}</h5>
                                                            <h5 className="price-tag">Price - <span>{item.price}</span></h5>
                                                            <h5>Rating - <Rating name="customized-10" defaultValue={item.rating} max={5} className="rating-crd" /></h5>
                                                            <p>Stock Status - <h6>{item.stockStatus}</h6></p>
                                                            <h4>Brand Name - <b>{item.brand}</b></h4>
                                                            <div className="products-icon">
                                                                <span className="product-chnges-icon" onClick={() => handleEditClick(item)}>
                                                                    <EditNoteRoundedIcon className="edit-icon" />
                                                                </span>
                                                                <span className="product-chnges-icon" onClick={() => {
                                                                    const newArray = artData.filter((_, idx) => idx !== index);
                                                                    setArtData(newArray);
                                                                }}>
                                                                    <DeleteForeverRoundedIcon className="delete-icon" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
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

            <BasicModal
                open={modalOpen}
                handleClose={handleCloseModal}
                postToEdit={selectedItem}
                setArtData={setArtData}
            />
        </>
    );
};

export default ProfilePage;
