import React from "react";
import './comment.css';
import { TopBarImage4 } from "../../utils";

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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="comments-list">
                    <div className="commet-col">
                        <div className="user-coment-selection">
                            <div className="user-img">
                                <img src={TopBarImage4} alt="user-img" />
                                <p>Lorem Ipsum has been the industry's ...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comments-list">
                    <div className="commet-col">
                        <div className="user-coment-selection">
                            <div className="user-img">
                                <img src={TopBarImage4} alt="user-img" />
                                <p>Lorem Ipsum has been the industry's ...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comments-list">
                    <div className="commet-col">
                        <div className="user-coment-selection">
                            <div className="user-img">
                                <img src={TopBarImage4} alt="user-img" />
                                <p>Lorem Ipsum has been the industry's ...</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
export default CommentBox;