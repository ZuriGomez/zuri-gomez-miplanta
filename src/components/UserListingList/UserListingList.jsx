import SnakePlant1 from "../../assets/images/snake_plant1.jpg";
import SnakePlant2 from "../../assets/images/snake-plant2.jpg";
import Monstera from "../../assets/images/monstera.jpg";
import GoldenPothos from "../../assets/images/golden-pothos.jpg";
import "../UserListingList/UserListingList.scss";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function UserListingList() {
  
  return (
    <div className="user listings-list">
      <h3 className="user listings-list__list-title">my listings</h3>
      <div className="user listings-list__item">
        <div className="user listings-list__item-wrapper">
          <img
            className="user listings-list__item-wrapper-img"
            src={SnakePlant1}
            alt="Snake Plant"
          />
        </div>
        <div className="user listings-list__item-details">
          <p className="user listings-list__item-details__title">
            Beautiful Snack Plant - pot included
          </p>
          <p className="user listings-list__item-details__price">$40</p>
        </div>
      </div>
      <div className="user listings-list__item">
        <div className="user listings-list__item-wrapper">
          <img
            className="user listings-list__item-wrapper-img"
            src={Monstera}
            alt="Monstera"
          />
        </div>
        <div className="user listings-list__item-details">
          <p className="user listings-list__item-details__title">
            Voluminous Monstera
          </p>
          <p className="user listings-list__item-details__price">$60</p>
        </div>
      </div>
      <div className="user listings-list__item">
        <div className="user listings-list__item-wrapper">
          <img
            className="user listings-list__item-wrapper-img"
            src={SnakePlant2}
            alt="SnakePlant2"
          />
        </div>
        <div className="user listings-list__item-details">
          <p className="user listings-list__item-details__title">
            Healthy Snake Plant
          </p>
          <p className="user listings-list__item-details__price">$20</p>
        </div>
      </div>
      <div className="user listings-list__item">
        <div className="user listings-list__item-wrapper">
          <img
            className="user listings-list__item-wrapper-img"
            src={GoldenPothos}
            alt="Golden Pothos"
          />
        </div>
        <div className="user listings-list__item-details">
          <p className="user listings-list__item-details__title">Golden Pothos</p>
          <p className="user listings-list__item-details__price">$45</p>
        </div>
      </div>
    </div>
  );
}

export default UserListingList;
