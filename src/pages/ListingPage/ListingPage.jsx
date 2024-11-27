import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import sunlight from "../../assets/icons/sunlight.svg";
import watering from "../../assets/icons/watering.svg";
import height from "../../assets/icons/height.svg";
import temperature from "../../assets/icons/temperature.svg";
import "../ListingPage/ListingPage.scss";
import Header from "../../components/Header/Header";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function ListingPage() {
  const { listingId } = useParams();
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
    <>
      <Header />
      <div className="listing-details">
        <h1 className="listing-details__title">{listing.title}</h1>
        <img
          src={`${BASE_URL}/${listing.photo}`}
          alt={listing.title}
          className="listing-details__photo"
        />
        <div className="listing-details__seller">
          <p className="listing-page__seller-name"> {listing.seller_name}</p>
        </div>
        <div className="listing-details__output">
          <label htmlFor="description" className="listing-details__output-label">description:</label>
          <p className="listing-details__output-value">{listing.description}</p>
        </div>
        <div>
          <label htmlFor="maintenance" className="listing-details__output-label">maintenance:</label>
          <p className="listing-details__output-value">{listing.maintenance}</p>
        </div>
        <div>
          <label className="listing-details__output-label">pot included:</label>
          <p className="listing-details__output-value"> {listing.pot_included}</p>
        </div>
        <div>
          {listing.pot_description && (
            <p className="listing-page__detail">
              <strong>Pot Description:</strong> {listing.pot_description}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="delivery" className="listing-details__output-label">delivery:</label>
          <p className="listing-details__output-value">{listing.delivery}</p>
        </div>
        <section className="listing-details-box">
          <div>
            <img src={height} alt="height icon" className="listing-details-box__icon"/>
            <label htmlFor="height" className="listing-details-box__label">height</label>
            <p className="listing-details-box__input"> {listing.height}cm</p>
          </div>
          <div>
            <img src={sunlight} alt="sunlight icon" className="listing-details-box__icon" />
            <label htmlFor="sunlight icon" className="listing-details-box__label">sunlight</label>
            <p className="listing-details-box__input"> {listing.sunlight}</p>
          </div>
          <div>
            <img src={temperature} alt="temperature icon" className="listing-details-box__icon" />
            <label htmlFor="temperature" className="listing-details-box__label">temperature</label>
            <p className="listing-details-box__input"> {listing.temperature}</p>
          </div>
          <div>
            <img src={watering} alt="watering icon" className="listing-details-box__icon"/>
            <label htmlFor="watering" className="listing-details-box__label">watering</label>
            <p className="listing-details-box__input">{listing.watering}</p>
          </div>
        </section>
        <p className="listing-page__detail">
          <strong>Price:</strong> ${listing.price}
        </p>
      </div>
    </>
  );
}

export default ListingPage;
