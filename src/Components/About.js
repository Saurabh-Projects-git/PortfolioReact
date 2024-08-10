import React from "react";
import aboutimg from "../Assets/aboutimg.png";

const About = () => {
  return (
    <section className="bg-gray-900 text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-8">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-4 border-indigo-600 pb-2 inline-block">
            About Me
          </h2>

          <p className="text-lg leading-relaxed mb-5">
            Hi, My Name Is Saurabh Gautam. I am a Frontend Developer passionate
            about building beautiful and responsive websites using React and
            Tailwind CSS.
          </p>

          <p className="text-lg leading-relaxed mb-5">
            My expertise includes React.js, Redux, Redux Toolkit, Axios,
            Tailwind CSS, CSS3, and more. I love translating ideas into clean,
            efficient code.
          </p>

          <p className="text-lg leading-relaxed mb-5">
            In my spare time, I create educational content on YouTube and write
            blogs on my website. I enjoy discussing programming concepts and
            showcasing my project work.
          </p>
        </div>
        <div className="about-img r">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOLxtQkgiYBPf4l-yEG5RMbMCknxkblx1rw&s"
            alt="coding illustration"
            className="lg:w-4/5 md:w-3/4 w-full mx-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
