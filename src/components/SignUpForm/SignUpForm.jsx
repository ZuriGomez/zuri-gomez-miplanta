import React, { useState } from "react";
import axios from "axios";
import MainButton from "../Buttons/MainButton/MainButton";
import "../SignUpForm/SignUpForm.scss";
import ErrorIcon from "../../assets/icons/error-icon-24px.svg"
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

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

    if (!formData.user_name || !formData.user_name.trim()) {
      newErrors.user_name = "Username is required.";
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.password || !formData.password.trim()) {
      newErrors.password = "Password is required.";
    }
    if (
      !formData.confirm_password ||
      formData.confirm_password.trim().length === 0
    ) {
      newErrors.confirm_password = "Confirm password is required.";
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match.";
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
      await axios.post(`${BASE_URL}/api/users/signup`, formData);
      alert("User created successfully!");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors({ form: error.response.data.message });
      } else {
        setErrors({ form: "Error creating user." });
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <div className="signup-form__field">
        <label htmlFor="user_name" className="signup-form__label">
          username:
        </label>
        <input
            className={`signup-form__input ${
                errors.user_name ? "error" : ""
            }`}
            type="text"
            id="user_name"
            name="user_name"
            placeholder="enter your username"
            value={formData.user_name}
            onChange={handleChange}
        />
        {errors.user_name && (
            <span className="signup-form__error">
            <img src={ErrorIcon} alt="error icon" className="signup-form__error-icon" />
            {errors.user_name}
            </span>
        )}
      </div>
      <div className="signup-form__field">
        <label htmlFor="email" className="signup-form__label">
          email:
        </label>
        <input
            className={`signup-form__input ${
                errors.email ? "error" : ""
            }`}
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            value={formData.email}
            onChange={handleChange}
        />
        {errors.email && (
            <span className="signup-form__error">
            <img src={ErrorIcon} alt="error icon" className="signup-form__error-icon" />
            {errors.email}
            </span>
        )}
      </div>
      <div className="signup-form__field">
        <label htmlFor="password" className="signup-form__label">
          password:
        </label>
        <input
            className={`signup-form__input ${
                errors.password ? "error" : ""
            }`}
            type="password"
            id="password"
            name="password"
            placeholder="enter your password"
            value={formData.password}
            onChange={handleChange}
        />
        {errors.password && (
            <span className="signup-form__error">
            <img src={ErrorIcon} alt="error icon" className="signup-form__error-icon" />
            {errors.password}
            </span>
        )}
      </div>
      <div className="signup-form__field">
        <label htmlFor="confirm_password" className="signup-form__label">
          confirm password:
        </label>
        <input
            className={`signup-form__input ${
                errors.confirm_password ? "error" : ""
            }`}
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="confirm your password"
            value={formData.confirm_password}
            onChange={handleChange}
        />
        {errors.confirm_password && (
            <span className="signup-form__error">
            <img src={ErrorIcon} alt="error icon" className="signup-form__error-icon" />
            {errors.confirm_password}
            </span>
        )}
      </div>
      {errors.form && <p className="signup-form__error">{errors.form}</p>}
        <div className="signup-form__buttons">
            <MainButton text="sign up" type="submit" />
            <p className="signup-form__buttons-link">Already have an account? <Link to="/login" className="signup-form__buttons-link_hyperlink">Click here</Link></p>
        </div>
    </form>
  );
}

export default SignUpForm;
