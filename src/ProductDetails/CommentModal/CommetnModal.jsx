import React, { useState } from "react";
import './comment.css';
import { IoClose } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const CommentBox = ({ postComment, onClose }) => {
    const [newComment, setNewComment] = useState("");
    const [reviews, setReviews] = useState(postComment.reviews || []);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            const commentData = {
                user: 'Your Comment',
                comment: newComment,
            };
            setReviews([...reviews, commentData]);
            setNewComment("");
        }
    };

    const handleDeleteComment = (index) => {
        const updatedReviews = reviews.filter((_, i) => i !== index);
        setReviews(updatedReviews);
    };

    const handleEditComment = () => {

    }

    return (
        <div className="comment-section">
            <h2>Comments for {postComment?.brand || "Post"}</h2>
            <span onClick={onClose} className="closed-icona"><IoClose /></span>
            <hr />

            <div className="comments-list">
                {reviews.map((review, index) => (
                    <div className="commet-col" key={index}>
                        <div className="user-coment-selection">
                            <div className="user-img">
                                <p><strong>{review.user}:</strong> <span className="user-comt">{review.comment}</span></p>
                                <button onClick={() => handleDeleteComment(index)} className="delete-button"><RiDeleteBin2Fill /></button>
                                <button onClick={() => handleEditComment()} className="user-edit-btn"><MdModeEdit /></button>
                            </div>
                        </div>
                        <hr className="coment-horizontalLine" />
                    </div>
                ))}
            </div>

            <form onSubmit={handleCommentSubmit}>
                <textarea
                    placeholder="Add your comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="txt-wrp"
                />
                <button type="submit" className="sent-box"><BsFillSendFill /></button>
            </form>
        </div>
    );
}
export default CommentBox;