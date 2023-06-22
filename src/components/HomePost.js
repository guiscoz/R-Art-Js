import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import noPicture from "../assets/noPicture.png";
import './HomePost.css';

const HomePost = ({ post, user, likes, comments }) => {
  const [buttonText, setButtonText] = useState("Follow");
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const followClick = () => {
    setIsFollowing(!isFollowing);

    if (buttonText === "Follow") {
      setButtonText("Unfollow");
    } else {
      setButtonText("Follow");
    }
  };

  const likeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-container" key={post.id}>
      <div className="post-header">
        <div className="profile-links">
          <Link to={`/${user.name}`}>
            <Image
              id="avatar"
              alt="User Profile Picture"
              src={
                user.profile_picture !== ""
                  ? require(`../db/${user.profile_picture}`)
                  : noPicture
              }
            />
          </Link>
          <Link to={`/${user.name}`}>
            <p>{user.name}</p>
          </Link>
        </div>
        <button
          onClick={followClick}
          className={`${isFollowing ? "active" : ""}`}
        >
          {buttonText}
        </button>
      </div>
      <div className="post-body">
        <Image
          id="avatar"
          alt="Post image"
          src={require(`../db/${post.image_path}`)}
        />
      </div>
      <div className="post-bottom">
        <div className="post-actions">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={likeClick}
            className={`${isLiked ? "active" : ""}`}
          />
          <FontAwesomeIcon icon={faComment} />
        </div>
        <div className="post-data">
          <p id="quantity">{likes.length} likes</p>
          <p id="description">{post.description}</p>
          <p id="quantity">{comments.length} comments</p>
        </div>
      </div>
    </div>
  );
};

export default HomePost;