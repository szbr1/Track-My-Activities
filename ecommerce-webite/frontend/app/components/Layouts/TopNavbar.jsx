import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function TopNavbar() {
  const text = "Our Name is Know for Trust.";

  return (
    <div className="bg-red-600 h-8 w-full flex justify-center items-center text-md font-semibold text-white relative">
      <div className="flex gap-0.5">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="text-white text-xl cursor-pointer hover:text-black transition-colors duration-200"
          >
            {char}
          </span>
        ))}
      </div>
      <div className="md:flex gap-3 hidden absolute left-8">
        <FaInstagram className="hover:text-black cursor-pointer" />
        <FaFacebook className="hover:text-black cursor-pointer" />
        <FaYoutube className="hover:text-black cursor-pointer" />
      </div>
    </div>
  );
}

export default TopNavbar;
