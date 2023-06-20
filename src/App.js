import React from "react";
import data from "./db/data.json";
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from "./components/Navbar";

import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
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
                  element={<Profile 
                    user={user} 
                    followers={follows.filter(follows => follows.follower_id === user.id)} 
                    following={follows.filter(follows => follows.following_id === user.id)} 
                    posts={posts.filter(post => post.user_id === user.id)}
                  />} 
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
            
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
