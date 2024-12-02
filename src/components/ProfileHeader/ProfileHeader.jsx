import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/miplanta_logo2.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import "../ProfileHeader/ProfileHeader.scss";

function ProfileHeader() {
  return (
    <header className="profile-header">
      <div className="profile-header__logo">
        <Link to="/api/listings">
          <img src={Logo} alt="App Logo" className="profile-header__logo-img" />
        </Link>
      </div>
      <div className="profile-header__icons">
        {/* this button is not completely funtional for this initial sprint*/}
        <Link to="">
          <img
            src={settingsIcon}
            alt="Settings"
            className="profile-header__icons-icon"
          />
        </Link>
      </div>
    </header>
  );
}

export default ProfileHeader;
