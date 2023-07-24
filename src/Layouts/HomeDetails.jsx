import React from "react";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const HomeDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="center-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeDetails;
