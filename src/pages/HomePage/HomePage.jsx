import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ListingsList from "../../components/ListingsList/ListingsList";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../HomePage/HomePage.scss";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateListingClick = () => {
    navigate("/add-listing");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <ListingsList searchQuery={searchQuery} />
      <div className="home-page__button">
        <MainButton text="+ create listing" onClick={handleCreateListingClick} />
      </div>
    </>
  );
}

export default HomePage;
