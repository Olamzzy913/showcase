import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ selectedFilter }) => {
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
      image: "/images/openstate-image.png",
      website: "https://open-state.netlify.app/",
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

  const filteredProjects = projectDetails.filter(
    (project) => project.skill === selectedFilter
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 my-[5rem] w-full">
        {filteredProjects.map((data, index) => (
          <Link href={`/projects/${data.id}`}>
            <Image
              key={index}
              src={data.image}
              height={120}
              width={220}
              className="cursor-pointer border rounded-[.8rem] w-full h-[14rem]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
