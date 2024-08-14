import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import { Button } from "@mui/material";
import './modal.css';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

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

export function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
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
                                    < AddAPhotoOutlinedIcon className="select" />

                                    <form >
                                        <label htmlFor="myfile">Drag phots and videos here</label>
                                        <input type="file" />
                                        {/* {inputImageUrl && <img src={inputImageUrl} alt="Preview" className="preview-image" />} */}

                                    </form>
                                </div>
                            </div>
                            <hr />
                            <div className='post-Detailcontent'>
                                <Button type="submit">share</Button>
                                <form className="local-input" >
                                    <div className="cl-local">
                                        <div className="user-pic">
                                            {/* <img src="https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg" alt="imge" /> */}

                                            <h4><input type="text" placeholder="Your Name" /></h4>
                                        </div>

                                        <div className="post-brief">
                                            <div className="price-bref">
                                                <h5 className="price-tg-txt">Add the price of drawing </h5>
                                                <input type="number" placeholder="enter price..." />
                                            </div>

                                            <div className="stock-bar">
                                                <h5>Stock Staus </h5>
                                                <input type="text" placeholder="enter the status..." />
                                            </div>

                                            <div className="brand-bar">
                                                <h5>BRAND NAME</h5>
                                                <input type="text" placeholder="enter your brand name..." />
                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}