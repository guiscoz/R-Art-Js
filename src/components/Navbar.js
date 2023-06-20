import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navigation = () => {
  return (
    <div className="navbar">
      <Link to="/" className="active"><FontAwesomeIcon icon={faHouse} /><p>Página inicial</p></Link>
      <Link to="/purplejack"><FontAwesomeIcon icon={faUser} /><p>Perfil</p></Link >
      <a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /><p>Pesquisar</p></a>
    </div>
  );
};

export default Navigation;