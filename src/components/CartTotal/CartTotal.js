import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearCart } from "../../actions/index";
import "./CartTotal.sass";

class CartTotal extends Component {
  state = {
    subtotal: 0,
    tax: 0,
    total: 0
  };

  componentDidMount() {
    this.countTotal();
  }

  componentDidUpdate(prevProps) {
    if (this.props.storeProducts !== prevProps.storeProducts) {
      this.countTotal();
    }
  }

  countTotal = () => {
    const productsSubtotalArray = this.props.storeProducts.map(
      product => product.total
    );
    const subtotal = productsSubtotalArray.reduce(
      (accumulator = 0, currentValue) => accumulator + currentValue
    );
    const tax = parseFloat((subtotal * 0.23).toFixed(2));
    const total = parseFloat((subtotal + tax).toFixed(2));
    this.setState(() => ({
      subtotal,
      tax,
      total
    }));
  };

  render() {
    const { clearCart } = this.props;
    const { subtotal, tax, total } = this.state;
    return (
      <div className="cart-total">
        <Link to="/store" className="cartTotal__clear">
          <button className="cart-total__clear-btn" onClick={() => clearCart()}>
            clear cart
          </button>
        </Link>
        <div className="cart-total__checkout">
          <h5 className="checkout__title">subtotal: {subtotal}$</h5>
          <h5 className="checkout__title">tax: {tax}$</h5>
          <h5 className="checkout__title">total: {total}$</h5>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { clearCart }
)(CartTotal);
