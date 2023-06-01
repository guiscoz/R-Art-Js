import React from "react";
import { Image } from "react-bootstrap";
import "./Profile.css";

const Profile = ({ user, followers, following, posts }) => {
    return (
        <>
            <header>
                <div className="picture"><Image id="avatar" alt="User Profile Picture" src={require(`../db/${user.profile_picture}`)}/></div>
                <section>
                    <div className="top">{user.name}</div>
                    <div className="desc">{user.description}</div>
                    <div className="status">{posts.length} posts, {followers.length} followers, following {following.length}</div>
                </section>
            </header>
        </>
    );
};

export default Profile;