import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

  const renderNavItems = () =>
    navItemsConfig.map((navItem, index) => (
      <Link to={navItem.redirectTo} className="app-header__item" key={index}>
        {navItem.name}
      </Link>
    ));

  return (
    <header className="app-header">
      <nav className="app-header__navbar">
        <Link to="/" className="app-header__logo">
          logo
        </Link>
        {renderNavItems()}
        <Link to="/cart" className="app-header__cart">
          <i className="fas fa-shopping-cart" />
          cart ({productsInCart.length})
        </Link>
      </nav>
    </header>
  );
};

const mapStateToProps = state => {
  return { storeProducts: state.storeProducts };
};

export default connect(mapStateToProps)(Navbar);
