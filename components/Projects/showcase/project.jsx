import React from "react";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import { IoFilter } from "react-icons/io5";

import Card from "@/components/Projects/showcase/card";

const Showcase = () => {
  const filterRef = useRef(null);
  const [isToggle, setIsToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("");

  const setToggleDisplay = () => {
    setIsToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsToggle(false);
      }
    };

    if (isToggle) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isToggle]);

  useEffect(() => {
    // Set the active menu on mount
    handleClick(filter[1], 1);
  }, []);

  const handleClick = (link, index) => {
    setActiveIndex(index);
    setSelectedFilter(link);
  };

  const filter = ["UI UX Design", "Web Development", "Mobile Development"];

  return (
    <>
      <section className="project-section bg-[#0a0c1b] relative flex flex-col items-center justify-center pb-[5rem] px-[1.5rem] md:px-[3.5rem] overflow-hidden">
        <div className="bg-effect2 w-[60rem] h-[30rem] z-20  absolute -top-[4rem] -left-[4rem] bg-[#1A2260] blur-[140px]"></div>
        <div className="bg-effect2 w-[20rem] h-[20rem] z-20  absolute -buttom-[4rem] -right-[4rem] bg-[#1A2260] blur-[140px]"></div>

        <div className="flex flex-col items-center justify-center h-full z-30">
          <h1 className="text-white font-semibold text-[1.89rem] mt-[6rem]">
            Showcasing My Expertise
          </h1>

          <p className="text-white text-center font-light text-[1.3rem] mb-[1rem]">
            Click on each image to get the project overview
          </p>

          <div
            onClick={setToggleDisplay}
            className="filter-mobile mx-auto relative cursor-pointer z-30"
          >
            <div className="flex md:hidden text-[1.2rem] cursor-pointer text-white z-30 gap-[1rem] items-center rounded-xl justify-between px-4 py-2 border border-[#4A91E5]">
              <IoFilter />
              {selectedFilter === "UI UX Design" && (
                <h1 className="font-light">UI UX Design</h1>
              )}
              {selectedFilter === "Web Development" && (
                <h1 className="font-light">Web Development</h1>
              )}
              {selectedFilter === "Mobile Development" && (
                <h1 className="font-light">Mobile Development</h1>
              )}
            </div>
            <ul
              ref={filterRef}
              className={` ${
                isToggle ? "flex opacity-100" : "hidden opacity-0"
              } flex-col w-[14rem] absolute  transition-all top-[3rem] transform left-1/2 -translate-x-1/2 rounded-xl p-3 bg-[#1E2231]`}
            >
              <li
                onClick={() => {
                  setSelectedFilter("UI UX Design");
                }}
                className="text-white w-full px-4 py-3 hover:bg-[#4d4a4a63] cursor-pointer rounded-xl text-[1.05rem] font-normal"
              >
                UI UX Design
              </li>
              <li
                onClick={() => {
                  setSelectedFilter("Web Development");
                }}
                className="text-white w-full px-4 py-3 hover:bg-[#4d4a4a63] cursor-pointer rounded-xl text-[1.05rem] font-normal"
              >
                Web Development
              </li>
              <li
                onClick={() => {
                  setSelectedFilter("Mobile Development");
                }}
                className="text-white w-full px-4 py-3 hover:bg-[#4d4a4a63] cursor-pointer rounded-xl text-[1.05rem] font-normal"
              >
                Mobile Development
              </li>
            </ul>
          </div>

          <div className="filter-web hidden md:block z-30">
            <ul className="flex gap-[3rem] my-[2rem] z-30">
              {filter.map((link, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(link, index)}
                  className={
                    activeIndex === index
                      ? "activeMenu text-white font-semibold text-[1.5rem] cursor-pointer transition-all"
                      : "defualtMenu text-[rgba(131,129,129,0.51)] font-semibold text-[1.5rem] cursor-pointer transition-all"
                  }
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <Card selectedFilter={selectedFilter} />

          <button className="px-8 py-3 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full">
            See more
          </button>
        </div>
      </section>
    </>
  );
};

export default Showcase;
