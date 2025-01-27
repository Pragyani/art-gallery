import React from "react";
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import './Deletemodal.css';

const ConfirmDeleteModal = ({ open, onClose, onConfirmDelete, postToDelete }) => (
    <Modal open={open} onClose={onClose}>
        <Box className='delete-box'>
            <h2>Are you sure you want to delete this post?</h2>
            <p>{postToDelete?.name}</p>
            <div>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={() => onConfirmDelete(postToDelete)}>Yes, Delete</Button>
            </div>
        </Box>
    </Modal>
);
export default ConfirmDeleteModal;