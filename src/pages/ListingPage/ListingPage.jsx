import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../ListingPage/ListingPage.scss";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function ListingPage() {
  const { listingId } = useParams ();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const getListing = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/listings/${listingId}`
        );
        setListing(response.data);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };
    getListing();
  }, [listingId]);

  if (!listing) {
    return <p>Loading...</p>;
  }

  return (
    <div className="listing-page">
      <img
        src={`${BASE_URL}/${listing.photo}`}
        alt={listing.title}
        className="listing-page__photo"
      />
      <h1 className="listing-page__title">{listing.title}</h1>
      <p className="listing-page__description">{listing.description}</p>
      <p className="listing-page__detail">
        <strong>Maintenance:</strong> {listing.maintenance}
      </p>
      <p className="listing-page__detail">
        <strong>Pot Included:</strong> {listing.pot_included}
      </p>
      {listing.pot_description && (
        <p className="listing-page__detail">
          <strong>Pot Description:</strong> {listing.pot_description}
        </p>
      )}
      <p className="listing-page__detail">
        <strong>Height:</strong> {listing.height} cm
      </p>
      <p className="listing-page__detail">
        <strong>Sunlight:</strong> {listing.sunlight}
      </p>
      <p className="listing-page__detail">
        <strong>Temperature:</strong> {listing.temperature}
      </p>
      <p className="listing-page__detail">
        <strong>Watering:</strong> {listing.watering}
      </p>
      <p className="listing-page__detail">
        <strong>Price:</strong> ${listing.price}
      </p>
      <p className="listing-page__detail">
        <strong>Delivery:</strong> {listing.delivery}
      </p>
      <p className="listing-page__detail">
        <strong>Created At:</strong>
        {new Date(listing.created_at).toLocaleString()}
      </p>
    </div>
  );
}

export default ListingPage;
