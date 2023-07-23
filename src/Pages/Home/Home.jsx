import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>College Booking | Home</title>
      </Helmet>
      <div className="flex justify-center my-14">
        <input
          className="input input-primary w-1/2"
          type="text"
          placeholder="Search College Name....."
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default Home;
