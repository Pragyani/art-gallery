import React, { useState } from "react";
import './comment.css';
import { TopBarImage1, TopBarImage2, TopBarImage4, TopBarImage7 } from "../../utils";
import { BsThreeDotsVertical } from "react-icons/bs";

const CommentBox = ({ postComment }) => {
    console.log(postComment);

    const [newComment, setNewComment] = useState();
    console.log(newComment)

    const handleCommentSubmmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="comment-section">
                <h2>Comments</h2>
                <hr />

                <div className="comments-list">
                    {postComment.map((element) => (
                        <div key={element.id}>
                            {element.reviews.map((review, index) => (
                                <div className="commet-col" key={index}>
                                    <div className="user-coment-selection">
                                        <div className="user-img">
                                            <img src={element.image} alt="user-img" />
                                            <p><strong>{review.user}</strong>: {review.comment}</p>
                                            <BsThreeDotsVertical className="cmnt-edits" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}


                </div>
                <hr className="coment-horizontalLine" />
                <form onSubmit={handleCommentSubmmit}>
                    <textarea placeholder="Add your comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} className="txt-wrp" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>

    )
}
export default CommentBox;