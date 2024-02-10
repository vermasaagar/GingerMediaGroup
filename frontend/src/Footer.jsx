import React from "react";
import { IoIosHeart } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-1 text-[#df6969] h-16 text-base font-semibold border-t-2 bg-shadow ">
      <div className={`flex items-center relative gap-1 `}>
        <FaGithubSquare className="text-xl" />
        
        <FaLinkedin className="text-xl" />
      </div>
      <h3 className="">
        || Developed by <IoIosHeart className="inline text-red-600" /> Sagar Verma
      </h3>
    </div>
  );
};

export default Footer;
