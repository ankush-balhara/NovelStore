import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const MobileNav = () => {
  

  const role = useSelector((state) => state.auth.role);

  return (
    <>
    {role === "user" &&  (
      <div className="w-full flex items-center justify-center lg:hidden">
      <Link
        to="/profile/order-history"
        className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all"
      >
        Order History
      </Link>
      <Link
        to="/profile/settings"
        className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all"
      >
        Settings
      </Link>
    </div>
    )}

      {role === "admin" && (
        <div className="w-full flex items-center justify-center lg:hidden">
        <Link
          to="/Profile"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all"
        >
          All Orders 
        </Link>
        <Link
          to="/Profile/add-book"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all"
        >
          Add Book
        </Link>
      </div>
      )}
    
    </>
  );
};

export default MobileNav;
