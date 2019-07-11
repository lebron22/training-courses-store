import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Product.sass";

const Product = props => {
  const { id, title, img, price, author, inCart } = props.product;

  return (
    <div className="card">
      <div className="card__container">
        <h3 className="card__price">
          <span className="card__currency">$</span>
          {price}
        </h3>
        <Link to={"/details/" + id} className="card__image">
          <img
            src={img}
            alt={title}
            onClick={() => {
              props.selectProduct(props.product);
            }}
          />
        </Link>
        <div className="card__describe">
          <p className="card__title">{title}</p>
          <p className="card__title">by {author}</p>
        </div>
        <button
          className="card__button"
          disabled={inCart ? true : false}
          onClick={() => {
            props.addToCart(id);
            props.openModal(id);
          }}
        >
          {inCart ? (
            <p className="card__button--incart" disabled>
              in cart
            </p>
          ) : (
            <div className="card__button--add">
              <i className="fas fa-cart-plus" />
              <h5>Add to cart</h5>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    selectProduct: product => {
      dispatch({ type: "PRODUCT_SELECTED", product });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
