import React from "react";
import Link from "next/link";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-section bg-[#0a0c1b] relative flex flex-col items-center justify-center pb-[5rem] px-[1.5rem] md:px-[3.5rem] overflow-hidden">
        <div className="bg-effect1 w-[20rem] h-[20rem] z-20 rounded-full absolute -bottom-[3rem] transform left-1/2 -translate-x-1/2 bg-[#225C87] blur-[130px]"></div>

        <div className="testimonial-section flex flex-col items-center justify-center h-full">
          <h1 className="text-white font-semibold text-[1.89rem] headTitle mt-[6rem]">
            Words from Clients
          </h1>
          <p className="text-white text-center">
            {" "}
            I develop native and cross-platform mobile apps that provide
            seamless, intuitive, and engaging user experiences. With expertise
            in mobile-first design and development, I deliver apps that meet
            your business needs and delight your users.
          </p>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
