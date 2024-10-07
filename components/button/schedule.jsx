import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
// import { Button } from "@nextui-org/react";

import { RiArrowDropDownLine } from "react-icons/ri";

const HireButton = ({ outline, active, textbtn, textcon, btnwidth }) => {
  const router = useRouter();
  const [showOverlay, setShowOverlay] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    meetingType: "Web Development",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
    alert(
      "Sorry still under construction. Reach out through email or call at my contact page"
    );
    resetFormFields();
    router.push("/contact");
  };
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const resetFormFields = () => {
    setFormData({
      email: "",
      meetingType: "Web Development",
      date: "",
      time: "",
    });
  };

  return (
    <>
      {showOverlay && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 backdrop-blur-sm">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-800 backdrop-blur-sm opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-[#14162B] rounded-[1rem] text-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="py-[2rem] text-left px-[2rem]">
                <div className="flex justify-end gap-[10rem] md:gap-[25rem] items-center">
                  <div
                    className="modal-close cursor-pointer float-end z-50"
                    onClick={toggleOverlay}
                  >
                    <i className="fas fa-times py-[.4rem] px-[.6rem] text-[1.2rem] bg-[#0A0C1B] text-[#4A91E5] rounded-full"></i>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <form
                    onSubmit={handleSubmit}
                    className=" rounded-lg p-8 w-full max-w-lg"
                  >
                    <div className="head flex flex-col items-center justify-center">
                      <Image
                        src="/images/logo.png"
                        width={30}
                        height={30}
                        className="-mt-8"
                      />
                      <p className="text-[1.2rem] font-medium text-center capitalize mb-[1.4rem] mt-[1rem]">
                        Schedule a meeting
                      </p>
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full py-2 pl-2 border-b border-blue-500 bg-[#14162B] text-white focus:outline-none focus:ring-1 focus:ring-[#14162B]"
                      />
                    </div>

                    {/* Meeting Type Select */}
                    <div className="mb-4">
                      <label
                        htmlFor="meetingType"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Meeting Type
                      </label>
                      <select
                        name="meetingType"
                        value={formData.meetingType}
                        onChange={handleChange}
                        className="w-full py-2 pl-2 border-b border-blue-500 bg-[#14162B] text-white focus:outline-none focus:ring-1 focus:ring-[#14162B]"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Mobile Development">
                          Mobile Development
                        </option>
                      </select>
                    </div>

                    {/* Date Input */}
                    <div className="mb-4">
                      <label
                        htmlFor="date"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full py-2 pl-2 border-b border-blue-500 bg-[#14162B] text-white focus:outline-none focus:ring-1 focus:ring-[#14162B]"
                      />
                    </div>

                    {/* Time Input */}
                    <div className="mb-6">
                      <label
                        htmlFor="time"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full py-2 pl-2 border-b border-blue-500 bg-[#14162B] text-white focus:outline-none focus:ring-1 focus:ring-[#14162B]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                    >
                      Schedule Meeting
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={toggleOverlay}
        className={`${
          outline &&
          "px-8 py-3 text-white border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all"
        } ${
          active &&
          "px-8 py-3 text-white bg-blue-400 hover:bg-blue-500 shadow-md shadow-[rgba(74,144,229,0.21)]"
        } ${
          textbtn &&
          "text-[#BCBBBB] hover:text-[#1930D0] px-0 py-0 text-[1.2rem]"
        } ${
          btnwidth && "w-[22rem] md:w-[15%]"
        }  transition-all  text-[1.1rem] rounded-full`}
      >
        {textcon}
      </button>
    </>
  );
};

export default HireButton;
