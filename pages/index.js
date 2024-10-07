import Head from "next/head";

import Hero from "@/components/Home/hero";
import About from "@/components/Home/about";
import Service from "@/components/Home/service";
import Project from "@/components/Home/project/project";
import Testimonial from "@/components/Home/testimonial";
import Footer from "@/components/Home/footer";

export default function Home() {
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
        <title>Ojelade Olamide Emmanuel Portfolio</title>
      </Head>
      <Hero />
      <About />
      <Service />
      <Project />
      <Testimonial />
      <Footer />
    </>
  );
}
