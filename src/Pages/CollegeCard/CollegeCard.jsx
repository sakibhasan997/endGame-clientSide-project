import React, { useEffect, useState } from "react";

const CollegeCard = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sixCard")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 pt-32">
      {colleges.map((college, index) => (
        <div key={index} className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img className="h-[300px]" src={college.college_image} alt="Shoes" />
          </figure>
          <div className="flex flex-col px-5 pt-10 text-gray-600">
            <h2 className="card-title pb-3 font-bold">{college.college_name}</h2>
            <p>{college.research_works}</p>
            <p>Admission Dates: {college.admission_dates}</p>
            <p>Rating: {college.college_rating}</p>
          </div>
          <div className=" w-full mt-8 ">
            <button className="btn bg-gradient-to-r from-gray-950 to-pink-500 uppercase text-white w-full ">
              College Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegeCard;
