import React from "react";
import Link from "next/link";
import Image from "next/image";

import HireButton from "@/components/button/schedule";

const footer = () => {
  return (
    <>
      <section className="about-section bg-[#0a0c1b] relative flex flex-col items-center justify-center pb-4 md:pb-[5rem] px-[1.5rem] md:px-[3.5rem] overflow-hidden">
        <div className="bg-effect1 w-[20rem] h-[20rem] z-20 rounded-full absolute top-[3rem] transform left-1/2 -translate-x-1/2 bg-[#225C87] blur-[130px]"></div>

        <div className="footer-section bg-[#1E2231] rounded-2xl flex items-center justify-between w-full mx-[4rem] my-[6rem] px-[1rem] md:px-[4rem] py-[1.5rem] md:py-[4.2rem]">
          <div className="flex flex-col justify-start">
            <h1 className="text-white text-[1.1rem] md:text-[1.3rem] mr-6 md:mr-0 font-bold">
              Answer to Creativity and functionality
            </h1>
            <p className="text-[#C2C1C1] text-[1.2rem] hidden md:block w-[80%]">
              I develop native and cross-platform mobile apps that provide
              seamless, intuitive, and engaging user experiences. With expertise
              in mobile-first design and development, I deliver apps that meet
              your business needs and delight your users.
            </p>
          </div>
          <HireButton
            outline={true}
            textcon={"Schedule a meeting"}
            btnwidth={true}
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-[6rem] md:py-[8rem] gap-[3.5rem] mx-auto px-[1.5rem] md:px-[16rem] bg-[#01030C]">
        <Image src="/images/logo.png" width={40} height={40} className="" />
        <h1 className="text-white text-[1.6rem] -mt-[2.5rem] font-medium">
          Ojelade Olamide Emmanuel
        </h1>
        <ul className="flex gap-10">
          <Link href="/">
            <li className="text-[1.2rem] cursor-pointer font-medium text-[#BCBBBB] hover:text-[#1930D0]">
              Home
            </li>
          </Link>
          <Link href="/projects">
            <li className="text-[1.2rem] cursor-pointer font-medium text-[#BCBBBB] hover:text-[#1930D0]">
              Projects
            </li>
          </Link>
          <HireButton textbtn={true} textcon={"Hire me"} />
          <Link href="/blog">
            <li className="text-[1.2rem] cursor-pointer font-medium text-[#BCBBBB] hover:text-[#1930D0]">
              Blog
            </li>
          </Link>
          <Link href="/contact">
            <li className="text-[1.2rem] cursor-pointer font-medium text-[#BCBBBB] hover:text-[#1930D0]">
              Contact
            </li>
          </Link>
        </ul>
        <div className="flex gap-10">
          <Image
            src="/images/instagram.svg"
            width={26}
            height={26}
            className=""
          />
          <Image src="/images/git.svg" width={26} height={26} className="" />
          <Image
            src="/images/linkedin.svg"
            width={26}
            height={26}
            className=""
          />
          <Image
            src="/images/facebook.svg"
            width={26}
            height={26}
            className=""
          />
          <Image
            src="/images/twitter.svg"
            width={26}
            height={26}
            className=""
          />
        </div>
        <p className="text-[1rem] text-[#BFBFBF] font-light">
          Copyright 2024 Ojelade Olamide Emmanuel. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default footer;
