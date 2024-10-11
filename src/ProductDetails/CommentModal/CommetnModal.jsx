import React from "react";
import './comment.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
};

export default function BasicCommentMODAL({ commentOPen, CommentClose ,postData}) {
console.log('mango', postData)
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

                        <div className="commt-scl">
                            <div className="cmmt-contentmodal">
                                <div className="user-commtns">

                                </div>
                            </div>
                        </div>
                    </Box>

                </Modal>
            </div>
        </>
    );
}
