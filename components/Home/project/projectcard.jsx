import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import { FaCircleCheck } from "react-icons/fa6";

const ProjectCard = ({ selectedFilter }) => {
  const [projectData, setProjectData] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = (data, index) => {
    setShowOverlay(!showOverlay);
    setProjectData(data, index);
  };

  const { name, image, overview, benefits, role, stack, website } = projectData;

  const projectDetails = [
    {
      name: "Openstate",
      image: "/images/openstate-image.png",
      overview:
        "OpenState is an innovative online platform that provides comprehensive information about registered buildings and locations. By utilizing a unique Plus Code system, users can access detailed data about a specific property, including its latitude and longitude, images, landmarks, nature of the building (residential or business), and type of house.",
      benefits: [
        "Easy access to building information for property owners, researchers, and enthusiasts",
        "Unique Plus Code system for secure and efficient data retrieval",
        "User authentication for personalized and restricted content",
        "Valuable resource for urban planning, real estate, and geographic research",
      ],
      role: "Lead Designer and Developer, responsible for design concept, front-end development, and project management.",
      stack: "Next js and Firebase",
      website: "https://open-state.netlify.app/",
      skill: "Web Development",
    },
    {
      id: "minimart",
      name: "Minimart",
      client: "Personal Project",
      objective:
        "Design and develop a social e-commerce platform that combines social networking features with online buying and selling capabilities",
      image: "/images/Minimart-project.png",
      overview:
        "Created a dynamic social e-commerce website, Minimart, where users can buy and sell products, share posts, like, comment, and chat with each other. Sellers can post their sales items, and buyers can purchase directly through the platform",
      benefits: [
        "Unique blend of social networking and e-commerce features",
        "Enhanced user engagement through social interactions",
        "Streamlined buying and selling process",
        "Real-time communication between buyers and sellers",
      ],
      target: [
        "Individuals looking to buy and sell products online",
        "Small businesses and entrepreneurs",
      ],
      role: "Web Developer",
      stack: "Next.js,Firebase",
      website: "(link to Minimart website)",
      skill: "Web Development",
    },
    {
      id: "waleb",
      name: "Waleb",
      client: "Abayomi Aluko",
      objective:
        "Design a user-centered UI/UX for a cryptocurrency exchange website",
      image: "/images/waleb.png",
      overview:
        "Created a intuitive and information UI/UX design for Waleb, a cryptocurrency exchange platform, to enhance user experience and trading efficiency",
      benefits: [
        "Real-time currency rate information",
        "User-friendly interface for seemless navigation",
        " Scalable architecture for high traffic",
        "Secure authentication and authorization using Firebase",
      ],
      target: [
        "Investors",
        "Business Professionals",
        "Entrepreneur",
        "Cryptocurrency Enthusiasts",
      ],
      role: "UI UX Designer",
      stack: "Figma",
      website: "https://walesb.ng",
      skill: "UI UX Design",
    },
    {
      id: "recycling",
      name: "Recycling",
      client: "Ademola muttiewt",
      objective: "Design a UI/UX for a recycling platform that enables users to recycle materials and earn rewards",

      image: "/images/recycling.png",
      overview:
        "Created a user-centered design for a recycling platform that allows users to find nearby recycling centers, scan materials to verify the recycling process, and earn rewards that can be redeemed for cash",
      benefits: [
        "encourages recycling and sustainabiliy",
        "User-friendly interface for easy navigation",
        "Rewards system motivaties users to recycle more",
        "Scan verification ensures accurate recycling tracking",
      ],
      target: [
        "Environmentally conscious individual",
        "Recycling centers",
        "Local communities",
      ],
      role: "Lead Designer , responsible for design concept and project management.",
      stack: "Figma",

      website:
        "https://www.figma.com/design/Zrx9yAlC6XeMDQfNUUMc3W/Recycling-UI-Design?node-id=0-1&t=wYsKlSliPYY9Tm8I-1",

      skill: "UI UX Design",
    },
    {
      id: "chat-app",
      name: "Chat App",
      client: "Personal Project",
      objective:
        "Design and develop a real-time chat website that enables users to communicate with each other",
      image: "/images/Openstate-project.png",
      overview:
        "Built a fast and reliable chat website using Next.js and Firebase, allowing users to engage in real-time conversations with each other",
      benefits: [
        "Real-time messaging for instant communication",
        "User-friendly interface for easy navigation",
        " Scalable architecture for high traffic",
        "Secure authentication and authorization using Firebase",
      ],
      target: [
        "Individuals looking for a seamless chat experience",
        "Teams and groups seeking collaboration tools",
      ],
      role: "Web Developer",
      stack: ["Next.js", "Firebase"],
      website: "(link to Chat App website)",
      skill: "Web Development",
    },
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projectDetails
      : projectDetails.filter((project) => project.skill === selectedFilter);

  return (
    <>
      {showOverlay && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 backdrop-blur-sm">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-800 backdrop-blur-sm opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-[#14162B] rounded-[1rem] text-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg md:max-w-[64rem] w-full">
              <div className="py-[2rem] text-left px-[2rem]">
                <div className="flex justify-end gap-[10rem] md:gap-[25rem] items-center">
                  <div
                    className="modal-close cursor-pointer float-end z-50"
                    onClick={toggleOverlay}
                  >
                    <i className="fas fa-times py-[.4rem] px-[.6rem] text-[1.2rem] bg-[#0A0C1B] text-[#4A91E5] rounded-full"></i>
                  </div>
                </div>
                <div className="head flex flex-col items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    width={30}
                    height={30}
                    className="-mt-8"
                  />
                  <p className="text-[1.2rem] font-medium text-center capitalize mb-[1.4rem] mt-[1rem]">
                    Project Overview
                  </p>
                </div>
                <div className="body flex flex-col justify-center items-center w-full">
                  <Image
                    src={image}
                    alt="project image"
                    width={200}
                    height={120}
                    className="rounded-[.6rem] border-2 border-[#4A91E5] mb-4"
                  />
                  <h1 className="text-[1.2rem] font-light">{name}</h1>
                  <div className="flex flex-col justify-start">
                    <h1 className="text-white font-bold text-[1.2rem]">
                      Overview
                    </h1>
                    <p className="mt-1 text-[#dfdfdf] font-light text-[1rem]">
                      {overview}
                    </p>
                    <h1 className="mt-4 text-white font-bold text-[1.2rem]">
                      Benefits
                    </h1>
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-6 mt-1">
                        <FaCircleCheck className="text-[1.2rem] text-[#4AE588]" />
                        <h1 className="text-[#dfdfdf] text-[1rem] font-medium">
                          {benefit}
                        </h1>
                      </div>
                    ))}

                    <h1 className="mt-4 text-white font-bold text-[1.2rem]">
                      My Role
                    </h1>
                    <p className="mt-1 text-[#dfdfdf] font-light text-[1rem]">
                      {role}
                    </p>
                    <h1 className="mt-4 text-white font-bold text-[1.2rem]">
                      Stack
                    </h1>
                    <p className="mt-1 text-[#dfdfdf] font-light text-[1rem]">
                      {stack}
                    </p>
                  </div>
                  <Link
                    href={website}
                    target="_blank"
                    className="px-8 py-3 w-[20rem] mt-8 text-center mx-auto border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
                  >
                    Visit website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 my-[5rem] z-20 w-full">
        {filteredProjects.map((data, index) => (
          <Image
            key={index}
            src={data.image}
            height={120}
            width={220}
            onClick={() => toggleOverlay(data, index)}
            className="cursor-pointer border rounded-[.8rem] w-full h-[14rem]"
          />
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
