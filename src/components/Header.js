// Header.js
import React from "react";
import "./header.css";
import LogoJPG from "../img/logo.jpg"; // Adjust the path based on your file structure
import RightBannerJPG from "../img/right-banner.jpg"; // Adjust the path for the right banner

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LogoJPG} alt="Logo" />
      </div>
      <div className="right-banner">
        <img src={RightBannerJPG} alt="Right Banner" />
      </div>
    </div>
  );
};

export default Header;
