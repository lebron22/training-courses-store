import React from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  incrementProductQuantity,
  decrementProductQuantity
} from "../../actions/index";
import "./CartItem.sass";

const CartItem = ({
  product,
  removeFromCart,
  incrementProductQuantity,
  decrementProductQuantity
}) => {
  const { title, img, price, count, total } = product;
  return (
    <div className="item">
      <div className="item__description">
        <h4 className="item__title">{title}</h4>
        <img src={img} alt={title} className="item__img" />
        <h4 className="item__price">Price: ${price}</h4>
      </div>
      <div className="count">
        <div className="count__quantity">
          <button
            className="count__button"
            disabled={!count}
            onClick={() => decrementProductQuantity(product)}
          >
            -
          </button>
          <span className="count__number">{count}</span>
          <button
            className="count__button"
            onClick={() => incrementProductQuantity(product)}
          >
            +
          </button>
        </div>

        <button
          className="count__button"
          onClick={() => removeFromCart(product)}
        >
          <i className="fas fa-trash" />
        </button>
        <h4 className="count__total">Total: {total}</h4>
      </div>
    </div>
  );
};

export default connect(
  null,
  { removeFromCart, incrementProductQuantity, decrementProductQuantity }
)(CartItem);
