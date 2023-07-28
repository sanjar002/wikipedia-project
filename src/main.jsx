import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import "./main.css";
import AppContext from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext>
        <Root />
      </AppContext>
    </BrowserRouter>
  </React.StrictMode>
);

// ALT + Shift + O
