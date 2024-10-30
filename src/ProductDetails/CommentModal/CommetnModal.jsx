import React, { useState } from "react";
import './comment.css';
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { TopBarImage5 } from "../../utils";

const CommentBox = ({ postComment, onClose }) => {
    const [newComment, setNewComment] = useState("");
    const [reviews, setReviews] = useState(postComment.reviews || []);
    const [editngIndex, setEditingIndex] = useState(null);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            if (editngIndex !== null) {
                const updatedReviews = reviews.map((review, index) => index === editngIndex ? { ...review, comment: newComment } : review)
                setReviews(updatedReviews)
                setEditingIndex(null);
                setNewComment('');
            } else {
                const commentData = {
                    user: 'You',
                    comment: newComment,
                };
                setReviews([...reviews, commentData]);
                setNewComment("");
            }
        }
    };

    const handleDeleteComment = (index) => {
        const updatedReviews = reviews.filter((_, i) => i !== index);
        setReviews(updatedReviews);
    };

    const handleEditComment = (index) => {
        setNewComment(reviews[index].comment);
        setEditingIndex(index);
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
                                <img src={TopBarImage5} alt="" />
                                <p><strong>{review.user}</strong></p>
                                <button onClick={() => handleDeleteComment(index)} className="delete-button"><RiDeleteBin2Fill /></button>
                                <button onClick={() => handleEditComment(index)} className="user-edit-btn"><MdModeEdit /></button>
                            </div>
                            <div className="user-cmnt-fun">
                                <p> <span className="user-comt">{review.comment}</span></p>
                            </div>

                        </div>
                        <hr className="coment-horizontalLine" />
                    </div>
                ))}
            </div>
            <hr className="coment-horizontaline" />

            <form onSubmit={handleCommentSubmit}>
                <textarea
                    placeholder="Add your comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="txt-wrp"
                />
                <button type="submit" className="sent-box"><FaCheck /></button>
            </form>
        </div>
    );
}
export default CommentBox;