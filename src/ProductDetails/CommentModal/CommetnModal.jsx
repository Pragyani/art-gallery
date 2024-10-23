import React from "react";
import './comment.css';
import { TopBarImage1, TopBarImage2, TopBarImage4, TopBarImage7 } from "../../utils";
import { BsThreeDotsVertical } from "react-icons/bs";

const CommentBox = () => {

    return (
        <>
            <div className="comment-section">
                <h2>Comments</h2>
                <hr />

                <div className="comments-list">
                    <div className="commet-col">
                        <div className="user-coment-selection">
                            <div className="user-img">
                                <img src={TopBarImage4} alt="user-img" />
                                <p>Lorem Ipsum has been the industry's ...</p>
                                <BsThreeDotsVertical className="cmnt-edits" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="coment-horizontalLine" />
                <div className="comments-list">
                    <div className="commet-col">
                        <div className="user-coment-selection">
                            <div className="user-img">
                                <img src={TopBarImage2} alt="user-img" />
                                <p>Lorem Ipsum has been the industry's ...</p>
                                <BsThreeDotsVertical className="cmnt-edits" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="coment-horizontalLine" />
                <div className="comments-list">
                    <div className="commet-col">
                        <div className="user-coment-selection">
                            <div className="user-img">
                                <img src={TopBarImage7} alt="user-img" />
                                <p>Lorem Ipsum has been the industry's ...</p>
                                <BsThreeDotsVertical className="cmnt-edits" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="coment-horizontalLine" />
                <div className="comments-list">
                    <div className="commet-col">
                        <div className="user-coment-selection">
                            <div className="user-img">
                                <img src={TopBarImage1} alt="user-img" />
                                <p>Lorem Ipsum has been the industry's ...</p>
                                <BsThreeDotsVertical className="cmnt-edits" />
                            </div>
                        </div>
                    </div>
                </div>
                  <hr className="coment-horizontalLine" />

                <form>
                    <textarea placeholder="Add your comment" className="txt-wrp"/>
                </form>
            </div>
        </>

    )
}
export default CommentBox;