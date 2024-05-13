import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={4000}
      newestOnTop={true}
      closeOnClick
      pauseOnHover
      theme="dark"
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
