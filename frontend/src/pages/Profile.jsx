import React, { useEffect, useState } from "react";
import Sidebar from "../components/Profile/Sidebar";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import MobileNav from "../components/Profile/MobileNav";

const Profile = () => {
  // const  isLoggedIn = useSelector();

  const [Profile, setProfile] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/get-user-info",
        { headers }
      );
      setProfile(response.data);
    };
    fetch();
  }, []);
  return (
    <div className="bg-zinc-900  flex flex-col md:flex-row h-auto  ">
      {!Profile && (
        <div className="w-full h-[100%] flex items-center justify-center">
          <Loader />
        </div>
      )}
      {Profile && (
        <>
          <div className="w-full  md:w-1/6">
            <Sidebar data={Profile} />
            <MobileNav />
          </div>
          {/* <div className="w-full  md:w-1/6"> */}
            
          {/* </div> */}
        </>
      )}
      <div></div>
      <div className="w-5/6">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
