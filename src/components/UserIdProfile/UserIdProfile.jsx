import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserAvatar from "../../assets/images/avatar-placeholder.png";
import MainButton from "../Buttons/MainButton/MainButton";
import "../UserIdProfile/UserIdProfile.scss";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function UserIdProfile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleCreateListingClick = () => {
    navigate("/add-listing");
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.get(`${BASE_URL}/api/listings/info`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className="user-id-profile">
      <img
        src={UserAvatar}
        alt="User Avatar"
        className="user-id-profile__avatar"
      />
      <h2 className="user-id-profile__username">{username || "Loading..."}</h2>
      <div className="user-id-profile__button">
        <MainButton
          text="+ create listing"
          onClick={handleCreateListingClick}
        />
      </div>
    </div>
  );
}

export default UserIdProfile;
