import React, {useState, useEffect } from "react";
import listingsIcon from "../../assets/icons/listings.svg";
import favoriteIcon from "../../assets/icons/favorites.svg";
import purchasesIcon from "../../assets/icons/purchased.svg";
import "../UserProfileDashboard/UserProfileDashboard.scss";
import UserIdProfile from "../UserIdProfile/UserIdProfile";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function UserProfileDashboard () {
  const [dashboardData, setDashboardData] = useState({
    listings: 0,
    favorites: 0, // Update with backend logic when needed
    purchased: 0, // Update with backend logic when needed
  });
  
  useEffect(() => {
    const fetchUserListings = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.get(`${BASE_URL}/api/listings/user-listings`, 
          {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const listingsCount = response.data.length;
        
        setDashboardData((prevData) => ({
          ...prevData,
          listings: listingsCount,
        }));
      } catch (error) {
        console.error("Error fetching user listings:", error);
      }
    };

    fetchUserListings();
  }, []);


  return (
    <div className="user-profile">
      <UserIdProfile/>
      <div className="user-profile__dashboard">
        <div className="user-profile__dashboard-item">
          <img className="user-profile__dashboard-item-icon" src={listingsIcon} alt="Listing Icon" />
          <p className="user-profile__dashboard-item-label">listings</p>
          <p className="user-profile__dashboard-item-count">{dashboardData.listings}</p>
        </div>
        <div className="user-profile__dashboard-item">
          <img className="user-profile__dashboard-item-icon" src={favoriteIcon} alt="Favorites" />
          <p className="user-profile__dashboard-item-label">favorites</p>
          <p className="user-profile__dashboard-item-count">{dashboardData.favorites}</p>
        </div>
        <div className="user-profile__dashboard-item">
          <img className="user-profile__dashboard-item-icon" src={purchasesIcon} alt="Purchases" />
          <p className="user-profile__dashboard-item-label">purchased</p>
          <p className="user-profile__dashboard-item-count">{dashboardData.purchased}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDashboard;
