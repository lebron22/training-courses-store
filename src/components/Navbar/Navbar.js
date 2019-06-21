import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.sass";

const navItemsConfig = [
  {
    redirectTo: "/store",
    name: "shop",
    id: "n1"
  },
  {
    redirectTo: "/sell",
    name: "sell",
    id: "n2"
  }
];

const Navbar = () => {
  const renderNavItems = () => {
    return navItemsConfig.map(navItem => (
      <Link
        to={navItem.redirectTo}
        className="app-header__item"
        key={navItem.id}
      >
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
        cart (0)
      </Link>
    </header>
  );
};

export default Navbar;
