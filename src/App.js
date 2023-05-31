import React from "react";
import data from "./db/data.json";
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from "./components/Navbar";
import Profile from "./pages/Profile";

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
            {users.map(user => (
              <Route 
                key={user.id} 
                path={`/profile/${user.id}`} 
                element={<Profile 
                  user={user} 
                  followers={follows.filter(follows => follows.follower_id === user.id)} 
                  following={follows.filter(follows => follows.following_id === user.id)} 
                  posts={posts.filter(post => post.user_id === user.id)}
                />} 
              />
            ))}
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
