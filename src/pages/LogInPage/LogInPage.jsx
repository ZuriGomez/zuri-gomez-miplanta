import React from "react";
import LoginForm from "../../components/LogInForm/LogInForm";
import Logo_login from "../../assets/logos/miplanta_logo2.svg";
import "../LogInPage/LogInPage.scss"

function LogInPage() {
  return (
    <div className="login__page">
      <img
        className="login__page-logo"
        src={Logo_login}
        alt="Logo for sign up page"
      />
    <LoginForm />
  </div>
    )
}

export default LogInPage;
