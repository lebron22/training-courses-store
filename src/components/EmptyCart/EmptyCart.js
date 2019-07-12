import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";

import "./EmptyCart.sass";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <Heading
        title="Your cart is currently empty"
        className="empty-cart__heading"
      />
      <Link to="/store" className="empty-cart__link">
        <button>go to shop</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
