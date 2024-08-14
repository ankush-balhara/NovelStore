import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useNavigate, useParams,Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { FaCartArrowDown, FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RiDeleteBin2Fill } from "react-icons/ri";

const ViewBookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);

  const [Data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  console.log(isLoggedIn, role);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/get-book-by-id/${id}`
        );
       
        console.log(response);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [id]);

  const headers ={
    id: localStorage.getItem('id'),
    authorization:`Bearer ${localStorage.getItem("token")}`,
    bookid:id,
  }
    // handle favorites items
  const handleFavourite = async () =>{
    const response = await axios.put("http://localhost:3000/api/v1/add-book-to-favourite", {},{headers}
    );  
    alert(response.data.message);
  };
  // adding books to the cart
  const handleCart = async () =>{
    const response = await axios.put("http://localhost:3000/api/v1/add-to-cart", {},{headers});
   alert(response.data);
  };

  // deleting book admin role
  const deleteBook = async () =>{
    const response = await axios.delete(`http://localhost:3000/api/v1/delete-book`, {headers});
    alert(response.data.message);
    console.log(response);
    navigate("/AllBooks");
  };

  // const editBook = async () =>{
  //   const response = await axios.post (`http://localhost:3000/api/v1/Profile/update-book`, {headers});
  //   // alert(response.data.message);
  //   console.log(response);
  //   // navigate("/AllBooks");

  // }

  return (
    <div className="px-4 md:px-12  lg:py-8 bg-zinc-900 flex flex-col md:flex-row gap-8 ">
      <div className="bg-zinc-800  rounded lg:p-4 mt-7  h-[75vh] lg:h-[88vh] lg:w-3/6 w-full flex items-start justify-center md:order-first  gap-8 ">
        {" "}
        {isLoading ? (
          <Loader />
        ) : Data && Data.url ? (
          <div className="flex flex-col lg:flex-row mt-7 justify-around lg:items-start">
            <img
              src={Data.url}
              className="h-60vh lg:h-[70vh] overflow-hidden"
              alt={Data.title || "Book Image"}
            />

              {/* user role cart functionality */}
            {isLoggedIn === true && role === "user" && (
              <div className="flex lg:flex-col flex-col p-7 m-3 lg:p-6 justify-between ">
                <button className="bg-white  text-red-600 rounded lg:rounded-full  text-3xl p-2 flex items-center  justify-center " onClick={handleFavourite}>
                  <MdFavorite />
                  <span className="ms-4  block lg:hidden">Favorites</span>
                </button>

                <button className="bg-blue-800 text-white rounded lg:rounded-full text-3xl lg:mt-4 p-2 flex items-center justify-center " onClick={handleCart}>
                  <FaCartArrowDown /> 
                  <span className="ms-4 block lg:hidden ">Add to cart</span>
                </button>
              </div>
            )}
                {/* admin role editing and removing */}
            {isLoggedIn === true && role === "admin" && (
              <div className="flex lg:flex-col flex-col p-7 m-3 lg:p-6 justify-between ">
                <Link to={`/update-book/${id}`} className="bg-white  text-red-600 rounded lg:rounded-full  text-3xl p-2 flex items-center  justify-center  " 
                // onClick={editBook}
                >
                <FaEdit/>
                  <span  className="ms-4  block lg:hidden">Edit Book</span>
                </Link>

                <button className="bg-blue-800 text-white rounded lg:rounded-full text-3xl lg:mt-4 p-2 flex items-center justify-center "onClick={deleteBook}
                >
                <RiDeleteBin2Fill/>
                  <span className="ms-4 block lg:hidden "
                  >Delete Book</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <p>Error loading book image</p>
        )}
      </div>
      <div className="p-4 pt-16 w-full lg:w-3/6 mt-9">
        {Data ? (
          <>
            <h1 className="text-4xl text-zinc-300 font-semibold">
              {Data.title}
            </h1>
            <p className="text-zinc-400 mt-1">Author : {Data.author}</p>
            <p className="text-white mt-4 text-xl">{Data.description}</p>

            <p className="flex mt-4 items-center justify-start">
              <GrLanguage className="me-3" />
              {Data.language}
            </p>

            <p className="mt-4 text-red-600 text-2xl font-semibold">
              Price : ${Data.price}{" "}
            </p>
          </>
        ) : (
          <div>
            {" "}
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewBookDetails;
