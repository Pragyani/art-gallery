import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import './modal.css';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import BasicSelect from '../BasicSelect/BasicSelect';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1340,
    bgcolor: '#f5f5f5',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 8px 26px rgba(0, 0, 0, 0.6)',
    p: 4,
};

export function BasicModal({ open, handleClose, postToEdit, setArtData }) {
    const [inputName, setInputName] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputBrand, setInputBrand] = useState('');
    const [inputImage, setInputImage] = useState(null);
    const [inputImageUrl, setInputImageUrl] = useState('');
    const [stockStatus, setStockStatus] = useState('In Stock');

    useEffect(() => {
        if (postToEdit) {
            setInputName(postToEdit.name || '');
            setInputPrice(postToEdit.price || '');
            setInputBrand(postToEdit.brand || '');
            setInputImageUrl(postToEdit.image || '');
            setStockStatus(postToEdit.stockStatus || 'In Stock');
        } else {
            setInputName('');
            setInputPrice('');
            setInputBrand('');
            setInputImageUrl('');
            setStockStatus('In Stock');
        }
    }, [postToEdit]);

    const handleChangeName = (e) => setInputName(e.target.value);
    const handleChangePrice = (e) => setInputPrice(e.target.value);
    const handleChangeBrand = (e) => setInputBrand(e.target.value);
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setInputImage(file);
            setInputImageUrl(URL.createObjectURL(file));
        }
    };
    const handleStockChange = (value) => { setStockStatus(value); };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            name: inputName,
            price: inputPrice,
            brand: inputBrand,
            stockStatus: stockStatus,
            image: inputImageUrl,
        };

        if (postToEdit) {
            setArtData(prevData =>
                prevData.map(post =>
                    post === postToEdit ? newPost : post
                )
            );
        } else {
            setArtData(prevData => [...prevData, newPost]);
        }

        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style} className='box-flex'>
                <h1>{postToEdit ? 'Edit Post' : 'Create New Post'}</h1>
                <div className='input-container'>
                    <div className='input-box'>
                        <div className='post-content'>
                            <div className='picture-tl'>
                                <AddAPhotoOutlinedIcon className="select" />
                                <form>
                                    <label htmlFor="myfile">Drag photos and videos here</label>
                                    <input type="file" id="myfile" onChange={handleChangeImage} />
                                    {inputImageUrl && (
                                        <img src={inputImageUrl} alt="Preview" className="preview-image" />
                                    )}
                                </form>
                            </div>
                        </div>
                        <hr />
                        <div className='post-Detailcontent'>
                            <form onSubmit={handleSubmit} className="local-input">
                                <div className="cl-local">
                                    <div className="user-pic">
                                        <h4>
                                            <input type="text" placeholder="Your Name" value={inputName} onChange={handleChangeName} />
                                        </h4>
                                    </div>
                                    <div className="post-brief">
                                        <div className="price-bref">
                                            <h5 className="price-tg-txt">Add the price of drawing</h5>
                                            <input type="number" placeholder="Enter price..." value={inputPrice} onChange={handleChangePrice} />
                                        </div>
                                        <div className="stock-bar">
                                            <h5> <BasicSelect value={stockStatus} onChange={handleStockChange} /></h5>
                                        </div>
                                        <div className="brand-bar">
                                            <h5>Brand Name</h5>
                                            <input type="text" placeholder="Enter your brand name..." value={inputBrand} onChange={handleChangeBrand} />
                                        </div>
                                    </div>
                                </div>
                                <Button type="submit" className='sbmit-btnpost'>{postToEdit ? 'Update' : 'Share'}</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}