import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import BookCard from '../components/BookCard/BookCard';

const AllBooks = () => {

    const [Data, setData] = useState();
    useEffect(() => {
      const fetch = async () => {
        const response = await axios.get(
          "http://localhost:3000/api/v1/get-all-books"
        );
        setData(response.data.data);
      };
      fetch();
    }, []);


  return (
    <div className='bg-zinc-900  pe-7'>
      <h4 className="text-5xl m-5 p-5 text-green-600 font-semibold">
        All Books
      </h4>

      {!Data && (
        <div className="flex items-center justify-center my-7"><Loader/></div> )}
      <div className="my-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />{" "}
            </div>
          ))}
      </div>
    </div>
  )
}

export default AllBooks