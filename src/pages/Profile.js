import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import noPicture from "../assets/noPicture.png";
import "./Profile.css";

const Profile = ({ user, followers, following, posts }) => {
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
        <>
            <header>
                <div className="picture">
                    <Image id="avatar" alt="User Profile Picture" src={user.profile_picture !== "" ? require(`../db/${user.profile_picture}`) : noPicture}/>
                </div>
                <section>
                    <div className="top">
                        <p>{user.name}</p>
                        <button onClick={followClick} className={`picture ${isActive ? "active" : ""}`}>{buttonText}</button> 
                    </div>
                    <div className="status">
                        <span>
                            {posts.length}
                        </span> posts, <Link to={{pathname: `/${user.name}/followers`}}>
                            <span>{followers.length}</span> followers
                        </Link>, <Link to={{pathname: `/${user.name}/following`}}>
                            <span>{following.length}</span> following
                        </Link>
                    </div>
                    <div className="desc">
                        <p>{user.description}</p>
                    </div>
                </section>
            </header>
            <body>
                <div className="gallery">
                    {posts.length === 0 ? (
                        <p>No images available.</p>
                    ) : (posts.map(post => (
                        <div className="image" key={post.id}>
                            <Image id="avatar" alt="Post image" src={require(`../db/${post.image_path}`)}/>
                        </div>
                        ))
                    )}
                </div>
            </body>
        </>
    );
};

export default Profile;