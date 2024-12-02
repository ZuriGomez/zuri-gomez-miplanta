import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../Buttons/MainButton/MainButton";
import "../LogInForm/LoginForm.scss";
import ErrorIcon from "../../assets/icons/error-icon-24px.svg";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function validateEmail(email) {
    const regEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEX.test(email);
  }

  function validateForm() {
    const newErrors = {};
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.password || !formData.password.trim()) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post(
        `${BASE_URL}/api/users/login`,
        formData
      );
      
      localStorage.setItem('jwtToken',response.data.token);

      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

      alert("Login successful!");
      navigate("/api/listings");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors({ form: error.response.data.message });
      } else {
        setErrors({ form: "Error logging in." });
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-form__field">
        <label htmlFor="email" className="login-form__label">
          email:
        </label>
        <input
          className={`login-form__input ${errors.email ? "error" : ""}`}
          type="email"
          id="email"
          name="email"
          placeholder="enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className="login-form__error">
            <img
              src={ErrorIcon}
              alt="error icon"
              className="login-form__error-icon"
            />
            {errors.email}
          </span>
        )}
      </div>
      <div className="login-form__field">
        <label htmlFor="password" className="login-form__label">
          password:
        </label>
        <input
          className={`login-form__input ${errors.password ? "error" : ""}`}
          type="password"
          id="password"
          name="password"
          placeholder="enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="login-form__error">
            <img
              src={ErrorIcon}
              alt="error icon"
              className="login-form__error-icon"
            />
            {errors.password}
          </span>
        )}
      </div>
      {errors.form && (
        <p className="login-form__error login-form__error--form">
          <img
            src={ErrorIcon}
            alt="error icon"
            className="login-form__error-icon"
          />
          {errors.form}
        </p>
      )}
      <div className="login-form__buttons">
        <MainButton text="log in" type="submit" />
        <p className="login-form__buttons-link">
          Don't have an account?
          <Link to="/signup" className="login-form__buttons-link_hyperlink">
            {" "}Sign up here
          </Link>
        </p>
      </div>
    </form>
  );
}
export default LoginForm;
