import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/miplanta_logo2.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import "../ProfileHeader/ProfileHeader.scss";

function ProfileHeader() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/api/listings">
          <img src={Logo} alt="App Logo" className="header__logo-img" />
        </Link>
      </div>
      <div className="header__icons">
        <Link to="/settings">
          <img
            src={settingsIcon}
            alt="Settings"
            className="header__icons-icon"
          />
        </Link>
      </div>
    </header>
  );
}

export default ProfileHeader;
