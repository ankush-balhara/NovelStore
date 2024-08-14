import React from "react";
import book from "../Images/nice.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div  className="h-screen w-full flex flex-col md:flex-row  bg-black">
      <div className="w-full lg:w-3/6 ms-7 md:w-full   md:mt-12  flex flex-col items-start lg:items-start justify-center lg:text-left">
        <h1 className="text-6xl font-semibold text-red-500">
          Discover Your Next Great Read
        </h1>

        <p className="mt-7 text-xl text-zinc-300">
          Uncover captivating stories, enriching knowledge and endless
          inspiration in our curated collection of books{" "}
        </p>

        <div className="w-full items-center flex flex-col">
          <Link to="/allbooks" className="text-blue-300 text-xl lg:text-2xl  font-semibold border border-blue-100 py-3 mt-12  p-8 ps-9 hover:bg-zinc-800  items-center  rounded-full">
            Discover Books
          </Link>
        </div>
      </div>
      {/* <div className="mt-28 w-full lg:w-3/6 h-auto lg:h-full  flex  justify-center "> */}
      <div className="lg:w-3/6 m-9 me-9 flex flex-col items-start lg:items-start justify-center lg:text-left">
        <img className="" src={book} alt="Bookstore-image" />
      </div>
    </div>
  );
};

export default Hero;
