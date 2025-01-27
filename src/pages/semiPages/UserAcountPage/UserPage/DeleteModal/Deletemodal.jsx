import React from "react";
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import './Deletemodal.css';

const ConfirmDeleteModal = ({ open, onClose, onConfirmDelete, postToDelete }) => (
    <Modal open={open} onClose={onClose}>
        <Box className='delete-box'>
            <h2>Alert !</h2>
            <h3>The {postToDelete?.name} Post will permanently Delete after your Confirmation click.</h3>

            <div className="confirm-btn">
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={() => onConfirmDelete(postToDelete)}>Yes, Delete</Button>
            </div>
        </Box>
    </Modal>
);
export default ConfirmDeleteModal;