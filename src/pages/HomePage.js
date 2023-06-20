import React from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import noPicture from "../assets/noPicture.png";
import './HomePage.css';

const HomePage = ({ posts, users, likes, comments }) => {

  return (
    <body>
      <div className="welcome-header">
        <h1>Welcome to R-art Js</h1>
        <p>A nice place to post your arts</p>
      </div>
      <div className="posts-card">
            {(posts.map(post => {
                const user = users.find(user => user.id === post.user_id);
                const post_likes = likes.filter(likes => likes.post_id === post.id);
                const post_comments = comments.filter(comments => comments.post_id === post.id);

                return (
                <div className="post-container" key={post.id}>
                    <div className="post-header">
                        <h1>{user.name}</h1>
                        <Image id="avatar" alt="User Profile Picture" src={user.profile_picture !== "" ? require(`../db/${user.profile_picture}`) : noPicture}/>
                    </div>
                    <div className="post-body">
                        <Image id="avatar" alt="Post image" src={require(`../db/${post.image_path}`)}/>
                    </div>
                    <div className="post-actions">
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon icon={faComment} />
                    </div>
                    <div className="post-data">
                        <p>{post_likes.length} likes</p>
                        <p>{post.description}</p>
                        <p>{post_comments.length} comments</p>
                    </div>
                </div>
                )
            }))}
      </div>
    </body>
  );
};

export default HomePage;