// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-zinc-800  text-white py-4">
      
//         <div className="flex-start gap-4 space-x-8">
//         </div>
//         <div className="flex gap-4 space-x-9">
//           <a href="/terms" className="hover:text-blue-500 transition-all duration-300">
//             Terms
//           </a>
//           <a href="/privacy" className="hover:text-blue-500 transition-all duration-300">
//             Privacy
//           </a>
//           <a href="/contact" className="hover:text-blue-500 transition-all duration-300">
//             Contact
//           </a>
//         </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Bookstore App. All rights reserved by Balhara.</p>
          </div>
          <div className="flex gap-4 space-x-9">
            <p className="hover:text-blue-500 transition-all duration-300">Terms</p>
            <p className="hover:text-blue-500 transition-all duration-300">Privacy</p>
            <p className="hover:text-blue-500 transition-all duration-300">Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
