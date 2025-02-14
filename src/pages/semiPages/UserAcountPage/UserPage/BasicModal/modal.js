/**Internal Dependencies */
import React, { useState, useEffect } from 'react';
import './modal.css';
import { RxCross1 } from "react-icons/rx";

/**External Depenedencies */
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from "@mui/material";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

export function BasicModal({ open, handleClose, postToEdit, setArtData }) {
    const [inputName, setInputName] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputBrand, setInputBrand] = useState('');
    const [inputImage, setInputImage] = useState(null);
    const [inputImageUrl, setInputImageUrl] = useState('');
    const [inputCaption, setInputCaption] = useState('');

    useEffect(() => {
        if (postToEdit) {
            setInputName(postToEdit.name || '');
            setInputPrice(postToEdit.price || '');
            setInputBrand(postToEdit.brand || '');
            setInputImageUrl(postToEdit.image || '');
            setInputCaption(postToEdit.caption || '');

        } else {
            setInputName('');
            setInputPrice('');
            setInputBrand('');
            setInputImageUrl('');
            setInputCaption('');


        }
    }, [postToEdit]);

    const handleChangeName = (e) => setInputName(e.target.value);
    const handleChangePrice = (e) => setInputPrice(e.target.value);
    const handleChangeBrand = (e) => setInputBrand(e.target.value);
    const handleChangeCaption = (e) => setInputCaption(e.target.value);
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setInputImage(file);
            setInputImageUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            name: inputName,
            price: inputPrice,
            brand: inputBrand,
            image: inputImageUrl,
            caption: inputCaption,
        };

        if (postToEdit) {
            setArtData(prevData =>
                prevData.map(post =>
                    post === postToEdit ? { ...post, ...newPost } : post
                )
            );
        } else {
            setArtData(prevData => [newPost, ...prevData]);
        }
        setInputName('');
        setInputPrice('');
        setInputBrand('');
        setInputImage(null);
        setInputImageUrl('');

        handleClose();
    };

    const handleCancle = () => {
        setInputImage(null);
        setInputImageUrl('');
    }
    const modalClose = () => {
        handleClose()
    }

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box className='box-flex'>
                <h1>{postToEdit ? 'Edit Post' : 'Create New Post'}</h1>
                <div className='input-container'>
                    <div className='input-box'>
                        <RxCross1 className='close-image-icon' onClick={() => handleCancle()} />
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
                        <hr className='modal-line' />
                        <div className='post-Detailcontent'>
                            <h3>Add Post Info.</h3>
                            <form onSubmit={handleSubmit} className="local-input">
                                <div className="cl-local">
                                    <div className="post-brief">
                                        <div className='brand-bar'>
                                            <input type="text" placeholder=" Give your artwork a name " value={inputName} onChange={handleChangeName} />
                                        </div>
                                        <div className="brand-bar">
                                            <input type="number" placeholder="Set the price for your art" value={inputPrice} onChange={handleChangePrice} />                                        </div>

                                        <div className="brand-bar">
                                            <input type="text" placeholder="By Who’s the brand? " value={inputBrand} onChange={handleChangeBrand} />
                                        </div>

                                        <div className="brand-bar">
                                            <input
                                                type="text" placeholder="Write a short caption" value={inputCaption} onChange={handleChangeCaption} />
                                        </div>
                                    </div>
                                </div>
                                <Button onClick={() => modalClose()} className='sbmit-btnpost'>Cancle</Button>
                                <Button type="submit" className='sbmit-btnpost'>{postToEdit ? 'Update' : 'Share'}</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}