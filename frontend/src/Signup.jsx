import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import logo from "./logo.svg";
import { useNavigate } from "react-router";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [dob, setDob] = useState(null);
  const [contact, setContact] = useState(null);
  const [discription, setDiscription] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://gingermediagroup.onrender.com/user/signup",
        {
          name: name,
          email: email,
          password: password,
          contact: contact,
          dob: dob,
          discription: discription,
        }
      );

      if (response.status == 200) {
        navigate("/login");
      }
    } catch (error) {
      alert("error");
      console.error("Error occurred during signup:", error);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center gap-5 h-[77vh] bg-gray-800">
      <div className="flex items-center justify-center flex-col lg:flex-row">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col text-center bg-blue-200 bg-shadow pl-5 p-7 mb-1 test rounded-sm lg:mt-12"
        >
          <h1 className="font-bold text-lg relative text-[#1A1A1A] -top-1">
            Sign up
          </h1>

          <div>
            <FaCircleUser className="inline relative left-7 -top-[1px] text-[#209bde]" />
            <input
              onChange={(e) => setName(e.target.value)}
              className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#209bde] w-60 "
              type="text"
              placeholder="Enter your name"
              value={name}
            />
          </div>

          <div className="flex flex-col">
            <div>
              <MdEmail className="inline text-[#209bde]  relative left-7 text-lg -top-[1px]" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#209bde]  w-60"
                type="email"
                placeholder="Enter your email"
                value={email}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <FaLock className="inline text-[#209bde] relative left-7 -top-[1px]" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#209bde] mb-2  w-60"
                type="password"
                placeholder="Enter password"
                value={password}
              />
            </div>
          </div>

          <div>
            <MdPermContactCalendar className="inline text-[#209bde] relative left-7 -top-[1px]" />
            <input
              className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#209bde] mb-2  w-60"
              onChange={(e) => setContact(e.target.value)}
              type="text"
              value={contact}
              placeholder="Enter your contact"
            />
          </div>

          <div>
            <input
              onChange={(e) => setDob(e.target.value)}
              className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#209bde] mb-2 w-48 relative ml-4  w-60"
              type="date"
              value={dob}
            />
          </div>

          <div>
            <textarea
              rows={4}
              className=" rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#209bde] mb-2 w-48 relative ml-4 text-sm  w-60 "
              type="text"
              placeholder="Describe about yourself.."
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>

          <button
            onClick={(e) => handleSignup(e)}
            className="p-1 rounded-sm bg-[#209bde] relative left-2 text-white font-bold hover:bg-[#e76854] duration-300"
          >
            Sign up
          </button>

          <p onClick={() => handleLogin()} className=" text-[#1A1A1A] m-1">
            Already have an account ?
            <span className="text-[#209bde] ml-1 cursor-pointer relative z-50">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
