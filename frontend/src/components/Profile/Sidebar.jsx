import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { IoIosLogOut } from "react-icons/io";
import {authActions} from "../../store/auth"
const Sidebar = ({ data }) => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const role = useSelector((state) => state.auth.role);
  return (
    <div className="bg-zinc-800 p-4 flex  flex-col items-center justify-between rounded lg:h-[100%]">
      <div className="lg:h-[100vh] flex flex-col justify-between items-center">
      <div className="flex items-center flex-col justify-center">
        <img src={data.avatar} className="h-[12vh]" alt="" />
        <h1 className="mt-1 text-2xl text-red-500 font-semibold ">
          {data.username}
        </h1>
        <p className="mt-1 text-normal text-zinc-300 overflow-wrap break-all">
          {data.address}
        </p>
        <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block"></div>

          </div>
        {role === "user" && <div className="w-full  flex-col items-start justify-start hidden lg:flex">
          <Link to="/profile" className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all">
            Favorites
          </Link>
          {/* <Link to="/profile" className='text-blue-500 hover:underline'>Profile</Link> */}
          <Link
            to="/profile/order-history"
            className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all"
          >
            Order History
          </Link>
          <Link to="/profile/settings" className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all">
            Settings
          </Link>
        </div>}

            {/* admin section for user  changing settings */}
        {role === "admin" && (
          <div className="  flex-col items-center justify-center hidden lg:flex">
          <Link to="/Profile" className="text-zinc-100 font-semibold  py-2 text-center hover:bg-zinc-900 rounded transition-all">
            All orders 
          </Link>
          <Link
            to="/Profile/add-book"
            className="text-zinc-100 font-semibold  py-2 text-center hover:bg-zinc-900 rounded transition-all"
          >
            Add book
          </Link>
          
        </div> 
        )}
        <button className="bg-zinc-900 w-3/6 lg:w-full mt-4 lg:my-0 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300 "
        onClick={()=>{
          dispatch(authActions.logout());
          dispatch(authActions.changeRole("user"));
          localStorage.clear('id');
          localStorage.clear('token');
          localStorage.clear('role');
          history('/');
        }}
        >Log-Out < IoIosLogOut className="ms-4"/></button>
      </div>
    </div>
  );
};

export default Sidebar;
