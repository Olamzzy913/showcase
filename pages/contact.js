import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { useState } from "react";

import { IoLocation } from "react-icons/io5";
import { IoMdMail, IoMdCall } from "react-icons/io";

import Nav from "@/components/nav/nav";
import Footer from "@/components/Home/footer";
import HireButton from "@/components/button/schedule";

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
        <title> Portfolio | Contact</title>
      </Head>

      <section className="hero bg-[#0a0c1ba8]">
        <div className="flex flex-col  h-svh w-full">
          <div className="flex flex-col absolute w-full h-full text-white bg-[rgba(10,12,27,0.84)]  md:bg-gradient-to-r md:from-[#0a0c1b7e] md:from-65% md:to-[rgba(58,40,13,0.65)]">
            <Nav />
            <div className="flex flex-col border-l-4 border-[#4A91E5] mt-[8rem] ml-[1.5rem] md:ml-[10rem] pl-10 gap-2 justify-start">
              <p className="text-[1.05rem] text-gray-400">My Portfolio World</p>
              <h1 className="text-[3rem] leading-[3rem] font-bold text-white capitalised">
                Contacts
              </h1>
            </div>
            {/* <div className="flex gap-8 justify-start mt-6 ml-[1.5rem] md:ml-[10rem]"> */}
            <div className="flex  gap-4 md:gap-20 justify-start mt-6 ml-[1.5rem] md:ml-[10rem]">
              {/* <div className="grid grid-rows-1  gap-4 justify-start items-center">
                <div className="flex gap-2 justify-center items-center">
                  <IoLocation className="" />
                  <h2 className="font-bold ">Address</h2>
                </div>
                <p className="text-[.9rem] text-gray-400">
                  3 Anuoluwapo street, Bamako Estate, Lagos State, Nigeria.
                </p>
              </div> */}
              <div className="flex flex-col gap-4 justify-start items-center">
                <div className="flex gap-2 justify-center items-center">
                  <IoMdMail className="" />
                  <h2 className="font-bold ">Gmail</h2>
                </div>
                <p className="text-[.9rem] cursor-pointer text-gray-400">
                  emmanuelojelade7@gmail.com
                </p>
              </div>
              <div className="flex flex-col gap-4 justify-start items-center">
                <div className="flex gap-2 justify-center items-center">
                  <IoMdCall className="" />
                  <h2 className="font-bold ">Phone</h2>
                </div>
                <p className="text-[.9rem] text-gray-400">0904-502-4171</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-start mt-[14rem] ml-[1.5rem] md:ml-[10rem]">
              <h1 className="text-[1.5rem] border-l-2 border-[#4A91E5] pl-8 leading-[1.5rem] font-medium text-white capitalised">
                Get in touch
              </h1>

              <p className="text-[1.05rem] text-gray-400 w-[34rem] md:w-[40rem]">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper scelerisque
                lacus venenatis fusce cras eget pretium elementum. Elementum
                orci nunc viverra nulla etiam malesuada sit. Sem ultrices diam
                nulla felis cras volutpat elementum donec. Ut augue nisl ut
                blandit morbi elit.
              </p>
            </div>
            <div className="mt-12 ml-[1.5rem] md:ml-[10rem]">

            <HireButton
              outline={true}
              textcon={"Schedule a meeting"}
              btnwidth={true}
              />
              </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0693946526835!2d3.3505873737305896!3d6.638304621821194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ee910de18b%3A0xb273767ee45aa1ec!2s22%20Bamako%20St%2C%20Ojodu%2C%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1725292214658!5m2!1sen!2sng"
            className="w-full h-svh"
          ></iframe>
        </div>
      </section>

      <section className="bg-[#0a0c1b] relative overflow-hidden">
        <div className="flex flex-col items-center  justify-center w-full">
          <div className="bg-effect1 w-[20rem] h-[20rem] z-20 rounded-full absolute top-[3rem] transform left-1/2 -translate-x-1/2 bg-[#225C87] blur-[130px]"></div>

          <div className="content-container flex flex-col justify-center px-[1.5rem] md:px-[4rem] items-center h-[480px] md:h-[500px] ">
            <h6 className="text-[.95rem] md:text-[1.2rem] font-bold text-blue-800">
              My Portfolio World
            </h6>
            <h1 className="text-[1.8rem] md:text-[2.8rem] text-center font-bold text-white capitalised">
              Bring your Ideas, I’ll bring it to life!
            </h1>
            <p className="text-[.98rem] md:text-[1.05rem] text-gray-400 text-center">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper scelerisque
              lacus venenatis fusce cras eget pretium elementum. Elementum orci
              nunc viverra nulla etiam malesuada sit. Sem ultrices diam nulla
              felis cras volutpat elementum donec. Ut augue nisl ut blandit
              morbi elit. Lorem ipsum dolor sit amet consectetur. Ullamcorper
              scelerisque lacus venenatis fusce cras eget pretium elementum.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-8">
              <HireButton outline={true} textcon={"Schedule a meeting"} />

              <Link
                href="/blog"
                className="px-8 py-3 text-center border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
              >
                Let's Build Something Amazing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hero;
