import React from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import UserProfileDashboard from "../../components/UserProfileDashboard/UserProfileDashboard";
import UserListingsList from "../../components/UserListingList/UserListingList";
// import { useEffect, useState } from "react";
// import axios from "axios";
import "../UserProfilePage/UserProfilePage.scss";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
// const userId = 1;
// const favoritesCount = 5;
// const purchasedCount = 3;
// const hardcodedUser = { username: "Demo User"};

function UserProfilePage() {
  
  return (
    <div>
      <ProfileHeader />
      <UserProfileDashboard
        // username={hardcodedUser.username}
        // listingsCount={listings.length}
        // favoritesCount={favoritesCount}
        // purchasedCount={purchasedCount}
      />
      <UserListingsList 
      // listings={listings}
      />
    </div>
  );
}

export default UserProfilePage;
