import React, { useState } from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import {useSelector}  from "react-redux"
import SignIn from "../../pages/SignIn";
const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "All Books",
      link: "/AllBooks",
    },
    {
      title: "Cart",
      link: "/Cart",
    },
    {
      title: "Profile",
      link: "/Profile",
    },
    {
      title: "Admin Profile",
      link: "/Profile",
    },
  ];

 const isLoggedIn =  useSelector((state)=>state.auth.isLoggedIn);
 const role = useSelector((state)=>state.auth.role);
 
 const [mobileNav,setMobileNav] = useState("hidden");

 if(isLoggedIn=== false){
  links.splice(2,4);
 
 };

 if(isLoggedIn === true && role ==='admin'){
  links.splice(2,2);
 };

 if(isLoggedIn === true && role ==='user'){
  links.splice(4,1);
 };

  return (
    <>
      <div className=" w-full z-50   flex bg-zinc-800 items-center justify-between text-white px-9 py-2    ">
        <div>
          <Link to="/" className="flex items-center">
            <img
              className="h-1 m-1"
              src={logo}
              style={{ height: "40px" }}
              alt=""
            />
            <h1 className="text-2xl font-semibold">Bookstore</h1>
          </Link>
        </div>
        <div className="nav-links-bookstore block md:flex items-center gap-4">
          <div className="hidden  md:flex gap-7  items-center justify-center">
            {links.map((items, i) => (
              <React.Fragment key={items.title}>
              {items.title === "Profile" || items.title === "Admin Profile"  ? (
                <Link
                to={items.link}
                
                className="px-4 py-1 border border-blue-500 rounded hover:bg-blue-700 transition-all duration-30 "
                key={i}
              >
                {items.title}
              </Link>
              ) :
              <Link
                to={items.link}
                className="hover:text-blue-500 transition-all   duration-300"
                key={i}
              >
                {items.title}
              </Link>
            }
              </React.Fragment>
            ))}

            {isLoggedIn === false && (
              <>
              <div className="hidden md:flex gap-4">
              <Link
                to="/signin"
                className="px-4 py-1 border border-blue-500 rounded hover:bg-blue-700 transition-all duration-300"
              >
                SignIn
              </Link>

              <Link
                to="/signup"
                className="px-4 py-1 bg-blue-500 rounded hover:bg-blue-700 transition-all duration-300"
              >
                SignUp
              </Link>
            </div>
              </>
            )}
          </div>
          <button className="lg:hidden text-white text-2xl hover:text-zinc-499" onClick={()=>{
            mobileNav === "hidden" ?
            setMobileNav("block"):
            setMobileNav("hidden")
          }}>
            <FaGripLines />
          </button>
        </div>
      </div>

      {/* hidden code for navbar */}
     
       <div className={` ${mobileNav} bg-zinc-800 absolute top-0 left-0 w-full z-50 flex flex-col items-center justify-center text-4xl h-full`}>
        {links.map((items, i) => (
          <Link
          onClick={()=>{
            mobileNav === "hidden" ?
            setMobileNav("block"):
            setMobileNav("hidden")
          }}
            to={items.link}
            className={` ${mobileNav}hover:text-blue-500 transition-all duration-300 mb-3 text-white font-semibold`}
            key={i}
          >
            {items.title}
          </Link>
        ))}

        {isLoggedIn === false && (
          <>
          <Link to="/signin"
          className={` ${mobileNav} px-4 mb-3 py-1 border border-blue-500 rounded hover:bg-blue-700 transition-all duration-300 text-red-500`}
          onClick={() => {
            mobileNav === "hidden" ? setMobileNav("block") : setMobileNav("hidden");
          }}
        >
          SignIn
        </Link>

        <Link
          to="/signup"
          className={` ${mobileNav} px-4 py-1 bg-blue-500 rounded hover:bg-blue-700 transition-all duration-300`}
          onClick={() => {
            mobileNav === "hidden" ? setMobileNav("block") : setMobileNav("hidden");
          }}
        >
          SignUp
        </Link>
          </>
        )}
      </div>

    </>
  );
};

export default Navbar;
