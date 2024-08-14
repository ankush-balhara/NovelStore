import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: ''
  });
 const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const submit = async ()=>{
    try {
      if(formData.username ==="" || formData.email ==="" || formData.password ==="" || formData.address ==="" ){
        alert("Please fill all the fields")
      }else{
        const response = await axios.post("http://localhost:3000/api/v1/sign-up",formData) ;
        alert(response.data.message);
        navigate("/signin")
      };
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md">
        <div className="bg-zinc-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold  mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* username */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"  htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="username"
                placeholder='username'
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            {/* email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder='Email@gmail.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* password */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* address */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                name="address"
                placeholder='Address'
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              {/* submit or signup */}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={submit}
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-700">
              Already have an account?{' '}
              <Link to="/signin" className="text-blue-500 hover:text-blue-700">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
