import React, { useState } from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import UserProfileDashboard from "../../components/UserProfileDashboard/UserProfileDashboard";
import UserListingsList from "../../components/UserListingList/UserListingList";
import "../UserProfilePage/UserProfilePage.scss";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function UserProfilePage() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <>
      <ProfileHeader />
      <UserProfileDashboard
        isLiked={isLiked}
        handleLikeClick={handleLikeClick}
      />
      <UserListingsList />
    </>
  );
}

export default UserProfilePage;
