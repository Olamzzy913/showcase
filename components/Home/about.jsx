import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { IoHeadset } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { TbMicroscope } from "react-icons/tb";
import { GiGraduateCap } from "react-icons/gi";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoGameControllerB, IoMdAirplane } from "react-icons/io";

import HireButton from "@/components/button/schedule";

const iconDatas = [
  {
    name: "Figma",
    icon: "/images/figma.svg",
  },
  {
    name: "Illustrator",
    icon: "/images/illustrator.svg",
  },
  {
    name: "Photoshop",
    icon: "/images/photoshop.svg",
  },
  {
    name: "Tailwindcss",
    icon: "/images/tailwind.svg",
  },
  {
    name: "React",
    icon: "/images/react.svg",
  },
  {
    name: "Redux",
    icon: "/images/figma.svg",
  },
  {
    name: "Next",
    icon: "/images/next.svg",
  },
  {
    name: "Vscode",
    icon: "/images/vscode.svg",
  },
  {
    name: "HTML",
    icon: "/images/html.svg",
  },
  {
    name: "CSS",
    icon: "/images/css.svg",
  },
  {
    name: "Javascript",
    icon: "/images/js.svg",
  },
  {
    name: "Typescript",
    icon: "/images/typescript.svg",
  },
  {
    name: "Vue",
    icon: "/images/vue.svg",
  },
  {
    name: "Nuxt",
    icon: "/images/nuxt.svg",
  },

  {
    name: "Firebase",
    icon: "/images/firebase.svg",
  },
  {
    name: "Flutter",
    icon: "/images/flutter.svg",
  },
  {
    name: "Github",
    icon: "/images/github.svg",
  },
  {
    name: "Pinterest",
    icon: "/images/pinterest.svg",
  },
  {
    name: "Node",
    icon: "/images/node.png",
  },
];

const About = () => {
  return (
    <>
      <section className="about-section bg-[#0a0c1b] w-full relative flex flex-col items-center justify-center pb-[5rem] px-[1.5rem] md:px-[3.5rem] overflow-hidden">
        <div className="bg-effect1 w-[20rem] h-[20rem] z-20 rounded-full absolute -bottom-[3rem] -left-[3rem] bg-[#225C87] blur-[130px]"></div>
        <div className="bg-effect1 w-[20rem] h-[20rem] z-20 rounded-full absolute -bottom-[3rem] -right-[3rem] bg-[#225C87] blur-[130px]"></div>

        <div className="about-section flex flex-col items-center justify-center h-full">
          <h1 className="text-white font-semibold text-[1.4rem] md:text-[1.89rem] headTitle">
            The Person Behind the Code and Design
          </h1>
          <p className="text-center w-[29rem] md:w-[inherit] text-[.95rem] md:text-[1.2rem] text-[#CBCCCF] mx-[20rem] mt-[8rem] mb-[4rem]">
            Welcome to my corner of the web! I'm{" "}
            <span className="text-[#167CF5] font-semibold">
              Ojelade Olamide Emmanuel,
            </span>{" "}
            a multifaceted digital expert with a passion for creating innovative
            experiences. As a web developer, UI/UX designer, and mobile
            developer, I bring ideas to life with curiosity and creativity. With
            a knack for turning visions into reality, I'm dedicated to designing
            and building digital experiences that inspire and delight
          </p>
          <div className="flex gap-6 mb-6">
            <HireButton active={true} textcon={"Hire me"} />
            <Link
              href="/projects"
              className="px-8 py-3 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
            >
              Explore my creativity
            </Link>
          </div>
          <div className="flex flex-col gap-6 my-6 w-full">
            <div className="mx-auto  my-3">
              <h1 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-white mb-6">
                My skills
              </h1>
              <div className="flex justify-between items-center gap-[1rem] md:gap-[10rem]">
                <div className="flex flex-col w-[9.6rem] md:w-[inherit] justify-center items-center gap-[.5rem]">
                  <FaReact className="p-[.5rem] md:p-[1rem] text-[2rem] md:text-[4rem] bg-[#4A91E5] rounded-full shadow-md shadow-[rgba(254,255,255,0.28)]" />
                  <h1 className="text-white font-semibold text-[1rem] text-center md:text-[1.3rem]">
                    Web development
                  </h1>
                  <p className="text-white font-light text-[.8rem] text-center md:text-[1.1rem]">
                    Building Scalable Web Solution
                  </p>
                </div>
                <div className="flex flex-col w-[8rem] md:w-[inherit] justify-center items-center gap-[.5rem]">
                  <FaFigma className="p-[.5rem] md:p-[1rem] text-[2rem] md:text-[4rem] bg-[#4A91E5] rounded-full shadow-md shadow-[rgba(254,255,255,0.28)]" />
                  <h1 className="text-white font-semibold text-[1rem] text-center md:text-[1.3rem]">
                    UI UX design
                  </h1>
                  <p className="text-white font-light text-[.8rem] text-center md:text-[1.1rem]">
                    Creating Intuitive Interface
                  </p>
                </div>
                <div className="flex flex-col w-[10rem] md:w-[inherit] justify-center items-center gap-[.5rem]">
                  <RiFlutterFill className="p-[.5rem] md:p-[1rem] text-[2rem] md:text-[4rem] bg-[#4A91E5] rounded-full shadow-md shadow-[rgba(254,255,255,0.28)]" />
                  <h1 className="text-white font-semibold text-[1rem] text-center md:text-[1.3rem]">
                    Mobile development
                  </h1>
                  <p className="text-white font-light text-[.8rem] text-center md:text-[1.1rem]">
                    Crafting Seamless Mobile Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mx-auto gap-[10rem] my-[6rem]">
              <div className="mx-auto  my-[.5rem] md:my-3">
                <h1 className="text-center text-[1.2rem] md:text-[1.4rem] font-semibold text-white mb-6">
                  My Journey
                </h1>
                <div className="flex justify-between items-center gap-[3rem] md:gap-[6rem]">
                  <div className="flex flex-col justify-center items-center gap-[.5rem]">
                    <FaBriefcase className="p-[.5rem] md:p-[1rem] text-[2rem] md:text-[4rem] bg-[#4A91E5] rounded-full shadow-md shadow-[rgba(254,255,255,0.28)]" />
                    <h1 className="text-white font-semibold text-[1rem] md:text-[1.3rem]">
                      3yr Experience
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-[.5rem]">
                    <GiTrophy className="p-[.5rem] md:p-[1rem] text-[2rem] md:text-[4rem] bg-[#4A91E5] rounded-full shadow-md shadow-[rgba(254,255,255,0.28)]" />
                    <h1 className="text-white font-semibold text-[1rem] md:text-[1.3rem]">
                      36+ Projects
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-[.5rem]">
                    <GiGraduateCap className="p-[.5rem] md:p-[1rem] text-[2rem] md:text-[4rem] bg-[#4A91E5] rounded-full shadow-md shadow-[rgba(254,255,255,0.28)]" />
                    <h1 className="text-white font-semibold text-[1rem] md:text-[1.3rem]">
                      Undergraduate
                    </h1>
                  </div>
                </div>
              </div>
              <div className="mx-auto  my-[.5rem] md:my-3">
                <h1 className="text-center text-[1.2rem] md:text-[1.4rem] font-semibold text-white mb-6">
                  My Interests
                </h1>
                <div className="flex justify-between items-center gap-[3.5rem] md:gap-[6rem]">
                  <div className="flex flex-col justify-center items-center gap-[.5rem]">
                    <IoHeadset className="p-[.5rem] md:p-[1rem] text-[2rem] md:text-[4rem] bg-[#4A91E5] rounded-full shadow-md shadow-[rgba(254,255,255,0.28)]" />
                    <h1 className="text-white font-semibold text-[1rem] md:text-[1.3rem]">
                      Music
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-[.5rem]">
                    <TbMicroscope className="p-[.5rem] md:p-[1rem] text-[2rem] md:text-[4rem] bg-[#4A91E5] rounded-full shadow-md shadow-[rgba(254,255,255,0.28)]" />
                    <h1 className="text-white font-semibold text-[1rem] md:text-[1.3rem]">
                      Research
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-[.5rem]">
                    <IoLogoGameControllerB className="p-[.5rem] md:p-[1rem] text-[2rem] md:text-[4rem] bg-[#4A91E5] rounded-full shadow-md shadow-[rgba(254,255,255,0.28)]" />
                    <h1 className="text-white font-semibold text-[1rem] md:text-[1.3rem]">
                      Games
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-[.5rem]">
                    <IoMdAirplane className="p-[.5rem] md:p-[1rem] text-[2rem] md:text-[4rem] bg-[#4A91E5] rounded-full shadow-md shadow-[rgba(254,255,255,0.28)]" />
                    <h1 className="text-white font-semibold text-[1rem] md:text-[1.3rem]">
                      Traveling
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full justify-start py-[4rem] md:py-[8rem] mx-auto px-[1.5rem] md:px-[16rem] bg-[#0A0C1B]">
        <h1 className="headTitleSide text-white inline text-[1.5rem] font-medium">
          Professional Software
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-8 justify-center items-center gap-[1.8rem] md:gap-[4rem] mt-8">
          {iconDatas.map((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-[6rem] md:w-[9rem] h-[5rem] md:h-[8.5rem] bg-[#1E2231] rounded-[.4rem]"
            >
              <div className="h-[1.5rem] md:h-10 w-[1.5rem] md:w-10">
                <Image
                  src={data.icon}
                  height={24}
                  width={24}
                  className="h-[1.5rem] md:h-[2rem] w-[1.5rem] md:w-[2rem]"
                />
              </div>
              <p className="text-white text-[.9rem] md:text-[1.4rem] mt-1 md:mt-0 font-normal">
                {data.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
