import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import HomePage from "./pages/HomePage/HomePage";
import ListingPage from "./pages/ListingPage/ListingPage";
import AddNewListing from "./pages/AddNewListing/AddNewListing";
import MyListingPage from "./pages/MyListingPage/MyListingPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import SellerProfilePage from "./pages/SellerProfilePage/SellerProfilePage";
import { useState } from "react";
import "./App.scss";

function App() {

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Sign Up Page Route */}
        <Route path="/signup" element={<SignUpPage />} />

        {/* Log in Page Route */}
        <Route path="/login" element={<LogInPage />} />

        {/* Home Page Route */}
        <Route path="/api/listings" element={<HomePage />} />

        {/* Single Listing details Page Route */}
        <Route path="/api/listings/:listingId" element={<ListingPage isLiked={isLiked} handleLikeClick={handleLikeClick} />} />

        {/* Add New Listing Page Route  */}
        <Route path="/add-listing" element={<AddNewListing />} />

        {/* User listing details page */}
        <Route path="/my-listing" element={<MyListingPage />} />

        {/* User Profile Page */}
        <Route path="/profile/" element={<UserProfilePage />} />

        {/* Seller Profile Page */}
        <Route path="/seller/:sellerId" element={<SellerProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
