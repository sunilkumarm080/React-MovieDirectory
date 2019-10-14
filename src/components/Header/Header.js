import React from "react";
import './Header.css';

const Header = (props) => {
  return (
    <header>
     <nav className="navigation navbar navbar-default navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">
        <h1 className="brand-title"> Grook Movies </h1>
      </a>

    </div>
    <a href="#"> <p id="menuText" className="navbar-text navbar-right">Latest Movies</p></a>
           
      <a href="#"><p id="menuText" className="navbar-text navbar-right">Premium Movies</p></a>
             <a href="#"><p id="menuText" className="navbar-text navbar-right">Series</p></a>
    <i id="search" className="navbar-text navbar-right fa fa-search fa-2x"></i>    
  </div>
</nav>
  </header>
  );
};

export default Header;