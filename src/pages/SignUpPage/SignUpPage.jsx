import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo_signup from "../../assets/logos/miplanta_logo2.svg";
import "../SignUpPage/SignUpPage.scss"

function SignUpPage() {
  return (
    <div className="signup__page">
      <img
        className="signup__page-logo"
        src={Logo_signup}
        alt="Logo for sign up page"
      />
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
