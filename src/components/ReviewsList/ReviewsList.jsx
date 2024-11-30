import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/reviews`);
        console.log(response.data);
        setReviews(response.data);
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
  
    fetchReviews();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (reviews.length === 0) {
    return <div>No reviews available.</div>;
  }

  return (
    <div className="reviews-list">
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
