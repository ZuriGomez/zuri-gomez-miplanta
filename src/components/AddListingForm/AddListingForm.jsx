import React, { useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function AddListingForm() {
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
        console.log(key)
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
      } catch (error) {
        console.error("Error creating listing", error);
      }
    }
  };

  return (
    <form className="listing-form" onSubmit={handleSubmit}>
      <div className="listing-form__group">
        <label className="listing-form__label">
          Photo:
          <input
            className="listing-form__input listing-form__input--file"
            type="file"
            name="photo"
            onChange={handleFileChange}
            accept="uploads/*"
          />
          {errors.photo && (
            <span className="listing-form__error">{errors.photo}</span>
          )}
        </label>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__label">
          Title:
          <input
            className="listing-form__input"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && (
            <span className="listing-form__error">{errors.title}</span>
          )}
        </label>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__label">
          Description:
          <textarea
            className="listing-form__input listing-form__input--textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && (
            <span className="listing-form__error">{errors.description}</span>
          )}
        </label>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__label">
          Maintenance:
          <select
            className="listing-form__input"
            name="maintenance"
            value={formData.maintenance}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
          {errors.maintenance && (
            <span className="listing-form__error">{errors.maintenance}</span>
          )}
        </label>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__label">
          Pot Included:
          <select
            className="listing-form__input"
            name="pot_included"
            value={formData.pot_included}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          {errors.pot_included && (
            <span className="listing-form__error">{errors.pot_included}</span>
          )}
        </label>
      </div>

      {formData.pot_included === "yes" && (
        <div className="listing-form__group">
          <label className="listing-form__label">
            Pot Description:
            <input
              className="listing-form__input"
              type="text"
              name="pot_description"
              value={formData.pot_description}
              onChange={handleChange}
            />
            {errors.pot_description && (
              <span className="listing-form__error">
                {errors.pot_description}
              </span>
            )}
          </label>
        </div>
      )}

      <div className="listing-form__group">
        <label className="listing-form__label">
          Height (cm):
          <input
            className="listing-form__input"
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
          {errors.height && (
            <span className="listing-form__error">{errors.height}</span>
          )}
        </label>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__label">
          Sunlight:
          <select
            className="listing-form__input"
            name="sunlight"
            value={formData.sunlight}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="full sun">full sun</option>
            <option value="partial sun">partial sun</option>
            <option value="partial shade">partial shade</option>
            <option value="full shade">full shade</option>
          </select>
          {errors.sunlight && (
            <span className="listing-form__error">{errors.sunlight}</span>
          )}
        </label>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__label">
          Temperature (°C):
          <input
            className="listing-form__input"
            type="text"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
          />
          {errors.temperature && (
            <span className="listing-form__error">{errors.temperature}</span>
          )}
        </label>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__label">
          Watering:
          <select
            className="listing-form__input"
            name="watering"
            value={formData.watering}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="once per week">once per week</option>
            <option value="every two weeks">every two weeks</option>
            <option value="every month">every month</option>
          </select>
          {errors.watering && (
            <span className="listing-form__error">{errors.watering}</span>
          )}
        </label>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__label">
          Price ($):
          <input
            className="listing-form__input"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && (
            <span className="listing-form__error">{errors.price}</span>
          )}
        </label>
      </div>

      <div className="listing-form__group">
        <label className="listing-form__label">
          Delivery:
          <select
            className="listing-form__input"
            name="delivery"
            value={formData.delivery}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="pickup">pickup</option>
            <option value="delivery">delivery</option>
          </select>
          {errors.delivery && (
            <span className="listing-form__error">{errors.delivery}</span>
          )}
        </label>
      </div>

      <button className="listing-form__submit" type="submit">
        Create Listing
      </button>
    </form>
  );
}

export default AddListingForm;
