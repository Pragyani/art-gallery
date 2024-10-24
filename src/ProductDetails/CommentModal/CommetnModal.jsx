import React, { useState } from "react";
import './comment.css';
import { IoClose } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";

const CommentBox = ({ postComment, onClose }) => {
    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            const commentData = {
                user: 'Your Comment',
                comment: newComment,
            };
            postComment.reviews.push(commentData);
            setNewComment("");
        }
    };

    const reviews = postComment?.reviews || [];

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
                                <p><strong>{review.user}</strong> : {review.comment}</p>
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
};
export default CommentBox;