import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Homepage from "../pages/Homepage/Homepage";
import Cart from "../pages/Cart/Cart";
import Default from "../pages/Default/Default";
import Details from "../pages/Details/Details";
import Sell from "../pages/Sell/Sell";
import Store from "../pages/Store/Store";

import "../base-styles/general.sass";

class App extends Component {
  state = {};

  renderRoutes = () => {
    const routes = [
      { pathname: "/", component: <Homepage />, exact: true, id: 1 },
      {
        pathname: "/store",
        exact: true,
        component: <Store />,
        id: 2
      },
      {
        pathname: "/details",
        exact: true,
        component: <Details />,
        id: 3
      },
      {
        pathname: "/cart",
        exact: true,
        component: <Cart />,
        id: 4
      },
      { pathname: "/sell", component: <Sell />, exact: true, id: 5 },
      { component: <Default />, exact: true, id: 6 }
    ];

    return routes.map(route => (
      <Route
        key={route.id}
        exact={route.exact}
        path={route.pathname}
        render={() => route.component}
      />
    ));
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>{this.renderRoutes()}</Switch>
      </Router>
    );
  }
}

export default App;
