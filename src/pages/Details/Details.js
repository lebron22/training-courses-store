import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { connect } from "react-redux";

import "./Details.sass";

const Details = props => {
  const { id, author, img, info, price, title, inCart } = props.selectedProduct;

  const onDetailsCartButtonClick = () => {
    // props.addToCart(id);
    // props.openModal(id);
  };

  return (
    <div className="details">
      <Heading title={title} className="details__title" />
      <div className="details__container">
        <div className="details__description">
          <img src={`../${img}`} className="details__image" alt={title} />
          <h4 className="description__author">
            made by:
            <br /> <span>{author}</span>
          </h4>
          <h4 className="description__price">
            price : <span>$</span>
            {price}
          </h4>
        </div>
        <p className="description__info">{info}</p>
      </div>
      <div className="description__buttons">
        <button
          onClick={() => {
            onDetailsCartButtonClick();
          }}
          className="description__button"
          disabled={inCart}
        >
          {inCart ? "in cart" : "add to cart"}
        </button>
        <Link to="/store">
          <button className="description__button">back to products</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedProduct: state.selectedProduct };
};

export default connect(mapStateToProps)(Details);
