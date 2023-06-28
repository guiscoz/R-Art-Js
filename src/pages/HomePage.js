import React from "react";
import HomePost from "../components/HomePost";
import './HomePage.css';

const HomePage = ({ posts, users, likes, comments }) => {
  return (
    <div className="home-container">
      <div className="welcome-header">
        <h1>Welcome to R-art Js</h1>
        <p>A nice place to post your arts</p>
      </div>
      <div className="posts-container">
        {(posts.map(post => {
            const user = users.find(user => user.id === post.user_id);
            const post_likes = likes.filter(likes => likes.post_id === post.id);
            const post_comments = comments.filter(comments => comments.post_id === post.id);
            const likers = likes
            .filter(like =>  like.post_id === post.id)
            .map(like => {
              const user_like = users.find(user => user.id === like.user_id)
              return user_like;
            });

            return (
              <HomePost 
                post={post}
                user={user}
                likes={post_likes}
                comments={post_comments}
                likers={likers}
                key={post.id}
              />
            )
        })).reverse()}
      </div>
    </div>
  );
};

export default HomePage;