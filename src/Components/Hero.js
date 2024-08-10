import React from "react";
import heroimg from "../Assets/heroimg.png";
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const Hero = () => {
  const handleButtonClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="bg-gray-900 px-5 text-white py-32" id="hero">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-5xl lg:text-5xl font-bold">
            HI, <br />
            <br />
            I'M <span className="text-accent">S</span>AURABH <br />
            <br />
            WEB/APP DEVELOPER
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js, React Native and Tailwind
            CSS
          </p>

          <div className="flex py-5">
            <a
              href="https://www.instagram.com/saurabhofficial_123?igsh=MTFrbHpyY2tidThlaA=="
              className="pr-4 inline-block text-accent hover:text-white"
            >
              <AiOutlineInstagram size={40} />{" "}
            </a>
            <a
              href=""
              className="pr-4 inline-block text-accent hover:text-white"
            >
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100084279889035&mibextid=JRoKGi"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              <AiOutlineFacebook size={40} />
            </a>
          </div>
          <button
            onClick={handleButtonClick}
            className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </button>
        </div>

        <div className="hero-img">
          <img
            src={heroimg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
