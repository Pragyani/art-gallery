import React from "react";
import './comment.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 790,
    bgcolor: 'background.paper',
    boxShadow: 24,
};

export default function BasicCommentMODAL({ commentOPen, CommentClose }) {

    return (
        <>
            <div>
                <Modal
                    open={commentOPen}
                    onClose={CommentClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description " className="comment-modalclass">


                    <Box sx={style} className="comment-boxModal">
                        <h1>Comment Section <hr className="comment-sec-hr" /></h1>

                    </Box>

                </Modal>
            </div>
        </>
    );
}
