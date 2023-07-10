import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import noPicture from "../assets/noPicture.png";
import LikesModal from "../components/LikesModal";
import "./PostPage.css";

const PostPage = ({ post, comments, likes, users_comment, users_like }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className="post-container">
                <div className="post-content">
                    <div className="post-image">
                        <Image
                            id="post"
                            alt="Post image"
                            src={require(`../db/${post.image_path}`)}
                        />
                    </div>
                    <p>{post.description}</p>
                </div>
                <div className="post-feedback">
                    <p>
                        {likes.length > 0 ? (
                            <span onClick={handleModal}>{likes.length} likes</span>
                        ) : (
                            `${likes.length} likes`
                        )}
                        , {comments.length} comments
                    </p>
                    <div className="post-comments">
                        {comments.map(comment => {
                            const user = users_comment.find(users_comment => users_comment.id === comment.user_id)
                            return (
                                <div className="comment">
                                    <div className="comment-header">
                                        <Image
                                            id="avatar"
                                            alt="Profile picture"
                                            src={user.profile_picture !== "" ? require(`../db/${user.profile_picture}`) : noPicture}
                                        />
                                        <Link to={`/${user.name}`}>{user.name}</Link>
                                    </div>
                                    <div className="comment-content">
                                        <p>{comment.content}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <LikesModal 
                likes={likes}
                users={users_like}
                isModalOpen={isModalOpen}
                handleModal={handleModal}
            />
        </>
    );
};

export default PostPage;