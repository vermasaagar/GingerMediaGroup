import React, { useState } from "react";
import girl from "./girl.jpg";
import { MdPermContactCalendar } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import axios from "axios";

const Profile = ({ data }) => {
  const [isUpdate, setIsUpdate] = useState(true);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [dob, setDob] = useState(null);
  const [contact, setContact] = useState(null);
  const [discription, setDiscription] = useState(null);

  const handleClick = () => {
    setIsUpdate(isUpdate ? false : true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        "https://gingermediagroup.onrender.com/user/editUserDetails?email=" +
          data.email,
        {
          name,
          password,
          dob,
          contact,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      {isUpdate ? (
        <div className="w-[600px] h-72 relative -top-20  bg-shadow flex bg-[#F6F6F6]">
          <img className="h-full w-[50%] pr-2" src={girl} alt="" />
          <div className="flex justify-center items-center w-full">
            <div>
              <h3 className="font-bold text-center">
                Name : <span className="text-[#209bde]">{data.name}</span>
              </h3>
              <p className="font-bold text-center">
                Contact me :{" "}
                <span className="text-[#209bde]">{data.contact}</span>
              </p>
              <p className="font-bold text-center">
                Date of Birth :{" "}
                <span className="text-[#209bde]">{data.dob}</span>
              </p>
              <p className="font-bold text-center">
                Gmail : <span className="text-[#209bde]">{data.email}</span>
              </p>

              <p className="text-center bg-slate-200 p-2 mt-2 text-sm mx-2">
                <span className="text-[#209bde] font-bold">About me : </span>{" "}
                {data.discription}
              </p>

              <button
                className="w-full px-2 hover:bg-[#e76854] bg-[#209bde] font-bold text-white mt-2 py-1 rounded-sm"
                onClick={() => handleClick()}
              >
                Update detail
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-shadow p-2 -mt-10 bg-blue-200">
          <h3 className="text-center font-bold m-1 ">Update Details</h3>
          <div className="w-full">
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
              <FaLock className="inline text-[#209bde] relative left-7 -top-[1px]" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#209bde] w-60 mb-2"
                type="password"
                placeholder="Enter password"
                value={password}
              />
            </div>
          </div>

          <div>
            <MdPermContactCalendar className="inline text-[#209bde] relative left-7 -top-[1px]" />
            <input
              className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#209bde] w-60 mb-2"
              onChange={(e) => setContact(e.target.value)}
              type="text"
              value={contact}
              placeholder="Enter your contact"
            />
          </div>
          <div>
            <input
              onChange={(e) => setDob(e.target.value)}
              className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#209bde] mb-2 w-60 relative ml-4"
              type="date"
              value={dob}
            />
          </div>
          <div>
            <textarea
              rows={4}
              className=" rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#209bde] mb-2 w-48 relative ml-4 text-sm w-60  "
              type="text"
              placeholder="Describe about yourself.."
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>
          <button
            className="w-full hover:bg-[#e76854] px-2 rounded-sm py-1 bg-[#209bde] font-bold text-white"
            onClick={() => {
              handleClick();
              handleUpdate();
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
