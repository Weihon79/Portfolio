/* eslint-disable prettier/prettier */
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router";
import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
