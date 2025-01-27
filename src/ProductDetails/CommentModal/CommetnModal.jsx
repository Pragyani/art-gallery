import React, { useState } from "react";
import './comment.css';
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { TopBarImage5 } from "../../utils";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaArrowUp } from "react-icons/fa";


const CommentBox = ({ postComment, onClose }) => {
    const [newComment, setNewComment] = useState("");
    const [editingComment, setEditingComment] = useState("");
    const [reviews, setReviews] = useState(postComment.reviews || []);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            const commentData = {
                user: 'You',
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

    const handleEditComment = (index) => {
        setEditingComment(reviews[index].comment);
        setEditingIndex(index);
    };

    const handleUpdateComment = () => {
        if (editingComment.trim()) {
            const updatedReviews = reviews.map((review, index) =>
                index === editingIndex ? { ...review, comment: editingComment } : review
            );
            setReviews(updatedReviews);
            setEditingIndex(null);
            setEditingComment('');
        }
    };

    return (
        <div className="comment-section">
            <div className="comment-section-wrapper">
                <div className="comment-section-header">
                    <h2>Comments for {postComment?.brand || "Post"}</h2>
                    <span onClick={onClose} className="closed-icona"><IoClose /></span>
                </div>
                <hr className="coment-line"/>
                <div className="comments-list">
                    {reviews.map((review, index) => (
                        <div className="commet-col" key={index}>
                            <div className="user-coment-selection">
                                <div className="user-cmnt-fun">
                                    <div className={`user-wrapper user-img ${editingIndex === index ? 'has-no-action' : ''}`}>
                                        <div className="modal-image">
                                            <img src={TopBarImage5} alt="" />
                                        </div>
                                        {editingIndex === index ? (
                                            <div className="react-quilling-block">
                                                <ReactQuill
                                                    value={editingComment}
                                                    onChange={setEditingComment}
                                                    placeholder="Edit your comment"
                                                    className="quill-editor"
                                                    modules={{
                                                        toolbar: [
                                                            [{ 'header': '1' }],
                                                            [{ 'list': 'ordered' }],
                                                            ['bold', 'italic', 'underline'],
                                                            ['link'],
                                                            ['image']
                                                        ]
                                                    }} />
                                                <button onClick={handleUpdateComment} className="save-btn"><FaArrowUp /></button>
                                            </div>) : (<div className="display-flex-column">
                                                <div dangerouslySetInnerHTML={{ __html: review.comment }} className="p-sdelf" />
                                                <div className="user-commented"><p>Commented by {review.user}</p></div>
                                            </div>)}

                                        {editingIndex !== index && (
                                            <div className="display-flex">
                                                <button onClick={() => handleDeleteComment(index)} className="delete-button"><RiDeleteBin2Fill /></button>
                                                <button onClick={() => handleEditComment(index)} className="user-edit-btn"><MdModeEdit /></button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>))}
                </div>
                <form onSubmit={handleCommentSubmit}>
                    <div className="position-relative">
                        <ReactQuill
                            placeholder="Add your comment..."
                            value={newComment}
                            onChange={setNewComment}
                            className="txt-wrp"
                            modules={{
                                toolbar: [
                                    [{ 'header': '1' }],
                                    [{ 'list': 'ordered' }],
                                    ['bold', 'italic', 'underline'],
                                    ['link'],
                                    ['image']
                                ]
                            }} />
                        <button type="submit" className="sent-box"><FaCheck /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default CommentBox;