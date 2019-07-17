import React from "react";

import Heading from "../../components/Heading/Heading";
import CartList from "../../components/CartList/CartList";
import CartTotal from "../../components/CartTotal/CartTotal";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

import "./Cart.sass";

const Cart = ({ storeProducts }) => {
  const productsInCart = storeProducts.filter(product => product.inCart);
  const renderContent = () =>
    productsInCart.length ? (
      <>
        <CartList storeProducts={storeProducts} />
        <CartTotal storeProducts={storeProducts} />
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

export default Cart;
