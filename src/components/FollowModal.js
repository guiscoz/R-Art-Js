import React from "react";
import { Image } from "react-bootstrap";
import noPicture from "../assets/noPicture.png";
import './FollowModal.css';

const FollowModal = ({ title, users }) => {
  return (
    <div className="modal">
        <h1>{title}</h1>
        {users.map(user => (
            <div className="user" key={user.id}>
                <Image id="avatar" alt="User Profile Picture" src={user.profile_picture !== "" ? require(`../db/${user.profile_picture}`) : noPicture}/>
                <h2>{user.name}</h2>
            </div>
        ))}
    </div>
  );
};

export default FollowModal;