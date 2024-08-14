// Settings.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Settings = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [Value, setValue] = useState();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/get-user-info",
          { headers }
        );
        setUserDetails(response.data);
        setValue({ address: response.data.address });

        console.log(response.data);
      } catch (error) {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  const change= (e)=>{
    const {name, value} = e.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const submitAddress = async ()=>{
      const response = await axios.put('http://localhost:3000/api/v1/update-address', Value, {headers});
      alert(response.data.message);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Settings</h1>
      {userDetails && (
        <div className="bg-zinc-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="avatar"
            >
              Photo
            </label>
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={userDetails.avatar}
              alt="Avatar"
            />
          </div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black font-bold bg-zinc-200 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={userDetails.username}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black font-semibold bg-zinc-200  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={userDetails.email}
              readOnly
            />
          </div>
          {/* Add more fields as needed */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black font-semibold bg-zinc-200 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              type="text"
              value={userDetails.role}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Address"
              type="text"
              name="address"
              value={Value.address}
              onChange={change}
            >
              {userDetails.address} readOnly
            </textarea>
          <button className="text-blue-500 text-xl font-semibold bg-zinc-800 rounded-sm p-1"
          onClick={submitAddress}>Update Address</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
