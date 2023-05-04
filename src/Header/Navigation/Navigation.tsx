import React from "react";
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="item">
        Home
      </div>
      <div className="item">
        About
      </div>
      <div className="item">
        Projects
      </div>
      <div className="item">
        Blog
      </div>
    </div>
  )
}

export default Navigation;