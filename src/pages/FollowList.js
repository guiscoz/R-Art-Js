import React from "react";
import { Image } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import noPicture from "../assets/noPicture.png";
import './FollowList.css';

const FollowList = ({ title, users }) => {
  const location = useLocation();

  const ProfilePage = () => {
    const current_page = location.pathname;
    const title_segmente = `/${title.toLowerCase()}`;
    const previous_page = current_page.replace(title_segmente, '');
    return previous_page;
  };

  return (
    <div className="follow-container">
      <div className="follow-header">
        <Link to={ProfilePage()}><FontAwesomeIcon icon={faLeftLong} /></Link>
        <h1>{title}</h1>
      </div>
      <div className="follow-list">
        {users.map(user => (
          <div className="follow_profile" key={user.id}>
            <div className="picture">
              <Image id="avatar" alt="User Profile Picture" src={user.profile_picture !== "" ? require(`../db/${user.profile_picture}`) : noPicture}/>
            </div>
            <div className="info">
              <Link to={`/${user.name}`}><h2>{user.name}</h2></Link>
              <p>{user.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowList;