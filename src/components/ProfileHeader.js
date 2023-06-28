import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import noPicture from "../assets/noPicture.png";
import './ProfileHeader.css';

const ProfileHeader = ({ user, followers, following, posts }) => {
    const [buttonText, setButtonText] = useState("Follow");
    const [isActive, setIsActive] = useState(false);

    const followClick = () => {
        setIsActive(!isActive);

        if (buttonText === "Follow") {
            setButtonText("Unfollow");
        } else {
            setButtonText("Follow");
        }
    };

    return (
        <header>
            <div className="picture">
                <Image id="avatar" alt="User Profile Picture" src={user.profile_picture !== "" ? require(`../db/${user.profile_picture}`) : noPicture}/>
            </div>
            <section>
                <div className="top">
                    <Link to={`/${user.name}`}>{user.name}</Link>
                    <button onClick={followClick} className={`picture ${isActive ? "active" : ""}`}>{buttonText}</button> 
                </div>
                <div className="status">
                    {posts} posts, <Link to={{pathname: `/${user.name}/followers`}}>
                        <span>{followers}</span> followers
                    </Link>, <Link to={{pathname: `/${user.name}/following`}}>
                        <span>{following}</span> following
                    </Link>
                </div>
                <div className="desc">
                    <p>{user.description}</p>
                </div>
            </section>
        </header>
    );
}

export default ProfileHeader;