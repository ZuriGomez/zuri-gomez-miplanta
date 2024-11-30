import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserAvatar from "../../assets/images/avatar-placeholder.png";
import MainButton from "../Buttons/MainButton/MainButton";
import "../SellerProfile/SellerProfile.scss";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function SellerProfile() {
  const { sellerId } = useParams();
  const [seller, setSeller] = useState({ user_name: "" });

  useEffect(() => {
    const fetchSellerInfo = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/reviews/seller/${sellerId}`
        );
        setSeller(response.data);
      } catch (error) {
        console.error("Error fetching seller info:", error);
      }
    };

    fetchSellerInfo();
  }, [sellerId]);

  return (
    <div className="seller-profile">
      <img
        src={UserAvatar}
        alt="Seller Avatar"
        className="seller-profile__avatar"
      />
      <h2 className="seller-profile__username">
        {seller.user_name || "Loading..."}
      </h2>

      <div className="seller-profile__button">
        <MainButton text="+ follow" />
        <MainButton text="chat" />
      </div>
    </div>
  );
}

export default SellerProfile;
