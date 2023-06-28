import React from "react";
import data from "./db/data.json";
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage";
import FollowList from "./pages/FollowList";

function App() {
  const users = data.users;
  const posts = data.posts;
  const follows = data.follows;
  const likes = data.likes;
  const comments = data.comments;

  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage users={users} posts={posts} likes={likes} comments={comments} />} />
            {users.map(user => (
              <>
                <Route 
                  key={user.id} 
                  path={`/${user.name}`} 
                  element={<>
                    <ProfileHeader 
                      user={user} 
                      followers={follows.filter(follows => follows.follower_id === user.id).length} 
                      following={follows.filter(follows => follows.following_id === user.id).length}
                      posts={posts.filter(post => post.user_id === user.id).length} 
                    />
                    <ProfilePage 
                      posts={posts.filter(post => post.user_id === user.id)}
                    />
                  </>} 
                />
                <Route 
                  path={`/${user.name}/followers`}
                  element={<FollowList 
                    title="Followers" 
                    users={follows
                      .filter(follow => follow.follower_id === user.id)
                      .map(follow => {
                        const follower = users.find(user => user.id === follow.following_id);
                        return follower;
                      })
                    } 
                  />} 
                />
                <Route 
                  path={`/${user.name}/following`}
                  element={<FollowList 
                    title="Following" 
                    users={follows
                      .filter(follow => follow.following_id === user.id)
                      .map(follow => {
                        const following = users.find(user => user.id === follow.follower_id);
                        return following;
                      })
                    } 
                  />} 
                />
              </>
            ))}
            {posts.map(post => (
              <Route
                path={`/post/${post.id}`}
                element={<>
                  <ProfileHeader 
                    user={users.find(user => user.id === post.user_id)} 
                    followers={follows.filter(follows => follows.follower_id === post.user_id).length} 
                    following={follows.filter(follows => follows.following_id === post.user_id).length}
                    posts={posts.filter(posts => posts.user_id === post.user_id).length} 
                  />
                  <PostPage
                    post={post}
                    likes={likes.filter(like =>  like.post_id === post.id)}
                    comments={comments.filter(comment =>  comment.post_id === post.id)}
                    users_comment={comments
                      .filter(comment =>  comment.post_id === post.id)
                      .map(comment => {
                        const user_comment = users.find(user => user.id === comment.user_id)
                        return user_comment;
                      })
                    }
                    users_like={likes
                      .filter(like =>  like.post_id === post.id)
                      .map(like => {
                        const user_like = users.find(user => user.id === like.user_id)
                        return user_like;
                      })
                    }
                  />
                </>}
              />
            ))}
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;