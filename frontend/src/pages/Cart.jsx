import React, { useEffect, useState } from "react";
import { GiEmptyHourglass } from "react-icons/gi";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";


const Cart = ({ data, Cart }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/get-user-cart",
        { headers }
      );

      
      setCartItems(response.data.data);
    };
    fetch();
  }, [cartItems]);

  // removing book from cart
  const handleRemoveBookCart = async (bookid) => {
    const response = await axios.put(
      "http://localhost:3000/api/v1/remove-from-cart",
      { bookid },
      { headers }
    );
    alert(response.data.message);
  };

  
//  placing cart order 
  const placeOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/place-order",
        { orders: cartItems }, // Ensure orders key is used
        { headers }
      );
      alert(response.data.message);
      // console.log(response);
      navigate("/profile/order-history");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="h-full mr-9 mb-9 mt-5 pe-5 rounded-md  ">
      <h1 className="text-4xl text-blue-500 mb-3 font-bold  flex  justify-center">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className=" h-screen flex flex-row lg:flex-col justify-center items-center ">
          <div className="flex ">
            <GiEmptyHourglass className="text-6xl text-red-500 mb-4" />
            <p className="text-2xl text-red-500 font-semibold ">
              Cart is Empty <br />
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-zinc-900 w-full p-4 ms-7 me-6 ">
          {!cartItems && <Loader />}
          {cartItems &&
            cartItems.map((item, i) => (
              <div key={i} className="flex items-center mb-4 border-b pb-4  flex-col lg:flex-row">
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded-lg mr-6"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-400 hidden md:block  ">
                    by {item.description.slice(0, 100)}...
                  </p>
                  <p className="text-gray-400">Written by - {item.author}</p>
                </div>
                  <p className="text-red-700 font-bold mr-9 mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                {cartItems && (
                  <button
                    onClick={() => handleRemoveBookCart(item._id)}
                    className="bg-red-500 text-white px-4 py-2 mr-9 rounded-lg  hover:bg-red-200 transition-all w-4/6 lg:w-auto"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          <div className="text-right mt-4 mr-9  ">
            <div className="text-2xl "> Total Order<br/> &nbsp;{cartItems.length}&nbsp;Books</div>
            <p className="text-lg font-semibold">
              Price: $
              {cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition " 
            onClick={placeOrder}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
