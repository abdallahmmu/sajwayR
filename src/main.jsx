import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./Store/Store";

//TODO: React Router

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
