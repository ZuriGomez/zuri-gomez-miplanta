import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function ReviewsList() {

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { sellerId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/reviews/${sellerId}`);
        console.log(response.data);

        if (Array.isArray(response.data)) {
            setReviews(response.data);
          } else {
            throw new Error("Invalid data format: Reviews data should be an array.");
          }
        } catch (err) {
          setError(err.message);
          console.error("Error fetching reviews:", err);
        }
      };
    if (sellerId){
        fetchReviews();
    }
  }, [sellerId]);

  if (error) {
    return <div>No reviews available for this seller.</div>;
  }

  if (reviews.length === 0) {
    return <div>No reviews available for this seller.</div>;
  }

  return (
    <div className="reviews-list">
        <h3>{reviews.length} reviews</h3>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <h3>{review.reviewer_name}</h3>
            <p>{review.review_text}</p>
            <span>{new Date(review.created_at).toLocaleDateString()}</span>
          </div>
        ))}
    </div>
  );
};

export default ReviewsList;
