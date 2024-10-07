import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import { CiMobile2 } from "react-icons/ci";
import { MdWebAsset } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
import { CgDesignmodo } from "react-icons/cg";
import { RiFlutterFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

import HireButton from "@/components/button/schedule";

const Service = () => {
  const [activeSection, setActiveSection] = useState("UI UX");

  return (
    <>
      <section className="service-section relative h-svh bg-[rgba(6,8,14,0.86)] flex flex-col md:items-center justify-start md:justify-center pb-[5rem] px-[1.5rem] md:px-[3.5rem] overflow-hidden">
        <div className="hidden md:block absolute top-1/2 -right-[28rem] transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full">
            <div className="bg-style w-[120rem] h-[120rem] -z-10 rounded-full bg-[rgba(10,12,27,0.67)] absolute top-1/2 -right-[.5rem] transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="bg-style w-[120rem] h-[120rem] -z-0 rounded-full bg-[rgba(10,12,27,0.92)] absolute top-1/2 right-[24rem] transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="flex flex-col md:hidden gap-[5rem] items-center py-[4rem] md:py-[12rem] w-full z-10">
          <div className="flex flex-col justify-start w-full">
            <h1 className="text-white font-semibold text-[1.6rem] mb-8">
              Specialist
            </h1>
            <div className="flex flex-col justify-start gap-6">
              <div className="flex w-full justify-between items-center pb-6 border-b border-[#f3f2f29d]">
                <button
                  className={`text-white  text-[1.25rem] flex justify-start items-center rounded-full w-[18rem]`}
                >
                  <CgDesignmodo className="text-[1.5rem] mr-4" />
                  UI UX Design
                </button>
                {activeSection === "UI UX" ? (
                  <IoIosArrowDropupCircle className="text-[2rem] text-white cursor-pointer" />
                ) : (
                  <IoIosArrowDropdownCircle
                    onClick={() => setActiveSection("UI UX")}
                    className="text-[2rem] text-white cursor-pointer"
                  />
                )}
              </div>
              {activeSection === "UI UX" && (
                <div className="UI UX opacity-100 transition-all">
                  <Image
                    src="/figm.svg"
                    width={30}
                    height={30}
                    className="p-[.65rem] bg-black rounded-full"
                    alt="Figma"
                  />
                  <h1 className="mt-6 text-white font-bold text-[1.24rem]">
                    User Interface and User Experience
                  </h1>
                  <p className="mt-3 text-[#dfdfdf] font-light text-[1.12rem]">
                    I create intuitive, user-centered, and visually stunning
                    digital experience that drive business results. Through
                    research, wireframing, prototying and testing. I deliver
                    designs that delight the users and meet your business goals.
                  </p>
                  <div className="flex items-center gap-6 mt-6">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      User research and analysis for informed design decision
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Wireframing and Prototyping for interactive feedbacks
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Visual design for stunning and consistent branding
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Usability Testing and Iteration for refined user
                      Experience
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Design system for scalable and maintainable design
                    </h1>
                  </div>
                  <div className="flex gap-6 mt-12">
                    <HireButton active={true} textcon={"Hire me"} />
                    <Link
                      href="/projects"
                      className="px-8 py-3 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
                    >
                      Explore my creativity
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-start mt-8 gap-6">
              <div className="flex w-full justify-between items-center pb-6 border-b border-[#f3f2f29d]">
                <button
                  className={`text-white  text-[1.25rem] flex justify-start items-center rounded-full w-[18rem]`}
                >
                  <MdWebAsset className="text-[1.5rem] mr-4" />
                  Web Development
                </button>{" "}
                {activeSection === "Web" ? (
                  <IoIosArrowDropupCircle className="text-[2rem] text-white cursor-pointer" />
                ) : (
                  <IoIosArrowDropdownCircle
                    onClick={() => setActiveSection("Web")}
                    className="text-[2rem] text-white cursor-pointer"
                  />
                )}
              </div>
              {activeSection === "Web" && (
                <div className="web opacity-100 transition-all">
                  <SiNextdotjs className="p-[.65rem] text-[3rem] text-black bg-white rounded-full" />
                  <h1 className="mt-6 text-white font-bold text-[1.24rem]">
                    Website Development
                  </h1>
                  <p className="mt-3 text-[#dfdfdf] font-light text-[1.12rem]">
                    I craft robust, scalable, and visually appealing web
                    applications that meet your business needs. With expertise
                    in modern web technologies, I deliver fast, reliable, and
                    secure solutions that enhance user experience and drive
                    engagement.
                  </p>
                  <div className="flex items-center gap-6 mt-6">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Responsive web deign for seemless user experience
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Frontend-development with Vue,Nuxt,React,Next.
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Backend resources Firebase, Node.
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Deployment Netlify or provided hosting platform
                    </h1>
                  </div>
                  <div className="flex gap-6 mt-12">
                    <HireButton active={true} textcon={"Hire me"} />
                    <Link
                      href="/projects"
                      className="px-8 py-3 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
                    >
                      Explore my creativity
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-start mt-8 gap-6">
              <div className="flex w-full justify-between items-center pb-6 border-b border-[#f3f2f29d]">
                <button
                  className={`text-white  text-[1.25rem] flex justify-start items-center rounded-full w-[18rem]`}
                >
                  <CiMobile2 className="text-[1.5rem] mr-4" />
                  Mobile Development
                </button>
                {activeSection === "Mobile" ? (
                  <IoIosArrowDropupCircle className="text-[2rem] text-white cursor-pointer" />
                ) : (
                  <IoIosArrowDropdownCircle
                    onClick={() => setActiveSection("Mobile")}
                    className="text-[2rem] text-white cursor-pointer"
                  />
                )}
              </div>
              {activeSection === "Mobile" && (
                <div className="mobile opacity-100 transition-all">
                  <RiFlutterFill className="p-[.65rem] text-[3rem] text-blue-700 bg-black rounded-full" />
                  <h1 className="mt-6 text-white font-bold text-[1.24rem]">
                    Mobile Development
                  </h1>
                  <p className="mt-3 text-[#dfdfdf] font-light text-[1.12rem]">
                    I develop native and cross-platform mobile apps that provide
                    seamless, intuitive, and engaging user experiences. With
                    expertise in mobile-first design and development, I deliver
                    apps that meet your business needs and delight your users.
                  </p>
                  <div className="flex items-center gap-6 mt-6">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Cross-platform development with Flutter
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Mobile-first design for optimized user experience
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Integration with third party APIs and service
                    </h1>
                  </div>
                  <div className="flex items-center gap-6 mt-2">
                    <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                    <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                      Publishing on App store and Google Play store
                    </h1>
                  </div>
                  <div className="flex gap-6 mt-12">
                    <HireButton active={true} textcon={"Hire me"} />
                    <Link
                      href="/projects"
                      className="px-8 py-3 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
                    >
                      Explore my creativity
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-[5rem] items-center justify-end py-[12rem] w-full mr-[10rem] z-10">
          <div className="flex flex-col justify-start">
            <h1 className="text-white font-semibold text-[1.6rem] mb-8">
              Specialist
            </h1>
            <div className="flex flex-col justify-start gap-6">
              <button
                className={`px-6 py-3 ${
                  activeSection === "UI UX"
                    ? "bg-white text-black"
                    : "bg-[#1E2231] text-white"
                } text-[1.25rem] flex justify-start items-center rounded-full w-[18rem]`}
                onClick={() => setActiveSection("UI UX")}
              >
                <CgDesignmodo className="text-[1.5rem] mr-4" />
                UI UX Design
              </button>
              <button
                className={`px-6 py-3 ${
                  activeSection === "Web"
                    ? "bg-white text-black"
                    : "bg-[#1E2231] text-white"
                } text-[1.25rem] flex justify-start items-center rounded-full w-[18rem]`}
                onClick={() => setActiveSection("Web")}
              >
                <MdWebAsset className="text-[1.5rem] mr-4" />
                Web Development
              </button>
              <button
                className={`px-6 py-3 ${
                  activeSection === "Mobile"
                    ? "bg-white text-black"
                    : "bg-[#1E2231] text-white"
                } text-[1.25rem] flex justify-start items-center rounded-full w-[18rem]`}
                onClick={() => setActiveSection("Mobile")}
              >
                <CiMobile2 className="text-[1.5rem] mr-4" />
                Mobile Development
              </button>
            </div>
            <div className="flex gap-6 mt-8">
              <Image
                src="/figm.svg"
                width={31}
                height={31}
                className="p-[.65rem] bg-[#1E2231] rounded-full"
                alt="Figma"
              />
              <SiNextdotjs className="p-[.65rem] text-[3rem] text-[#1E2231] bg-white rounded-full" />
              <RiFlutterFill className="p-[.65rem] text-[3rem] text-blue-700 bg-[#1E2231] rounded-full" />
            </div>
          </div>
          <div className="flex flex-col justify-start p-8 w-[60rem] rounded-[2rem] bg-[#3e3e41]">
            {activeSection === "Mobile" && (
              <div className="mobile opacity-100 transition-all">
                <RiFlutterFill className="p-[.65rem] text-[3rem] text-blue-700 bg-black rounded-full" />
                <h1 className="mt-6 text-white font-bold text-[1.24rem]">
                  Mobile Development
                </h1>
                <p className="mt-3 text-[#dfdfdf] font-light text-[1.12rem]">
                  I develop native and cross-platform mobile apps that provide
                  seamless, intuitive, and engaging user experiences. With
                  expertise in mobile-first design and development, I deliver
                  apps that meet your business needs and delight your users.
                </p>
                <div className="flex items-center gap-6 mt-6">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Cross-platform development with Flutter
                  </h1>
                </div>
                <div className="flex items-center gap-6 mt-2">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Mobile-first design for optimized user experience
                  </h1>
                </div>
                <div className="flex items-center gap-6 mt-2">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Integration with third party APIs and service
                  </h1>
                </div>
                <div className="flex items-center gap-6 mt-2">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Publishing on App store and Google Play store
                  </h1>
                </div>
                <div className="flex gap-6 mt-12">
                  <HireButton active={true} textcon={"Hire me"} />
                  <Link
                    href="/projects"
                    className="px-8 py-3 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
                  >
                    Explore my creativity
                  </Link>
                </div>
              </div>
            )}
            {activeSection === "Web" && (
              <div className="web opacity-100 transition-all">
                <SiNextdotjs className="p-[.65rem] text-[3rem] text-black bg-white rounded-full" />
                <h1 className="mt-6 text-white font-bold text-[1.24rem]">
                  Website Development
                </h1>
                <p className="mt-3 text-[#dfdfdf] font-light text-[1.12rem]">
                  I craft robust, scalable, and visually appealing web
                  applications that meet your business needs. With expertise in
                  modern web technologies, I deliver fast, reliable, and secure
                  solutions that enhance user experience and drive engagement.
                </p>
                <div className="flex items-center gap-6 mt-6">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Responsive web deign for seemless user experience
                  </h1>
                </div>
                <div className="flex items-center gap-6 mt-2">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Frontend-development with Html,
                    Css,Javascript,Vue,Nuxt,React,Next.
                  </h1>
                </div>
                <div className="flex items-center gap-6 mt-2">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Backend resources Firebase, Node.
                  </h1>
                </div>
                <div className="flex items-center gap-6 mt-2">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Deployment Netlify or provided hosting platform
                  </h1>
                </div>
                <div className="flex gap-6 mt-12">
                  <HireButton active={true} textcon={"Hire me"} />
                  <Link
                    href="/projects"
                    className="px-8 py-3 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
                  >
                    Explore my creativity
                  </Link>
                </div>
              </div>
            )}
            {activeSection === "UI UX" && (
              <div className="UI UX opacity-100 transition-all">
                <Image
                  src="/figm.svg"
                  width={30}
                  height={30}
                  className="p-[.65rem] bg-black rounded-full"
                  alt="Figma"
                />
                <h1 className="mt-6 text-white font-bold text-[1.24rem]">
                  User Interface and User Experience
                </h1>
                <p className="mt-3 text-[#dfdfdf] font-light text-[1.12rem]">
                  I create intuitive, user-centered, and visually stunning
                  digital experience that drive business results. Through
                  research, wireframing, prototying and testing. I deliver
                  designs that delight the users and meet your business goals.
                </p>
                <div className="flex items-center gap-6 mt-6">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    User research and analysis for informed design decision
                  </h1>
                </div>
                <div className="flex items-center gap-6 mt-2">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Wireframing and Prototyping for interactive feedbacks
                  </h1>
                </div>
                <div className="flex items-center gap-6 mt-2">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Visual design for stunning and consistent branding
                  </h1>
                </div>
                <div className="flex items-center gap-6 mt-2">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Usability Testing and Iteration for refined user Experience
                  </h1>
                </div>
                <div className="flex items-center gap-6 mt-2">
                  <FaCircleCheck className="text-[1.3rem] text-[#4AE588]" />
                  <h1 className="text-[#dfdfdf] text-[1.1rem] font-medium">
                    Design system for scalable and maintainable design
                  </h1>
                </div>
                <div className="flex gap-6 mt-12">
                  <HireButton active={true} textcon={"Hire me"} />
                  <Link
                    href="/projects"
                    className="px-8 py-3 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
                  >
                    Explore my creativity
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="bg-[rgb(10,12,27)] relative overflow-hidden flex flex-col gap-[3rem] justify-start py-[6rem] md:py-[8rem] mx-auto px-[1.5rem] md:px-[16rem]">
        <div className="bg-effect1 w-[20rem] h-[20rem] z-20 rounded-full absolute -bottom-[3rem] -left-[3rem] bg-[#225C87] blur-[130px]"></div>
        <div className="bg-effect1 w-[20rem] h-[20rem] z-20 rounded-full absolute -bottom-[3rem] -right-[3rem] bg-[#225C87] blur-[130px]"></div>

        <h1 className="headTitleSide text-white inline text-[1.5rem] font-medium">
          Global Reach
        </h1>
        <p className="text-white text-[1.3rem] font-light">
          With a global footprint spanning{" "}
          <span className=" font-bold"> 2 countries and counting,</span> our
          project delivery expertise extends to clients in the Nigeria and
          Mauritius showcasing our adaptability and commitment to excellence in
          international markets.
        </p>

        <div className="w-full h-[18rem] md:h-[40rem] mb-16 z-30 bg-[rgb(10,12,27)] border-2 border-[#4A91E5] rounded-[.5rem] shadow-md shadow-[rgba(254,255,255,0.28)]">
          <Image
            src="/images/Global.png"
            width={100}
            height={640}
            className="w-full h-full"
          />
        </div>
      </section>
    </>
  );
};

export default Service;
