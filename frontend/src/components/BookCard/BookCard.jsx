import React from 'react'
import {Link} from "react-router-dom"
import axios  from 'axios';
import { useParams } from 'react-router-dom';

const BookCard = ({data, favourite,Cart}) => {

  // const {id} = useParams();

  const headers ={
    id: localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
    bookid:data._id,
   
  }

  const handleRemoveBook = async ()=>{
    const response = await axios.put('http://localhost:3000/api/v1/remove-book-from-favourite',{}, {headers});
    alert(response.data.message);
};

 
  return (
    <div  className='ms-14  bg-zinc-700 rounded-md p-4'>
    <Link to={`/view-book-details/${data._id}`}>
    <div >
    <div className='m-1 rounded flex items-center justify-center'><img src={data.url} className='h-[25vh]' alt="book-img" />
   
      </div>
      <h2 className='mt-4  text-zinc-100 font-semibold text-wrap'>{data.title}</h2>

      <p className='mt-2 text-zinc-400 font-semibold'>{data.author}</p>
      <p className='mt-2 text-red-500 font-semibold'>${data.price}</p>
      </div>
    </Link>

    {favourite && (
      <button className='bg-red-500  text-font-semibold border border-black m-2 ms-4 rounded-lg p-3' onClick={handleRemoveBook}>Remove from Favourite</button>
    )}
    {/* {Cart && (
      <button className='bg-red-500  text-font-semibold border ms-12 border-black m-2 ms-4 rounded-lg p-3' 
      onClick={}
      >Remove Book from Cart</button>
    )} */}
    </div>
  )
}

export default BookCard