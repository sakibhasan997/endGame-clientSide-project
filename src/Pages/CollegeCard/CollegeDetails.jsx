import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CollegeDetails = () => {
  const [disable, setDisable] = useState(false);
  const handleFavorite = () => {
    toast("College Added Successfully");
    setDisable(true);
  };

  const collegeDetails = useLoaderData();
  
  // console.log(collegeDetails);
  const {
    college_image,
    college_name,
    _id,
    admission_dates,
    events,
    research_history,
    events_details,
    research_works,
    admission_process,
    sports_categories,
  } = collegeDetails || {};

  return (
    <div className="pt-32">
      <div className="card h-96 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-full" src={college_image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">College Name: {college_name}</h2>
          <p>Admission Process: {admission_process}</p>
          <p> Events Details: {events}</p>
          <p> Sports: {sports_categories}</p>
          <p> Research Works: {research_works}</p>
          <p> Research History: {research_history}</p>
          <p>Admission Dates: {admission_dates} </p>
          <div className="card-actions justify-end">
            <button
              onClick={handleFavorite}
              disabled={disable}
              className={`${disable ? "btn bg-gradient-to-r from-gray-300 to-pink-50 uppercase text-white":"btn bg-gradient-to-r from-gray-950 to-pink-500 uppercase text-white"}`}>
              Favorite
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CollegeDetails;
