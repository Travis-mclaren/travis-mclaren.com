import React from "react";
import './Header.scss';
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <div className="title">
          <div className="name">
            Travis McLaren
          </div>
          <div className="period">
            .
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  )
}

export default Header;