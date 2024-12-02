import React from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../../assets/logos/miplanta_logo1.svg";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import "../LandingPage/LandingPage.scss";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <img src={MainLogo} alt="MainLogo" className="landing-page__logo" />
      <div className="landing-page__buttons">
        <MainButton text="log in" onClick={() => navigate("/login")} />
        <MainButton text="sign up" onClick={() => navigate("/signup")} />
      </div>
    </div>
  );
}

export default LandingPage;
