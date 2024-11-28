import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SellerAvatar from "../../assets/images/avatar-placeholder.png";
import sunlight from "../../assets/icons/sunlight.svg";
import watering from "../../assets/icons/watering.svg";
import height from "../../assets/icons/height.svg";
import temperature from "../../assets/icons/temperature.svg";
import likeInactive from "../../assets/icons/like.svg";
import likeActive from "../../assets/icons/like_active.svg";
import "../ListingPage/ListingPage.scss";
import Header from "../../components/Header/Header";
import AddToCart from "../../components/Buttons/AddToCart/AddToCart";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function ListingPage() {
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [cartCount, setCartCount] = useState(0);

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

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

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
          <img
            className="listing-details__seller-avatar"
            src={SellerAvatar}
            alt="Seller Avatar"
          />
          <p className="listing-details__seller-name"> {listing.seller_name}</p>
          <p className="listing-details__seller-count">{listing.review_count} reviews</p>
        </div>
        <div className="listing-details__output">
          <label
            htmlFor="description"
            className="listing-details__output-label"
          >
            description:
          </label>
          <p className="listing-details__output-value1">
            {listing.description}
          </p>
        </div>
        <div className="listing-details__output">
          <label
            htmlFor="maintenance"
            className="listing-details__output-label"
          >
            maintenance:
          </label>
          <p className="listing-details__output-value">{listing.maintenance}</p>
        </div>
        <div className="listing-details__output">
          <label className="listing-details__output-label">pot included:</label>
          <p className="listing-details__output-value">
            {listing.pot_included}
          </p>
        </div>
        {listing.pot_included === "yes" && (
          <div className="listing-details__output">
            <label
              htmlFor="pot_description"
              className="listing-details__output-label"
            >
              pot description:
            </label>
            <p className="listing-details__output-value2">
              {listing.pot_description}
            </p>
          </div>
        )}
        <div className="listing-details__output">
          <label htmlFor="delivery" className="listing-details__output-label">
            delivery:
          </label>
          <p className="listing-details__output-value">{listing.delivery}</p>
        </div>
        <section className="listing-details-box">
          <div className="listing-details-box__item">
            <img
              src={height}
              alt="height icon"
              className="listing-details-box__item-icon"
            />
            <label htmlFor="height" className="listing-details-box__item-label">
              height
            </label>
            <p className="listing-details-box__item-input">
              {" "}
              {listing.height}cm
            </p>
          </div>
          <div className="listing-details-box__item">
            <img
              src={sunlight}
              alt="sunlight icon"
              className="listing-details-box__item-icon"
            />
            <label
              htmlFor="sunlight icon"
              className="listing-details-box__item-label"
            >
              sunlight
            </label>
            <p className="listing-details-box__item-input">
              {listing.sunlight}
            </p>
          </div>
          <div className="listing-details-box__item">
            <img
              src={temperature}
              alt="temperature icon"
              className="listing-details-box__item-icon"
            />
            <label
              htmlFor="temperature"
              className="listing-details-box__item-label"
            >
              temperature
            </label>
            <p className="listing-details-box__item-input">
              {listing.temperature}
            </p>
          </div>
          <div className="listing-details-box__item">
            <img
              src={watering}
              alt="watering icon"
              className="listing-details-box__item-icon"
            />
            <label
              htmlFor="watering"
              className="listing-details-box__item-label"
            >
              watering
            </label>
            <p className="listing-details-box__item-input">
              {listing.watering}
            </p>
          </div>
        </section>
        <section className="listing__bar">
          <img
            src={isLiked ? likeActive : likeInactive}
            alt="Like Icon"
            className="listing__bar-icon"
            onClick={handleLikeClick}
          />
          <div className="listing__bar-moreinfo">
            <p className="listing__bar-moreinfo__price"> ${listing.price} </p>
            <AddToCart onAddToCart={handleAddToCart} />
          </div>
        </section>
      </div>
    </>
  );
}

export default ListingPage;
