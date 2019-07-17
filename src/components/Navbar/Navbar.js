import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.sass";

const navItemsConfig = [
  {
    redirectTo: "/store",
    name: "shop"
  },
  {
    redirectTo: "/sell",
    name: "sell"
  }
];

const Navbar = ({ storeProducts }) => {
  const productsInCart = storeProducts.filter(product => product.inCart);

  const renderNavItems = () => {
    return navItemsConfig.map((navItem, index) => (
      <Link to={navItem.redirectTo} className="app-header__item" key={index}>
        {navItem.name}
      </Link>
    ));
  };

  return (
    <header className="app-header">
      <Link to="/" className="app-header__logo">
        My store
      </Link>
      <nav className="app-header__navbar">{renderNavItems()}</nav>
      <Link to="/cart" className="app-header__cart">
        <i className="fas fa-shopping-cart" />
        cart ({productsInCart.length})
      </Link>
    </header>
  );
};

export default Navbar;
