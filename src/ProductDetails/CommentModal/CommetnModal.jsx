import React from "react";
import './comment.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicCommentMODAL({ commentOPen, CommentClose }) {

    return (
        <>
            <div>
                <Modal
                    open={commentOPen}
                    onClose={CommentClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">

                    <Box sx={style}>

                    </Box>

                </Modal>
            </div>
        </>
    );
}
