import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";

import { FaCircleCheck } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";

const ProjectDetails = ({ project }) => {
  const router = useRouter();
  const { project: projectId } = router.query;

  // Destructure after ensuring project is defined
  const {
    name,
    client,
    objective,
    target,
    image,
    overview,
    benefits,
    role,
    stack,
    website,
  } = project;

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
        <title> Projects ~ {name}</title>
      </Head>
      <section className="project-section bg-[#0a0c1b] relative flex md:h-svh flex-col items-center justify-center pb-[5rem] px-[1.5rem] md:px-[3.5rem] overflow-y-scroll md:overflow-hidden">
        <div className="bg-effect2 w-[30rem] md:w-[60rem] h-[30rem] z-20 absolute top-[18rem] -left-[4rem] bg-[#1A2260] blur-[140px]"></div>

        <Link
          href="/projects"
          className="absolute top-[2rem] z-50 left-[2rem] cursor-pointer md:top-[6rem] md:left-[6rem]"
        >
          <IoArrowBackCircle className="text-[3rem] text-blue-400 cursor-pointer" />
        </Link>

        <div className="flex flex-col items-center justify-center h-full z-30">
          <h1 className="text-white font-semibold text-[1.89rem] mt-[6rem]">
            {name} Project Overview
          </h1>

          <div className="py-[2rem] text-left md:px-[2rem]">
            <div className="body flex flex-col justify-center items-center w-full">
              <div className="flex flex-col md:flex-row justify-start items-center gap-[3rem]">
                <Image
                  src={image}
                  alt="project image"
                  width={200}
                  height={120}
                  className="rounded-[.6rem] w-full h-[15rem] md:w-[inherit] md:h-[inherit] border-2 border-[#4A91E5] mb-4"
                />
                <div className="flex flex-col gap-6">
                  <div className="flex justify-start gap-4">
                    <h1 className="text-white font-bold text-[1.2rem]">
                      Project name:
                    </h1>
                    <p className="text-[#dfdfdf] font-light text-[1rem]">
                      {name}
                    </p>
                  </div>
                  <div className="flex justify-start gap-4">
                    <h1 className="text-white font-bold text-[1.2rem]">
                      Client:
                    </h1>
                    <p className="text-[#dfdfdf] font-light text-[1rem]">
                      {client}
                    </p>
                  </div>
                  <div className="flex justify-start gap-4">
                    <h1 className="text-white font-bold text-[1.2rem]">
                      Objective:
                    </h1>
                    <p className="text-[#dfdfdf] font-light text-[1rem]">
                      {objective}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="text-white font-bold text-[1.2rem]">Overview</h1>
                <p className="mt-1 text-[#dfdfdf] font-light text-[1rem]">
                  {overview}
                </p>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h1 className="mt-4 text-white font-bold text-[1.2rem]">
                      Target
                    </h1>
                    {target.map((t, index) => (
                      <div key={index} className="flex items-center gap-6 mt-1">
                        <FaCircleCheck className="text-[1.2rem] text-[#4AE588]" />
                        <h1 className="text-[#dfdfdf] text-[1rem] font-medium">
                          {t}
                        </h1>
                      </div>
                    ))}
                  </div>
                  <div>
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
                  </div>
                </div>
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
                className="px-8 py-3 w-[20rem] mt-8 text-center mx-auto border border-blue-400 hover:bg-blue-400 hover:shadow-md hover:shadow-[rgba(74,144,229,0.21)] transition-all text-white text-[1.1rem] rounded-full"
              >
                Visit website
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const projectDetails = [
    { id: "openstate", name: "Openstate" },
    { id: "recycling", name: "Recycling" },
    { id: "schedule", name: "Schedule" },
  ];

  const paths = projectDetails.map((project) => ({
    params: { project: project.id },
  }));

  return { paths, fallback: false }; // Change fallback to true if you want to allow new routes
}

export async function getStaticProps({ params }) {
  const projectDetails = [
    {
      id: "openstate",
      name: "Openstate",
      client: "Yakubu Yinusa Temitope ",
      objective:
        "Easy access to building information for property owners, researchers, and enthusiasts",
      overview:
        "OpenState is an innovative online platform that provides comprehensive information about registered buildings and locations. By utilizing a unique Plus Code system, users can access detailed data about a specific property, including its latitude and longitude, images, landmarks, nature of the building (residential or business), and type of house.",
      benefits: [
        "Easy access to building information for property owners, researchers, and enthusiasts",
        "Unique Plus Code system for secure and efficient data retrieval",
        "User authentication for personalized and restricted content",
        "Valuable resource for urban planning, real estate, and geographic research",
      ],
      target: [
        "Property owners and managers",
        "Researchers and student",
        "Real estate professionals",
        "Urban planners and developers",
      ],
      role: "Lead Designer and Developer, responsible for design concept, front-end development, and project management.",
      stack: "Next js and Firebase",
      image: "/images/Openstate-project.png",
      website: "https://open-state.netlify.app/",
      skill: "Web Development",
    },
    {
      id: "recycling",
      name: "Recycling",
      client: "Ademola muttiewt",
      objective: "Enable recycling process with easy",

      image: "/images/Openstate-project.png",
      overview:
        "OpenState is an innovative online platform that provides comprehensive information about registered buildings and locations. By utilizing a unique Plus Code system, users can access detailed data about a specific property, including its latitude and longitude, images, landmarks, nature of the building (residential or business), and type of house.",
      benefits: [
        "Easy access to building information for property owners, researchers, and enthusiasts",
        "Unique Plus Code system for secure and efficient data retrieval",
        "User authentication for personalized and restricted content",
        "Valuable resource for urban planning, real estate, and geographic research",
      ],
      target: [
        "Property owners and managers",
        "Researchers and student",
        "Real estate professionals",
        "Urban planners and developers",
      ],
      role: "Lead Designer and Developer, responsible for design concept, front-end development, and project management.",
      stack: "Figma",
      website: "https://open-state.netlify.app/",
      skill: "UI UX Design",
    },
    {
      id: "schedule",
      name: "Schedule",
      client: "Ojelade Olamide Emmanuel",
      objective: "Give each user the ability to set and achieve their Goals!!",

      image: "/images/Openstate-project.png",
      overview:
        "OpenState is an innovative online platform that provides comprehensive information about registered buildings and locations. By utilizing a unique Plus Code system, users can access detailed data about a specific property, including its latitude and longitude, images, landmarks, nature of the building (residential or business), and type of house.",
      benefits: [
        "Easy access to building information for property owners, researchers, and enthusiasts",
        "Unique Plus Code system for secure and efficient data retrieval",
        "User authentication for personalized and restricted content",
        "Valuable resource for urban planning, real estate, and geographic research",
      ],
      target: [
        "Property owners and managers",
        "Researchers and student",
        "Real estate professionals",
        "Urban planners and developers",
      ],
      role: "Lead Designer and Developer, responsible for design concept, front-end development, and project management.",
      stack: "Flutter and Node",
      website: "https://open-state.netlify.app/",
      skill: "Mobile Development",
    },
  ];

  const project = projectDetails.find((proj) => proj.id === params.project);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
}

export default ProjectDetails;
