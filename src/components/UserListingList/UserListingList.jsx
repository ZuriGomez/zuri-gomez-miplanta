import React from "react";
import "../UserProfileDashboard/UserProfileDashboard.scss";

function UserListingsList ({ listings }) {
  return (
    <div className="listings-list">
      {/* {listings.map(listing => (
        <div key={listing.id} className="listings-list__item">
          <img src={listing.photo} alt={listing.title} className="listings-list__item-photo" />
          <div className="listings-list__item-info">
            <h3 className="listings-list__item-title">{listing.title}</h3>
            <p className="listings-list__item-description">{listing.description}</p>
            <p className="listings-list__item-price">${listing.price}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default UserListingsList;
