import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import SnakePlant1 from "../../assets/images/snake_plant1.jpg";
// import SnakePlant2 from "../../assets/images/snake-plant2.jpg";
// import Monstera from "../../assets/images/monstera.jpg";
// import GoldenPothos from "../../assets/images/golden-pothos.jpg";
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
              src={`${BASE_URL}/public/uploads/${listing.photo}`}
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
//     <div className="user listings-list">
//       <h3 className="user listings-list__list-title">my listings</h3>
//       <Link to="/api/listings/7" className="user listings-list__item">
//         <div className="user listings-list__item-wrapper">
//           <img
//             className="user listings-list__item-wrapper-img"
//             src={SnakePlant1}
//             alt="Snake Plant"
//           />
//         </div>
//         <div className="user listings-list__item-details">
//           <div className="user listings-list__item-details__top">
//             <p className="user listings-list__item-details__top__title">
//               Beautiful Snake Plant - pot included
//             </p>
//             <img className="user listings-list__item-details__top__edit-icon" src={editIcon} alt="Edit Icon" />
//           </div>
//           <p className="user listings-list__item-details__price">$40</p>
//         </div>
//       </Link>
//       <Link to="/api/listings/3" className="user listings-list__item">
//         <div className="user listings-list__item-wrapper">
//           <img
//             className="user listings-list__item-wrapper-img"
//             src={Monstera}
//             alt="Monstera"
//           />
//         </div>
//         <div className="user listings-list__item-details">
//         <div className="user listings-list__item-details__top">
//             <p className="user listings-list__item-details__top__title">
//               Voluminous Monstera
//             </p>
//             <img className="user listings-list__item-details__top__edit-icon" src={editIcon} alt="Edit Icon" />
//           </div>
//           <p className="user listings-list__item-details__price">$60</p>
//         </div>
//       </Link>
//       <Link to="/api/listings/6" className="user listings-list__item">
//         <div className="user listings-list__item-wrapper">
//           <img
//             className="user listings-list__item-wrapper-img"
//             src={SnakePlant2}
//             alt="SnakePlant2"
//           />
//         </div>
//         <div className="user listings-list__item-details">
//         <div className="user listings-list__item-details__top">
//             <p className="user listings-list__item-details__top__title">
//               Healthy Snake Plant
//             </p>
//             <img className="user listings-list__item-details__top__edit-icon" src={editIcon} alt="Edit Icon" />
//           </div>
//           <p className="user listings-list__item-details__price">$20</p>
//         </div>
//       </Link>
//       <Link to="/api/listings/9" className="user listings-list__item">
//         <div className="user listings-list__item-wrapper">
//           <img
//             className="user listings-list__item-wrapper-img"
//             src={GoldenPothos}
//             alt="Golden Pothos"
//           />
//         </div>
//         <div className="user listings-list__item-details">
//         <div className="user listings-list__item-details__top">
//             <p className="user listings-list__item-details__top__title">
//               Golden Pothos
//             </p>
//             <img className="user listings-list__item-details__top__edit-icon" src={editIcon} alt="Edit Icon" />
//           </div>
//           <p className="user listings-list__item-details__price">$45</p>
//         </div>
//       </Link>
//     </div>
//   );
// }

export default UserListingList;
