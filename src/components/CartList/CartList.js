import React from "react";
import CartItem from "../CartItem/CartItem";

import "./CartList.sass";

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

export default CartList;
