import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navigation = () => {
  return (
    <div className="navbar">
      <a href="#" className="active"><FontAwesomeIcon icon={faHouse} /><p>Página inicial</p></a>
      <a href="#"><FontAwesomeIcon icon={faUser} /><p>Perfil</p></a>
      <a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /><p>Pesquisar</p></a>
    </div>
  );
};

export default Navigation;