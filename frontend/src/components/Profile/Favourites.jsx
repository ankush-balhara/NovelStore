import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import { GiEmptyHourglass } from "react-icons/gi";
const Favourites = () => {
  const { id } = useParams();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };

  const [FavouriteBooks, setFavouriteBooks] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/get-favourite-books",
        { headers }
      );
      // console.log(response.data.data);
      setFavouriteBooks(response.data.data);
    };
    fetch();
  }, [FavouriteBooks]);
  return (
    <>
        {FavouriteBooks && FavouriteBooks.length === 0 && 
        <div className="h-[100%] flex  text-red-500 text-4xl font-semibold justify-center items-center "><GiEmptyHourglass/>No Favourite Books </div>}

      <div className="grid grid-rows lg:m-3 lg:grid-cols-3 lg:gap-y-6 ">
        {FavouriteBooks &&FavouriteBooks.map((items, i) => (
          <div className="md:w-full mb-4  " key={i}>
            <BookCard data={items} favourite={true} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourites;
