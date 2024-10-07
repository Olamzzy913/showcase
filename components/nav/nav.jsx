import Link from "next/link";
import Image from "next/image";

import { TbMenuDeep } from "react-icons/tb";

import { usePathname } from "next/navigation";

import React, { useState, useEffect, useRef } from "react";

// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Button,
// } from "@nextui-org/react";

const Nav = () => {
  const menuRef = useRef(null);
  const [isToggle, setIsToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const setToggleDisplay = () => {
    setIsToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero")?.offsetHeight || 0;
      if (window.scrollY > heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  return (
    <div
      className={`flex flex-col items-center w-full ${
        isScrolled
          ? "fixed top-6 transform left-1/2 -translate-x-1/2 w-[20rem] md:w-[26rem] lg:w-[90rem] slg:w-[119rem] z-50"
          : "w-full z-50"
      }`}
    >
      <nav
        className={`nav px-[1.5rem] relative md:px-[3.5rem] py-[1.8rem] md:py-8 flex justify-between items-center ${
          isScrolled
            ? "bg-[rgba(236,236,236,0.08)] z-50 rounded-full backdrop-blur w-[32rem] md:w-[26rem] lg:w-[90rem] slg:w-[119rem]"
            : "w-full z-50"
        } `}
      >
        <Link href="/" className="logo flex items-center gap-6">
          <div className="logo-icon">
            <Image
              src="/images/logo.png"
              width={40}
              height={40}
              className="w-[2rem] h-[2rem]"
            />
          </div>
          <h3 className="text-[1.2rem] text-white font-semibold">Emmanuel</h3>
        </Link>
        <div
          onClick={setToggleDisplay}
          className="gap-[3rem] flex md:hidden p-[.4rem] bg-[#4A91E5] text-[1.4rem] rounded-[.6rem] cursor-pointer"
        >
          <TbMenuDeep />
        </div>
        <ul
          ref={menuRef}
          className={` ${
            isToggle ? "flex opacity-100" : "hidden opacity-0"
          } flex-col w-[13rem] absolute  transition-all top-[5rem] right-[1rem] rounded-xl p-3 bg-[#1E2231]`}
        >
          <li className="text-white w-full px-4 py-3 hover:bg-[#4d4a4a63] cursor-pointer rounded-xl text-[1.05rem] font-normal">
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li className="text-white w-full px-4 py-3 hover:bg-[#4d4a4a63] cursor-pointer rounded-xl text-[1.05rem] font-normal">
            <Link href="/projects" className="">
              Projects
            </Link>
          </li>
          <li className="text-white w-full px-4 py-3 hover:bg-[#4d4a4a63] cursor-pointer rounded-xl text-[1.05rem] font-normal">
            <Link href="/blog" className="">
              Blog
            </Link>
          </li>
          <li className="text-white w-full px-4 py-3 hover:bg-[#4d4a4a63] cursor-pointer rounded-xl text-[1.05rem] font-normal">
            <Link href="/contact" className="">
              Contact
            </Link>
          </li>
        </ul>
        <div className="gap-[3rem] hidden md:flex">
          <Link
            href="/"
            className={`text-[1.1rem] ${
              pathname === "/"
                ? "text-blue-800 font-bold"
                : "text-white font-medium hover:text-blue-800"
            } cursor-pointer`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`text-[1.1rem] ${
              pathname === "/projects"
                ? "text-blue-800 font-bold"
                : "text-white font-medium hover:text-blue-800"
            } cursor-pointer`}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={`text-[1.1rem] ${
              pathname === "/blog"
                ? "text-blue-800 font-bold"
                : "text-white font-medium hover:text-blue-800"
            } cursor-pointer`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-[1.1rem] ${
              pathname === "/contact"
                ? "text-blue-800 font-bold hidden"
                : "text-white font-medium hover:text-blue-800"
            } cursor-pointer`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
