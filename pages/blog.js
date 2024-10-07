import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { useState } from "react";

import Nav from "@/components/nav/nav";

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = (data, index) => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title> Portfolio | Blog</title>
      </Head>
      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 backdrop-blur-sm">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-[#14162bb9] backdrop-blur-sm opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-[#14162B] rounded-[1rem] text-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg  w-full">
            <div className="py-[1rem] text-left px-[1rem]">
              <div className="flex justify-end gap-[10rem] md:gap-[25rem] items-center">
                <div
                  className="modal-close cursor-pointer float-end z-50"
                  onClick={toggleOverlay}
                >
                  <i className="fas fa-times py-[.4rem] px-[.6rem] text-[1rem] bg-[#0A0C1B] text-[#4A91E5] rounded-full"></i>
                </div>
              </div>
              <div className="head flex flex-col items-center justify-center">
                <Image
                  src="/images/logo.png"
                  width={30}
                  height={30}
                  className="-mt-8"
                />
                <h1 className="mt-4 text-white font-bold text-[1.2rem]">
                  Coming soon.....
                </h1>
              </div>
              <div className="body flex flex-col justify-center items-center w-full">
                <p className="mt-1 text-[#dfdfdf] font-light text-[1rem]">
                  Stay turned so you can get updated
                </p>
                <Link
                  href="/"
                  className="px-8 py-3 w-[20rem] mt-8 text-center mx-auto border hover:bg-transparent border-[#4A91E5] bg-[#4A91E5]  transition-all text-black hover:text-white text-[1.1rem] rounded-full"
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 mb-6 w-[20rem] mt-8 text-center mx-auto border hover:text-black border-[#4A91E5] hover:bg-[#4A91E5] transition-all text-white text-[1.1rem] rounded-full"
                >
                  contact me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="hero bg-[#0a0c1b] h-svh">
        <div className="flex flex-col items-center  justify-start h-svh w-full px-[1rem]">
          <div className="bg-effect1 w-[20rem] h-[20rem] z-20 rounded-full absolute top-[3rem] transform left-1/2 -translate-x-1/2 bg-[#225C87] blur-[130px]"></div>
          <Nav />
          <div className="content-container flex flex-col justify-center  items-center h-[480px] md:h-[500px] slg:h-[700px] ">
            <h6 className="text-[.95rem] md:text-[1.2rem] font-bold text-blue-800">
              My Inspirational World
            </h6>
            <h1 className="text-[1.8rem] md:text-[2.8rem] text-center font-bold text-white capitalised">
              Get inspired with our amazing Researching skill
            </h1>
            <p className="text-[.98rem] md:text-[1.05rem] text-center text-gray-400">
              Exploring the intersection of design, technology, and innovation
              to deliver impactful results, Where attention to detail meets
              innovative thinking Empowering businesses through strategic design
              and development.
            </p>

            <Link
              href="/blog"
              className="px-8 py-3 mt-8 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
            >
              Let's Build Something Amazing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
