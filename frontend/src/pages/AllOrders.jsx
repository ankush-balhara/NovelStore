// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import OrderHistory from "../components/Profile/OrderHistory";


// const AllOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [Values, setValues] = useState([]);
//   const {id} = useParams();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/v1/Profile/all-orders",
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         console.log(response.data.data);
//         setOrders(response.data.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchOrders();
//   }, [AllOrders]);


//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   const change = (e) =>{
//     const {value} = e.target;
//     setValues({status: value});
//   };

//   const handleStatusChange = async (i) => {
//       const id = OrderHistory[i]._id;
//       const response= await axios.put(`http://localhost:3000/api/v1/update-status/${id}`,Values, {headers})

//       alert(response.data.data);
//       console.log(response);
    
//   };

//   const getStatusButtonClass = (status) => {
//     switch (status) {
//       case "Order Placed":
//         return "bg-green-500 hover:bg-green-700 text-white";
//       case "Order Confirmed":
//         return "bg-blue-500 hover:bg-blue-700 text-white";
//       case "Order Shipped":
//         return "bg-violet-500 hover:bg-yellow-700 text-white";
//       case "Order Delivered":
//         return "bg-red-500 hover:bg-purple-700 text-white";
//       default:
//         return "bg-gray-500 hover:bg-gray-700 text-white";
//     }
//   };

//   return (
//     <div className="w-full h-full bg-zinc-900 ms-5 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto flex flex-row lg:flex-col">
//         <div className="bg-zinc-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <h2 className="text-2xl font-bold mb-4">All Orders</h2>
//           <div className=" lg:overflow-x-auto">
//             <table className="min-w-full  divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="lg:px-6 lg:py-3 p-2   whitespace-nowrap text-left font-medium text-gray-500 ">
//                     Sr.
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Book
//                   </th>
//                   <th scope="col" className="font-medium px-3 py-3  text-gray-500 hidden lg:block">
//                     Price
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
                 
//                 </tr>
//               </thead>
//               <tbody className="bg-zinc-500 text-white font-semibold w-full py-2 text">
//                 {orders.map((order, i) => (
//                   <tr key={order._id} className="hover:bg-zinc-600 rounded transition-all">
//                     <td className="lg:px-6 lg:py-3 p-2   whitespace-nowrap">{i + 1}</td>
//                     <td className="py-4 w-[30%] md:w-[16%]">
//                       <div className="text-sm flex">{order.book?.title}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap hidden lg:block">
//                       <div className="text-xl text-center text-red-800">{order.book?.price || "N/A"}</div>
//                     </td>
//                     <td className="lg:px-6 lg:py-4 md:text-sm p-4  w-[24%] ">
//                       <select
                       
//                         className={`block appearance-none w-full py-2 px-4 pr-8 rounded leading-tight focus:outline-none ${getStatusButtonClass(order.status)}`}
//                         value={order.status}
//                         onChange={(e) => handleStatusChange(i)}
//                       >
//                         <option  value="Order Placed">Order Placed</option>
//                         <option value="Order Confirmed">Order Confirmed</option>
//                         <option value="Order Shipped">Order Shipped</option>
//                         <option value="Order Delivered">Order Delivered</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllOrders;


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import OrderHistory from "../components/Profile/OrderHistory";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [Values, setValues] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/Profile/all-orders",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data.data);
        setOrders(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { value } = e.target;
    setValues({ status: value });
  };

  // const handleStatusChange = async (i) => {
  //   const orderId = orders[i]._id;
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:3000/api/v1/update-status/${orderId}`,
  //       Values,
  //       { headers }
  //     );
  //     alert(response.data.message);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("Error updating status:", error);
  //   }
  // };
  const handleStatusChange = async (i, e) => {
    const { value } = e.target;
    const id = orders[i]._id;
    
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/update-status/${id}`, { status: value }, { headers });
      
      // Update the local state
      const updatedOrders = [...orders];
      updatedOrders[i].status = value;
      setOrders(updatedOrders);
  
      alert(response.data.message);
      console.log(response);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  

  const getStatusButtonClass = (status) => {
    switch (status) {
      case "Order Placed":
        return "bg-green-500 hover:bg-green-700 text-white";
      case "Order Confirmed":
        return "bg-blue-500 hover:bg-blue-700 text-white";
      case "Order Shipped":
        return "bg-violet-500 hover:bg-yellow-700 text-white";
      case "Order Delivered":
        return "bg-red-500 hover:bg-purple-700 text-white";
      default:
        return "bg-gray-500 hover:bg-gray-700 text-white";
    }
  };

  return (
    <div className="w-full h-full bg-zinc-900 ms-5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-row lg:flex-col">
        <div className="bg-zinc-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">All Orders</h2>
          <div className="lg:overflow-x-auto">
            <table className="min-w-full divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 p-2 whitespace-nowrap text-left font-medium text-gray-500"
                  >
                    Sr.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Book
                  </th>
                  <th
                    scope="col"
                    className="font-medium px-3 py-3 text-gray-500 hidden lg:block"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-zinc-500 text-white font-semibold w-full py-2 text">
                {orders.map((order, i) => (
                  <tr
                    key={order._id}
                    className="hover:bg-zinc-600 rounded transition-all"
                  >
                    <td className="lg:px-6 lg:py-3 p-2 whitespace-nowrap">
                      {i + 1}
                    </td>
                    <td className="py-4 w-[30%] md:w-[16%]">
                      <div className="text-sm flex">{order.book?.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden lg:block">
                      <div className="text-xl text-center text-red-800">
                        {order.book?.price || "N/A"}
                      </div>
                    </td>
                    <td className="lg:px-6 lg:py-4 md:text-sm p-4 w-[24%]">
                      <select
                        className={`block appearance-none w-full py-2 px-4 pr-8 rounded leading-tight focus:outline-none ${getStatusButtonClass(
                          order.status
                        )}`}
                        value={order.status}
                        onChange={(e) => handleStatusChange(i,e)}
                      >
                        <option value="Order Placed">Order Placed</option>
                        <option value="Order Confirmed">Order Confirmed</option>
                        <option value="Order Shipped">Order Shipped</option>
                        <option value="Order Delivered">
                          Order Delivered
                        </option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
