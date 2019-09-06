import React from "react";
import { connect } from "react-redux";

import Heading from "../../components/shared/Heading/Heading";
import CartList from "../../components/CartList/CartList";
import CartTotal from "../../components/CartTotal/CartTotal";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

import "./Cart.sass";

const Cart = ({ storeProducts }) => {
  const productsInCart = storeProducts.filter(product => product.inCart);
  const renderContent = () =>
    productsInCart.length ? (
      <>
        <CartList />
        <CartTotal />
      </>
    ) : (
      <EmptyCart />
    );
  return (
    <div className="cart">
      <Heading title="Your cart" className="cart__heading" />
      {renderContent()}
    </div>
  );
};

const mapStateToProps = state => {
  return { storeProducts: state.storeProducts };
};

export default connect(mapStateToProps)(Cart);
