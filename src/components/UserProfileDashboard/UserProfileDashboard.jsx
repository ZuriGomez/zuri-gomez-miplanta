import React from "react";
import UserAvatar from "../../assets/images/avatar-placeholder.png";
import MainButton from "../Buttons/MainButton/MainButton";
import listingsIcon from "../../assets/icons/listings.svg";
import favoriteIcon from "../../assets/icons/favorites.svg";
import purchasesIcon from "../../assets/icons/purchased.svg";
import "../UserProfileDashboard/UserProfileDashboard.scss";
import { useNavigate } from "react-router-dom";

function UserProfileDashboard () {
  const navigate = useNavigate();
  
  const handleCreateListingClick = () => {
    navigate("/add-listing");
  };

  return (
    <div className="user-profile">
      <img src={UserAvatar} alt="User Avatar" className="user-profile__avatar" />
      <h2 className="user-profile__username">Lily Goodwill</h2>
      <div className="user-profile__button">
        <MainButton text="+ create listing" onClick={handleCreateListingClick} />
      </div>
      <div className="user-profile__dashboard">
        <div className="user-profile__dashboard-item">
          <img className="user-profile__dashboard-item-icon" src={listingsIcon} alt="Listing Icon" />
          <p className="user-profile__dashboard-item-label">listings</p>
          <p className="user-profile__dashboard-item-count">5</p>
        </div>
        <div className="user-profile__dashboard-item">
          <img className="user-profile__dashboard-item-icon" src={favoriteIcon} alt="Favorites" />
          <p className="user-profile__dashboard-item-label">favorites</p>
          <p className="user-profile__dashboard-item-count">3</p>
        </div>
        <div className="user-profile__dashboard-item">
          <img className="user-profile__dashboard-item-icon" src={purchasesIcon} alt="Purchases" />
          <p className="user-profile__dashboard-item-label">purchased</p>
          <p className="user-profile__dashboard-item-count">2</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDashboard;
