import React from "react";
import Link from "next/link";

import Nav from "@/components/nav/nav";

const Hero = () => {
  return (
    <section className="hero bg-[#0a0c1b]">
      <div className="flex flex-col items-center  justify-start h-svh w-full px-[1rem]">
        <div className="bg-effect1 w-[20rem] h-[20rem] z-20 rounded-full absolute top-[3rem] transform left-1/2 -translate-x-1/2 bg-[#225C87] blur-[130px]"></div>
        <Nav />
        <div className="content-container flex flex-col justify-center  items-center h-[480px] md:h-[500px] slg:h-[700px] ">
          <h6 className="text-[.95rem] md:text-[1.2rem] font-bold text-blue-800">
            My Portfolio World
          </h6>
          <h1 className="text-[1.8rem] md:text-[2.8rem] text-center font-bold text-white">
            Transforming Ideas into Exceptional Experience
          </h1>
          <p className="text-[.98rem] md:text-[1.05rem] text-gray-400 text-center">
            Exploring the intersection of design, technology, and innovation to
            deliver impactful results, Where attention to detail meets
            innovative thinking Empowering businesses through strategic design
            and development.
          </p>

          <Link
            href="/contact"
            className="px-8 py-3 mt-8 border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
          >
            Let's Build Something Amazing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
