import React, { useState } from "react";
import { Image } from "react-bootstrap";
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
                    <Image id="avatar" alt="User Profile Picture" src={require(`../db/${user.profile_picture}`)}/>
                </div>
                <section>
                    <div className="top">
                        <p>{user.name}</p>
                        <button onClick={followClick} className={`picture ${isActive ? "active" : ""}`}>{buttonText}</button> 
                    </div>
                    <div className="status">
                        <span>{posts.length}</span> posts, <a href={`/${user.name}/followers`}><span>{followers.length}</span> followers</a>, <a href={`/${user.name}/following`}><span>{following.length}</span> following</a>
                    </div>
                    <div className="desc">
                        <p>{user.description}</p>
                    </div>
                </section>
            </header>
            <body>
                <div className="gallery">
                    {posts.map(post => (
                        <div className="image">
                            <Image id="avatar" alt="Post image" src={require(`../db/${post.image_path}`)}/>
                        </div>
                    ))}
                </div>
            </body>
        </>
    );
};

export default Profile;