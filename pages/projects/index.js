import Head from "next/head";

import Hero from "@/components/Projects/hero";
import Showcase from "@/components/Projects/showcase/project";
import Plan from "@/components/Projects/plan";
import Testimonial from "@/components/Home/testimonial";
import Footer from "@/components/Home/footer";

export default function Project() {
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
        <title>Portfolio | Projects</title>
      </Head>
      <Hero />

      <Showcase />
      <Plan />
      <Testimonial />
      <Footer />
    </>
  );
}
