import React from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./ProfilePage.css";

const ProfilePage = ({ posts }) => {
    return (
        <>
            <body>
                <div className="gallery">
                    {posts.length === 0 ? (
                        <p>No images available.</p>
                    ) : (posts.map(post => (
                        <div className="image" key={post.id}>
                            <Link to={`/post/${post.id}`}>
                                <Image id="avatar" alt="Post image" src={require(`../db/${post.image_path}`)}/> 
                            </Link>
                        </div>
                        ))
                    ).reverse()}
                </div>
            </body>
        </>
    );
};

export default ProfilePage;