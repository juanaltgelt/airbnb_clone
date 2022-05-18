import React from "react";
import worldIcon from "/world-icon.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={worldIcon} className="header--icon" alt="World logo"/>
      <h3>my travel journal.</h3>
    </header>
  );
}

export default Header;
