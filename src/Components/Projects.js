import React from "react";
const Projects = () => {
  const projects = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaeC4P7NOc2SKtL9UJF68yD-WnAiqR1d-qQ&s",
      title: "React Food Web Apps",
      desc: "A food web application built with React.",
      live: "https://reactfoodwebapps.netlify.app/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1TIj61zRixevjIMJsR0KfttLxE5LBIimsg&s",
      title: "React Admin Dashboard",
      desc: "A React Dashbaord Build using React js.",
      live: "https://reactdashboardsweb.netlify.app/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAAfai-5EsZdAwXb6EYat5NPBVlK_6i5-uA&s",
      title: "Google Chromes",
      desc: "A clone of Google Chrome built with React.",
      live: "https://googlechromes.netlify.app/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRV-7jb_g1KZHfZTKceuOW57HR9YlPn8KcoQ&s",
      title: "React Weather Apps",
      desc: "A weather application built with React.",
      live: "https://reactweatherappss.netlify.app/",
    },
  ];
  return (
    <section className="bg-[#1E293B] text-white px-5 py-20" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>
          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            and TailWind CSS. Check them out.
          </p>
        </div>
        <div className="about-img"></div>
      </div>
      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative group" key={i}>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full  rounded-md"
                />
              </a>
              <div className="flex absolute left-0 right-0 top-0 bottom-0 mx-auto w-full h-full bg-primary opacity-0 duration-500 justify-center items-center flex-col text-center group-hover:opacity-100">
                <p className="py-5 font-bold px-2 text-white">{project.desc}</p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
