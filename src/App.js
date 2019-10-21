import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Cart from "./pages/Cart/Cart";
import Default from "./pages/Default/Default";
import Details from "./pages/Details/Details";
import Sell from "./pages/Sell/Sell";
import Store from "./pages/Store/Store";

import "./base-styles/general.sass";

const App = () => {
  const renderRoutes = () => {
    const routes = [
      { pathname: "/training-courses-store", component: Homepage, exact: true },
      {
        pathname: "/store",
        exact: true,
        component: Store
      },
      {
        pathname: "/details/:id",
        exact: false,
        component: Details
      },
      {
        pathname: "/cart",
        exact: false,
        component: Cart
      },
      { pathname: "/sell", component: Sell, exact: false },
      { component: Default, exact: false }
    ];

    return routes.map((route, index) => (
      <Route
        key={index}
        exact={route.exact}
        path={route.pathname}
        component={route.component}
      />
    ));
  };
  return (
    <>
      <Navbar />
      <Switch>{renderRoutes()}</Switch>
    </>
  );
};

export default App;
