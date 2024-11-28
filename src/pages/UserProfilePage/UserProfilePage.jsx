import React from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import UserProfileDashboard from "../../components/UserProfileDashboard/UserProfileDashboard";
import UserListingsList from "../../components/UserListingList/UserListingList";
import "../UserProfilePage/UserProfilePage.scss";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function UserProfilePage() {
  
  return (
    <div>
      <ProfileHeader />
      <UserProfileDashboard/>
      <UserListingsList />
    </div>
  );
}

export default UserProfilePage;
