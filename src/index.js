import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import PageContextProvider from "./components/Context/PageContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </BrowserRouter>
);
