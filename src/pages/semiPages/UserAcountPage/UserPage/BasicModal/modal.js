import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
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
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    p: 4,
};

export function BasicModal({ Data }) {
    const [artData, setArtData] = useState(Data);
    const [open, setOpen] = React.useState(false);
    const [inputName, setInputName] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputBrand, setInputBrand] = useState('');
    const [inputImage, setInputImage] = useState(null);
    const [inputImageUrl, setInputImageUrl] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeName = (e) => setInputName(e.target.value);
    const handleChangePrice = (e) => setInputPrice(e.target.value);
    const handleChangeBrand = (e) => setInputBrand(e.target.value);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setInputImage(file);
            setInputImageUrl(URL.createObjectURL(file));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            name: inputName,
            price: inputPrice,
            brand: inputBrand,
            image: inputImageUrl,
        };

        setArtData(prevData => [...prevData, newPost]);
        console.log('New artData:', [...artData, newPost]);
        setInputName('');
        setInputPrice('');
        setInputBrand('');
        setInputImage(null);
        setInputImageUrl('');
        handleClose();
    }

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='box-flex'>
                    <h1>Create New Post</h1>
                    <div className='input-container'>
                        <div className='input-box'>
                            <div className='post-content'>
                                <div className='picture-tl'>
                                    <AddAPhotoOutlinedIcon className="select" />
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor="myfile">Drag photos and videos here</label>
                                        <input type="file" id="myfile" onChange={handleChangeImage} />
                                        {inputImageUrl && (
                                            <img
                                                src={inputImageUrl}
                                                alt="Preview"
                                                className="preview-image"
                                            />
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
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    value={inputName}
                                                    onChange={handleChangeName}
                                                />
                                            </h4>
                                        </div>
                                        <div className="post-brief">
                                            <div className="price-bref">
                                                <h5 className="price-tg-txt">Add the price of drawing</h5>
                                                <input
                                                    type="number"
                                                    placeholder="Enter price..."
                                                    value={inputPrice}
                                                    onChange={handleChangePrice}
                                                />
                                            </div>
                                            <div className="stock-bar">
                                                <h5>Stock Status <BasicSelect /></h5>
                                            </div>
                                            <div className="brand-bar">
                                                <h5>Brand Name</h5>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your brand name..."
                                                    value={inputBrand}
                                                    onChange={handleChangeBrand}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Button type="submit" className='sbmit-btnpost'>Share</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
