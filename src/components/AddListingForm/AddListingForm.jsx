import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../AddListingForm/AddListingForm.scss";
import MainButton from "../Buttons/MainButton/MainButton";
import ErrorIcon from "../../assets/icons/error-icon-24px.svg";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function AddListingForm() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    maintenance: "",
    pot_included: "",
    pot_description: "",
    height: "",
    sunlight: "",
    temperature: "",
    watering: "",
    price: "",
    delivery: "",
  });

  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const validateFields = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "pot_description") {
        newErrors[key] = "This field is required";
      }
      if (
        key === "pot_included" &&
        formData[key] === "yes" &&
        !formData.pot_description
      ) {
        newErrors.pot_description = "This field is required";
      }
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const formDataObj = new FormData();
      Object.keys(formData).forEach((key) => {
        console.log(key);
        formDataObj.append(`${key}`, formData[key]);
      });

      formDataObj.append("photo", photo);

      for (let pair of formDataObj.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      try {
        const response = await axios.post(
          `${BASE_URL}/api/listings`,
          formDataObj,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Listing created successfully", response.data);

        setFormData({
          title: "",
          description: "",
          maintenance: "",
          pot_included: "",
          pot_description: "",
          height: "",
          sunlight: "",
          temperature: "",
          watering: "",
          price: "",
          delivery: "",
        });
        setPhoto(null);
        setErrors({});
        navigate("/api/listings");
      } catch (error) {
        console.error("Error creating listing", error);
      }
    }
  };

  return (
    <form className="listing-form" onSubmit={handleSubmit}>
      <h1 className="listing-form__title">New Listing</h1>
      <div className="listing-form__group-photo">
        <input
          className="listing-form__group-photo-input listing-form__group-photo-input--file"
          type="file"
          id="photo"
          name="photo"
          onChange={handleFileChange}
          accept="uploads/*"
        />
        <label className="listing-form__group-photo-label" htmlFor="photo">
          add a photo
        </label>
        {errors.photo && (
          <span className="listing-form__group-error">
            <img
              src={ErrorIcon}
              alt="error icon"
              className="listing-form__group-error-icon"
            />
            {errors.photo}
          </span>
        )}
      </div>

      <div className="listing-form__group">
        <label className="listing-form__group-label" htmlFor="title">
          title:
        </label>
        <div className="listing-form__group-wrapper">
          <input
            className="listing-form__group-wrapper-input"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && (
            <span className="listing-form__group-wrapper-error">
              <img
                src={ErrorIcon}
                alt="error icon"
                className="listing-form__group-wrapper-error-icon"
              />
              {errors.title}
            </span>
          )}
        </div>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__group-label" htmlFor="description">
          description:
        </label>
        <div className="listing-form__group-wrapper">
          <textarea
            className="listing-form__group-wrapper-input1 listing-form__group-wrapper-input1--textarea1"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && (
            <span className="listing-form__group-wrapper-error">
              <img
                src={ErrorIcon}
                alt="error icon"
                className="listing-form__group-wrapper-error-icon"
              />
              {errors.description}
            </span>
          )}
        </div>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__group-label" htmlFor="maintenance">
          maintenance:
        </label>
        <div className="listing-form__group-wrapper">
          <select
            className="listing-form__group-wrapper-input"
            id="maintenance"
            name="maintenance"
            value={formData.maintenance}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.maintenance && (
            <span className="listing-form__group-wrapper-error">
              <img
                src={ErrorIcon}
                alt="error icon"
                className="listing-form__group-wrapper-error-icon"
              />
              {errors.maintenance}
            </span>
          )}
        </div>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__group-label" htmlFor="pot_included">
          pot included:
        </label>
        <div className="listing-form__group-wrapper">
          <select
            className="listing-form__group-wrapper-input"
            id="pot_included"
            name="pot_included"
            value={formData.pot_included}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.pot_included && (
            <span className="listing-form__group-wrapper-error">
              <img
                src={ErrorIcon}
                alt="error icon"
                className="listing-form__group-wrapper-error-icon"
              />
              {errors.pot_included}
            </span>
          )}
        </div>
      </div>

      {formData.pot_included === "yes" && (
        <div className="listing-form__group">
          <label
            className="listing-form__group-label"
            htmlFor="pot_description"
          >
            pot description:
          </label>
          <div className="listing-form__group-wrapper">
            <input
              className="listing-form__group-wrapper-input2"
              type="text"
              id="pot_description"
              name="pot_description"
              value={formData.pot_description}
              onChange={handleChange}
            />
            {errors.pot_description && (
              <span className="listing-form__group-wrapper-error">
                <img
                  src={ErrorIcon}
                  alt="error icon"
                  className="listing-form__group-wrapper-error-icon"
                />
                {errors.pot_description}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="listing-form__group">
        <label className="listing-form__group-label" htmlFor="height">
          height (cm):
        </label>
        <div className="listing-form__group-wrapper">
          <input
            className="listing-form__group-wrapper-input"
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
          {errors.height && (
            <span className="listing-form__group-wrapper-error">
              <img
                src={ErrorIcon}
                alt="error icon"
                className="listing-form__group-wrapper-error-icon"
              />
              {errors.height}
            </span>
          )}
        </div>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__group-label" htmlFor="sunlight">
          sunlight:
        </label>
        <div className="listing-form__group-wrapper">
          <select
            className="listing-form__group-wrapper-input"
            id="sunlight"
            name="sunlight"
            value={formData.sunlight}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="full sun">Full Sun</option>
            <option value="partial sun">Partial Sun</option>
            <option value="partial shade">Partial Shade</option>
            <option value="full shade">Full Shade</option>
          </select>
          {errors.sunlight && (
            <span className="listing-form__group-wrapper-error">
              <img
                src={ErrorIcon}
                alt="error icon"
                className="listing-form__group-wrapper-error-icon"
              />
              {errors.sunlight}
            </span>
          )}
        </div>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__group-label" htmlFor="temperature">
          temperature (°C):
        </label>
        <div className="listing-form__group-wrapper">
          <input
            className="listing-form__group-wrapper-input"
            type="text"
            id="temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
          />
          {errors.temperature && (
            <span className="listing-form__group-wrapper-error">
              <img
                src={ErrorIcon}
                alt="error icon"
                className="listing-form__group-wrapper-error-icon"
              />
              {errors.temperature}
            </span>
          )}
        </div>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__group-label" htmlFor="watering">
          watering:
        </label>
        <div className="listing-form__group-wrapper">
          <select
            className="listing-form__group-wrapper-input"
            id="watering"
            name="watering"
            value={formData.watering}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="once per week">Once per week</option>
            <option value="every two weeks">Every two weeks</option>
            <option value="every month">Every month</option>
          </select>
          {errors.watering && (
            <span className="listing-form__group-wrapper-error">
              <img
                src={ErrorIcon}
                alt="error icon"
                className="listing-form__group-wrapper-error-icon"
              />
              {errors.watering}
            </span>
          )}
        </div>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__group-label" htmlFor="price">
          price ($):
        </label>
        <div className="listing-form__group-wrapper">
          <input
            className="listing-form__group-wrapper-input"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && (
            <span className="listing-form__group-wrapper-error">
              <img
                src={ErrorIcon}
                alt="error icon"
                className="listing-form__group-wrapper-error-icon"
              />
              {errors.price}
            </span>
          )}
        </div>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__group-label" htmlFor="delivery">
          delivery:
        </label>
        <div className="listing-form__group-wrapper">
          <select
            className="listing-form__group-wrapper-input"
            id="delivery"
            name="delivery"
            value={formData.delivery}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
          </select>
          {errors.delivery && (
            <span className="listing-form__group-wrapper-error">
              <img
                src={ErrorIcon}
                alt="error icon"
                className="listing-form__group-warpper-error-icon"
              />
              {errors.delivery}
            </span>
          )}
        </div>
      </div>
      <div className="listing-form__buttons">
        <MainButton
          text="Create Listing"
          type="submit"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default AddListingForm;
