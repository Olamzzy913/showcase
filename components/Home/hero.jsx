import React from "react";
import Link from "next/link";

import Typewriter from "typewriter-effect";

import Nav from "@/components/nav/nav";

const Hero = () => {
  return (
    <section className="hero bg-[#0a0c1b]">
      <div className="flex flex-col items-center  justify-start h-svh w-full">
        <div className="bg-effect1 w-[20rem] h-[20rem] z-20 rounded-full absolute -top-[3rem] -left-[3rem] bg-[#225C87] blur-[130px]"></div>
        <div className="bg-effect2 w-[60rem] h-[30rem] z-20  absolute top-[4rem] right-[4rem] bg-[#1A2260] blur-[140px]"></div>
        <Nav />
        <div className="content-container flex justify-start items-center h-[480px] md:h-[500px] slg:h-[700px] ">
          <div className="flex flex-col justify-start w-[30rem] md:w-[40%] z-30 md:px-[3rem]">
            <h6 className="text-[1.05rem] md:text-[1.2rem] font-bold text-blue-800">
              Welcome to my Portfolio!
            </h6>
            <h1 className="text-[1.8rem] md:text-[2.8rem] font-bold text-white">
              <Typewriter
                options={{
                  strings: [
                    "You got the Idea.",
                    "I got the skill.",
                    "Let's build brilliance.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-[.9rem] md:text-[1.05rem] text-gray-400">
              Unlock the power of creative innovative with expertise in visual
              design, cutting-edge software tools, and robust frontend
              development, I craft exceptional, inclusive experiences that
              breathe life into your vision. Let's colaborate and transform your
              ideas into captivating realities
            </p>
            <div className="flex gap-6 mt-8">
              <Link
                href="/blog"
                className="px-8 py-3 bg-blue-400 hover:bg-blue-500 transition-all text-white text-[1.1rem] rounded-full shadow-md shadow-[rgba(74,144,229,0.21)]"
              >
                Get inspired
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
              >
                Explore my creativity
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
