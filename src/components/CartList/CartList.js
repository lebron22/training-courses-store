import React from "react";
import CartItem from "../CartItem/CartItem";

import "./CartList.sass";
import { connect } from "react-redux";

const CartList = ({ storeProducts }) => {
  const productsInCart = storeProducts.filter(product => product.inCart);

  return (
    <div className="cart-list">
      {productsInCart.map(product => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { storeProducts: state.storeProducts };
};

export default connect(mapStateToProps)(CartList);
