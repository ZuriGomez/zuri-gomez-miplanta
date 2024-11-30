import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import editIcon from "../../assets/icons/edit.svg";
import "../UserListingList/UserListingList.scss";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function UserListingList() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        console.log(token);
        const response = await axios.get(
          `${BASE_URL}/api/listings/user-listings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setListings(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user listings:", error);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return <p>Loading listings...</p>;
  }

  return (
    <div className="user listings-list">
      <h3 className="user listings-list__list-title">My Listings</h3>
      {listings.map((listing) => (
        <Link
          to={`/api/listings/${listing.id}`}
          key={listing.id}
          className="user listings-list__item"
        >
          <div className="user listings-list__item-wrapper">
            <img
              className="user listings-list__item-wrapper-img"
              src={`${BASE_URL}/${listing.photo}`}
              alt={listing.title}
            />
          </div>
          <div className="user listings-list__item-details">
            <div className="user listings-list__item-details__top">
              <p className="user listings-list__item-details__top__title">
                {listing.title}
              </p>
              <img
                className="user listings-list__item-details__top__edit-icon"
                src={editIcon}
                alt="Edit Icon"
              />
            </div>
            <p className="user listings-list__item-details__price">
              ${listing.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default UserListingList;
