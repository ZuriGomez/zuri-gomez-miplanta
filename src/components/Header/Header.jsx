import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/miplanta_logo2.svg";
import cartIcon from "../../assets/icons/cart.svg";
import avatar from "../../assets/images/avatar-placeholder.png";
import "../Header/Header.scss";

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/api/listings">
          <img src={Logo} alt="App Logo" className="header__logo-img" />
        </Link>
      </div>
      <div className="header__icons">
        <Link to="#">
          <div className="header__icons-cart">
            <img
              src={cartIcon}
              alt="Cart"
              className="header__icons-cart_icon"
            />
            {cartCount > 0 && (
              <span className="header__icons-cart_count">{cartCount}</span>
            )}
          </div>
        </Link>
        <Link to="/profile">
          <img src={avatar} alt="Profile" className="header__icons-avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
