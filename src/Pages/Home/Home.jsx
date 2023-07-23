import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PhotoGallery from "../../Components/PhotoGallery";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaBook,
  FaArrowRightLong,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/threeCard")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>College Booking | Home</title>
      </Helmet>
      <div className="flex justify-center pb-12 pt-32">
        <input
          className="input input-primary w-1/2"
          type="text"
          placeholder="Search College Name....."
          name=""
          id=""
        />
      </div>

      {/* First Sections */}
      <section className="my-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="card w-full bg-base-100 shadow-xl ">
              <figure>
                <img src={card?.college_image} alt="Shoes" />
              </figure>
              <div className="flex flex-col px-2 pt-10">
                <h2 className="card-title"> {card.college_name}</h2>
                <p>Dates: {card.admission_dates}</p>
                <p>Events: {card.events}</p>
                <p>History: {card.research_history}</p>
                <p>Sports: {card.sports}</p>
              </div>
              <div className=" w-full mt-8 ">
                <button className="btn bg-gradient-to-r from-gray-950 to-pink-500 uppercase text-white w-full ">
                  College Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Second Sections */}
      <section>
        <div className="w-1/2 mx-auto mt-16">
          <h1 className=" border-b-2 border-t-2 py-5 lg:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-red-500">
            College Image Gallery
          </h1>
        </div>
        <div>
          <PhotoGallery />
        </div>
      </section>

      {/* Third sections */}
      <section className="my-20">
        <div className="w-1/2 mx-auto py-16">
          <h1 className=" border-b-2 border-t-2 py-5 lg:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-red-500">
          Research Paper Links
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" my_card bg-gradient-to-r from-gray-300 to-gray-100 text-gray-950 px-8 cursor-pointer ">
            <span className="flex items-center gap-3 text-2xl font-bold hover:text-red-600 py-3">
              <span>
                <FaGraduationCap className="text-3xl text-red-600" />
              </span>
              <h4>Undergraduate Education</h4>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              sapiente doloremque mollitia aspernatur facilis labore officiis
              quas eveniet hic est?
            </p>
            <Link
              to="/"
              className="flex items-center hover:text-red-600 text-lg py-4 gap-4">
              <p>Undergraduate Education </p>
              <span>
                <FaArrowRightLong className="text-red-600" />
              </span>
            </Link>
          </div>
          <div className=" my_card bg-gradient-to-r from-gray-300 to-gray-100 text-gray-950 px-8 cursor-pointer ">
            <span className="flex items-center gap-3 text-2xl font-bold hover:text-red-600 py-3">
              <span>
                <FaUserGraduate className="text-3xl text-red-600" />
              </span>
              <h4>Graduate Education</h4>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              sapiente doloremque mollitia aspernatur facilis labore officiis
              quas eveniet hic est?
            </p>
            <Link
              to="/"
              className="flex items-center hover:text-red-600 text-lg py-4 gap-4">
              <p>Graduate Education </p>
              <span>
                <FaArrowRightLong className="text-red-600" />
              </span>
            </Link>
          </div>
          <div className=" my_card bg-gradient-to-r from-gray-300 to-gray-100 text-gray-950 px-8 cursor-pointer ">
            <span className="flex items-center gap-3 text-2xl font-bold hover:text-red-600 py-3">
              <span>
                <FaBook className="text-3xl text-red-600" />
              </span>
              <h4>Lifelong learning</h4>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              sapiente doloremque mollitia aspernatur facilis labore officiis
              quas eveniet hic est?
            </p>
            <Link
              to="/"
              className="flex items-center hover:text-red-600 text-lg py-4 gap-4">
              <p>Lifelong learning </p>
              <span>
                <FaArrowRightLong className="text-red-600" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Rating sections */}
      <section></section>
    </div>
  );
};

export default Home;
