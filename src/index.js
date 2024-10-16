import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot is used instead of render

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
