import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../ListingsList/ListingsList.scss";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function ListingsList({ searchQuery = "" }) {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/listings`);
        setListings(response.data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };
    fetchListings();
  }, []);

  const handleItemClick = (listingId) => {
    navigate(`/api/listings/${listingId}`);
  };

  const filteredListings = listings
  .filter((listing) =>
    listing.title?.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .sort((a,b) => b.id - a.id);

  return (
    <div className="listings-list">
      {filteredListings.map((listing) => (
        <div
          className="listings-list__item"
          key={listing.id}
          onClick={() => handleItemClick(listing.id)}
        >
          <div className="listings-list__item-wrapper">
            <img
              src={`${BASE_URL}/${listing.photo}`}
              alt={listing.title}
              className="listings-list__item-wrapper__image"
            />
          </div>
          <div className="listings-list__item-details">
            <h3 className="listings-list__item-details__title">
              {listing.title}
            </h3>
            <p className="listings-list__item-details__price">
              ${listing.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ListingsList;
