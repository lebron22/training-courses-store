import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { connect } from "react-redux";
import { detailProduct } from "../../data";
import { addToCart } from "../../actions/index";

import "./Details.sass";

class Details extends Component {
  state = {
    productSelected: detailProduct
  };

  updateSelectedProduct = () => {
    const { storeProducts, match, history } = this.props;
    const productSelected = storeProducts.filter(
      product => String(product.id) === match.params.id
    );
    productSelected.length
      ? this.setState({ productSelected: productSelected[0] })
      : history.push("/store");
  };

  componentDidMount() {
    this.updateSelectedProduct();
  }

  componentDidUpdate(prevProps) {
    if (this.props.storeProducts !== prevProps.storeProducts) {
      this.updateSelectedProduct();
    }
  }

  renderAddToCartButton = () => (
    <button
      onClick={() => this.props.addToCart(this.state.productSelected)}
      className="description__button"
      disabled={this.state.productSelected.inCart}
    >
      {this.state.productSelected.inCart ? "in cart" : "add to cart"}
    </button>
  );

  render() {
    const { author, img, info, price, title } = this.state.productSelected;
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
          {this.renderAddToCartButton()}
          <Link to="/store">
            <button className="description__button">back to products</button>
          </Link>
        </div>
      </div>
    );
  }
}

const withRouterDetails = withRouter(Details);

export default connect(
  null,
  { addToCart }
)(withRouterDetails);
