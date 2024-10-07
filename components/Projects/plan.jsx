import React from "react";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import { IoFilter } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

import HireButton from "@/components/button/schedule";

const Plan = () => {
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
    handleClick(filter[0], 0);
  }, []);

  const handleClick = (link, index) => {
    setActiveIndex(index);
    setSelectedFilter(link);
  };

  const projectPlans = [
    {
      type: "Basic",
      amount: 440,
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus. Officiis magnam reprehenderit praesentium et atque ipsum, nemo quasi molestias culpa incidunt corporis facere facilis commodi repellat voluptatibus porro ratione.",
      features: [
        "Easy access to building information ",
        "Unique Plus Code system for secure ",
        "User authentication for personalized ",
        "Valuable resource for urban planning,",
      ],
      skill: "UI UX Design",
    },
    {
      type: "Standard",
      amount: 895.0,
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus. Officiis magnam reprehenderit praesentium et atque ipsum, nemo quasi molestias culpa incidunt corporis facere facilis commodi repellat voluptatibus porro ratione.",
      features: [
        "Easy access to building information ",
        "Unique Plus Code system for secure ",
        "User authentication for personalized ",
        "Valuable resource for urban planning,",
      ],
      skill: "UI UX Design",
    },
    {
      type: "Premium",
      amount: 1000.99,
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus. Officiis magnam reprehenderit praesentium et atque ipsum, nemo quasi molestias culpa incidunt corporis facere facilis commodi repellat voluptatibus porro ratione.",
      features: [
        "Easy access to building information ",
        "Unique Plus Code system for secure ",
        "User authentication for personalized ",
        "Valuable resource for urban planning,",
      ],
      skill: "UI UX Design",
    },
    {
      type: "Basic",
      amount: 440,
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus. Officiis magnam reprehenderit praesentium et atque ipsum, nemo quasi molestias culpa incidunt corporis facere facilis commodi repellat voluptatibus porro ratione.",
      features: [
        "Easy access to building information ",
        "Unique Plus Code system for secure ",
        "User authentication for personalized ",
        "Valuable resource for urban planning,",
      ],
      skill: "Web Development",
    },
    {
      type: "Standard",
      amount: 895.0,
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus. Officiis magnam reprehenderit praesentium et atque ipsum, nemo quasi molestias culpa incidunt corporis facere facilis commodi repellat voluptatibus porro ratione.",
      features: [
        "Easy access to building information ",
        "Unique Plus Code system for secure ",
        "User authentication for personalized ",
        "Valuable resource for urban planning,",
      ],
      skill: "Web Development",
    },
    {
      type: "Premium",
      amount: 1000.99,
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus. Officiis magnam reprehenderit praesentium et atque ipsum, nemo quasi molestias culpa incidunt corporis facere facilis commodi repellat voluptatibus porro ratione.",
      features: [
        "Easy access to building information ",
        "Unique Plus Code system for secure ",
        "User authentication for personalized ",
        "Valuable resource for urban planning,",
      ],
      skill: "Web Development",
    },
    {
      type: "Basic",
      amount: 440,
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus. Officiis magnam reprehenderit praesentium et atque ipsum, nemo quasi molestias culpa incidunt corporis facere facilis commodi repellat voluptatibus porro ratione.",
      features: [
        "Easy access to building information ",
        "Unique Plus Code system for secure ",
        "User authentication for personalized ",
        "Valuable resource for urban planning,",
      ],
      skill: "Mobile Development",
    },
    {
      type: "Standard",
      amount: 895.0,
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus. Officiis magnam reprehenderit praesentium et atque ipsum, nemo quasi molestias culpa incidunt corporis facere facilis commodi repellat voluptatibus porro ratione.",
      features: [
        "Easy access to building information ",
        "Unique Plus Code system for secure ",
        "User authentication for personalized ",
        "Valuable resource for urban planning,",
      ],
      skill: "Mobile Development",
    },
    {
      type: "Premium",
      amount: 1000.99,
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus. Officiis magnam reprehenderit praesentium et atque ipsum, nemo quasi molestias culpa incidunt corporis facere facilis commodi repellat voluptatibus porro ratione.",
      features: [
        "Easy access to building information ",
        "Unique Plus Code system for secure ",
        "User authentication for personalized ",
        "Valuable resource for urban planning,",
      ],
      skill: "Mobile Development",
    },
  ];

  const filteredProjectPlans = projectPlans.filter(
    (project) => project.skill === selectedFilter
  );

  const filter = ["UI UX Design", "Web Development", "Mobile Development"];

  return (
    <section className="project-section bg-[#0a0c1b] relative  flex flex-col items-center justify-center pb-[5rem] px-[3.5rem] overflow-hidden">
      <div className="bg-effect1 w-[60rem] h-[30rem] z-20 rounded-full absolute top-[12rem] transform left-1/2 -translate-x-1/2 bg-[#1A2260] blur-[140px]"></div>

      <div className="flex flex-col items-center justify-center h-full py-[6rem] z-30">
        <h1 className="text-white font-semibold text-[1.89rem] headTitle">
          Project Pricing Plan
        </h1>

        <div
          onClick={setToggleDisplay}
          className="filter-mobile mx-auto relative cursor-pointer z-30 mt-6"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 my-[5rem]">
          {filteredProjectPlans.map(
            ({ type, amount, summary, features }, index) => (
              <div
                className="flex flex-col p-6 rounded-[2rem] justify-start bg-[#1D2A4B] w-[28rem] "
                key={index}
              >
                <span className="text-black text-center text-[1rem] bg-[#4A91E5] font-semibold w-[6rem] rounded-full py-2 px-3">
                  {type}
                </span>
                <p className="text-[1.5rem] font-bold text-white mt-4">
                  ${amount} USD
                </p>
                <p className="text-[.85rem] text-[#CBCCCF] mt-2 mb-4">
                  {summary}
                </p>
                <h1 className="mt-4  text-white font-bold text-[1.2rem]">
                  Features
                </h1>
                {features.map((features, index) => (
                  <div key={index} className="flex items-center gap-6 mt-1">
                    <FaCircleCheck className="text-[1.2rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1rem] font-medium">
                      {features}
                    </h1>
                  </div>
                ))}
                <Link
                  href="/"
                  className="px-8 py-3 w-[24.8rem] mb-4 mt-16 text-center mx-auto border hover:bg-transparent border-[#4A91E5] bg-[#4A91E5]  transition-all text-black hover:text-white text-[1.1rem] rounded-full"
                >
                  Make payment
                </Link>
                <HireButton outline={true} textcon={"Hire me"} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Plan;
