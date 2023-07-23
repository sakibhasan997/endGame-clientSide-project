import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/router.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <div className="my-container">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);
