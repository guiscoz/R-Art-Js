import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import noPicture from "../assets/noPicture.png";
import "./LikesModal.css";

const LikesModal = ({ likes, users, isModalOpen, handleModal }) => {

    return (
        <div className="modal-background" style={{ display: isModalOpen ? "block" : "none" }}>
            <div className="likes-modal">
                <div className="likes-header">
                    <h1>Likes</h1>
                    <FontAwesomeIcon icon={faXmark} onClick={handleModal} />
                </div>
                <div className="like-list">
                    {likes.map(like => {
                        const user = users.find(users => users.id === like.user_id)
                        return (
                            <div className="liker">
                                <Image
                                    id="avatar"
                                    alt="Profile picture"
                                    src={user.profile_picture !== "" ? require(`../db/${user.profile_picture}`) : noPicture}
                                />
                                <p><Link to={`/${user.name}`}>{user.name}</Link> liked this</p>
                            </div>
                        );
                    }).reverse()}
                </div>
            </div> 
        </div>
    );
};

export default LikesModal;