


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {
  const [book, setBook] = useState({
    url: '',
    title: '',
    author: '',
    price: '',
    description: '',
    language: '',
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        book.url === '' ||
        book.title === '' ||
        book.author === '' ||
        book.price === '' ||
        book.description === '' ||
        book.language === ''
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post('http://localhost:3000/api/v1/Profile/add-book', book, { headers });
        console.log(response.data.data);
        setBook({
          url: "",
          title: "",
          author: "",
          price: "",
          description: "",
          language: "",
        });
        alert("Book added successfully!");
      }
    } catch (error) {
      console.error("Error in frontend:", error);
      alert("Failed to add book.");
    }
  };

  return (
    <div className="w-[100%] ms-9 bg-zinc-900 py-12 px-4  lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-zinc-400 shadow-md rounded px-8 pt-6 pb-8 mb-">
          <h2 className="text-2xl font-bold mb-4">Add Book</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="url">
                URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="url"
                type="text"
                name="url"
                value={book.url}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="author">
                Author
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                name="price"
                value={book.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                value={book.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="language">
                Language
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="language"
                type="text"
                name="language"
                value={book.language}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Book
              </button>
              <Link
                to="/profile"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Back to Profile
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
