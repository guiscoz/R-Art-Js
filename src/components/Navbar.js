import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navigation = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const startSearch = () => {
    const text = encodeURIComponent(document.getElementById("search_text").value);
    window.location.assign(`http://localhost:3000/search/${text}`);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" id="first-item"><FontAwesomeIcon icon={faHouse} /><p>Home page</p></Link>
        <Link to="/purplejack"><FontAwesomeIcon icon={faUser} /><p>Profile</p></Link >
        <div className="nav-search" onClick={toggleSearchBar}><FontAwesomeIcon icon={faMagnifyingGlass} /><p>Search</p></div>
      </div>
      <div className="search-bar" style={{ display: showSearchBar ? "block" : "none" }}>
        <input type="text" id="search_text"></input>
        <button onClick={startSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
    </>
  );
};

export default Navigation;