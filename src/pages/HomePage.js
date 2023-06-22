import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import noPicture from "../assets/noPicture.png";
import HomePost from "../components/HomePost";
import './HomePage.css';

const HomePage = ({ posts, users, likes, comments }) => {

  return (
    <div className="home-container">
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
                  <HomePost 
                    post={post}
                    user={user}
                    likes={post_likes}
                    comments={post_comments}
                    key={post.id}
                  />
                )
            }))}
      </div>
    </div>
  );
};

export default HomePage;