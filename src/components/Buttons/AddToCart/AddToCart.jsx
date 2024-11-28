import "../AddToCart/AddToCart.scss";
import React from "react";

function AddToCart({onAddToCart}) {
    return (
      <button
        type="button"
        className="add-to-cart-button"
        onClick={onAddToCart}>+ add to cart</button>
    );
  };


export default AddToCart;
