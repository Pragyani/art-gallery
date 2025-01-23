/**React dependencies */
import React, { useState, useEffect } from 'react';
import { LuLayoutGrid } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

/**Internal Dependencies */
import './userpage.css';
import { BasicModal } from './BasicModal/modal';
import ProfileColumn from './ProfileBlock/ProfileColumn';

const ProfilePage = ({ data }) => {
    const [artData, setArtData] = useState(() => {
        const savedData = localStorage.getItem('artData');
        return savedData ? JSON.parse(savedData) : data;
    });

    const [selectedItem, setSelectedItem] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [dropdownIndex, setDropdownIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem('artData', JSON.stringify(artData));
    }, [artData]);

    const handleEditClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
        setDropdownIndex(null);
    };

    const handleAddNewClick = () => {
        setSelectedItem(null);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedItem(null);
    };

    const DroprDownToggle = (index) => {
        setDropdownIndex(dropdownIndex === index ? null : index);
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
                                    <button onClick={handleAddNewClick} className="add-new-post-btn"><LuLayoutGrid className='grid-layOut' />Add New Post</button>
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
                                                    <div className="info-prod">
                                                        <div className="info-data">
                                                            <h4>Designed By Pragya</h4>
                                                            <h5 className="name">{item.name}</h5>
                                                            <h5 className="price-tag">Price : <MdOutlineCurrencyRupee className='re-i-rupee' /><span>{item.price}</span></h5>
                                                            <p>Stock Status :<h6>{item.stockStatus}</h6></p>
                                                            <h4>Brand Name : <b>{item.brand}</b></h4>
                                                            <div className="dropdown-e-d">
                                                                {dropdownIndex === index ? (
                                                                    <RiArrowDropUpLine onClick={() => DroprDownToggle(index)} />
                                                                ) : (
                                                                    <RiArrowDropDownLine onClick={() => DroprDownToggle(index)} />
                                                                )}
                                                            </div>
                                                            {dropdownIndex === index && (
                                                                <div className="products-icon">
                                                                    <span className="product-chnges-icon" onClick={() => handleEditClick(item)}>
                                                                        <BiSolidEditAlt className="edit-icon" />
                                                                    </span>
                                                                    <span className="product-chnges-icon" onClick={() => {
                                                                        const newArray = artData.filter((_, idx) => idx !== index);
                                                                        setArtData(newArray);
                                                                    }}>
                                                                        <RiDeleteBin2Line className="delete-icon" />
                                                                    </span>
                                                                </div>
                                                            )}
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
            <BasicModal open={modalOpen} handleClose={handleCloseModal} postToEdit={selectedItem} setArtData={setArtData} />
        </>
    );
};
export default ProfilePage;