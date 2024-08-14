import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { BiBook } from "react-icons/bi";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/get-order-history",
          { headers }
        );
        setOrderHistory(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };
    fetchOrderHistory();
  }, []);

  return (
    <div className="h-full mr-9 mb-9 mt-5 pe-5 rounded-md bg-zinc-900">
      <h1 className="text-4xl text-blue-500 mb-3 font-bold flex justify-center">
        Order History
      </h1>
      {orderHistory.length === 0 ? (
        <div className="h-screen flex justify-center items-center ">
          <div className="flex">
            <BiBook className="text-6xl text-red-500 mb-4" />
            <p className="text-2xl text-red-500 font-semibold">
              No Orders Found <br />
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-zinc-900  w-full p-4 ms-7  ">
          {orderHistory.map((order, i) => (
              
            <div key={i} className="flex flex-col lg:flex-row  mb-4 border-b pb-4">
              
              <h1 className=" text-white text-3xl pe-3 flex items-center justify-top ">{i+1}</h1>
              <img
                src={order.book?.url || "default-image-url"} // Accessing the book's image URL
                alt={order.book?.title || "Book Image"}
                className="w-9 h-15 object-cover rounded-lg mr-6  "
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{order.book?.title}</h2>
                <p className="text-gray-400 hidden lg:block">
                  by {order.book?.author}
                </p>
                {/* <p className="text-gray-400  ">
                  {order.book?.description.slice(0, 50)}...
                </p> */}
              </div>
              <p className="text-red-700 hidden lg:block font-bold mr-9 mt-2">
                ${order.book?.price.toFixed(2)}
              </p>
              <p className="text-green-500 mr-9 mt-2">
                 {order.status}
              </p>
             <div className=" ">
                
              <p>Payment Mode : COD</p>
             <p className="text-gray-400 mr-9 mt-2">
                Order Date: {new Date(order.createdAt).toLocaleDateString()}
              </p>
              </div>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
