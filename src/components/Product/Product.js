import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectProduct, addToCart } from "../../actions/index";

import "./Product.sass";

const Product = ({ product, selectProduct, addToCart }) => {
  const { id, title, img, price, author, inCart } = product;

  const renderAddToCartButtonContent = () =>
    inCart ? (
      <p className="card__button--incart" disabled>
        in cart
      </p>
    ) : (
      <div className="card__button--add">
        <i className="fas fa-cart-plus" />
        <h5>Add to cart</h5>
      </div>
    );

  return (
    <div className="card">
      <h3 className="card__price">
        <span className="card__currency">$</span>
        {price}
      </h3>
      <Link to={"/details/" + id} className="card__image">
        <img src={img} alt={title} onClick={() => selectProduct(product)} />
      </Link>
      <div className="card__describe">
        <p className="card__title">{title}</p>
        <p className="card__title">by {author}</p>
      </div>
      <button
        className="card__button"
        disabled={inCart}
        onClick={() => addToCart(product)}
      >
        {renderAddToCartButtonContent()}
      </button>
    </div>
  );
};

export default connect(
  null,
  { selectProduct, addToCart }
)(Product);
