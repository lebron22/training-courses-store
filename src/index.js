import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
//DEVTOOLS
import { composeWithDevTools } from "redux-devtools-extension";
//
import App from "./App";
import reducers from "./reducers";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={createStore(reducers, composeWithDevTools())}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
