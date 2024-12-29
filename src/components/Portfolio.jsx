import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Hospital Mnagement System",
      description: "It's web application SaaS model that help for patient registration, appointment scheduling, and clinical data management for both OPD and IPD. Built the front-end using React.js and Tailwind CSS, and the back-end with Node.js, Express.js, and PostgreSQL. Deployed the system on AWS and optimized using Docker for scalability.",
      links: {
        // site: "#",
        github: "#",
      },
    },
    {
      img: project2,
      title: "Job Listing Portal",
      description: "Developed a Job Listing Portal where recruiters can post and manage jobs, and job seekers can search and filter opportunities. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) for a seamless and dynamic user experience. Implemented features for user authentication, job posting management, and advanced search filters.",
      links: {
        // site: "#",
        github: "https://github.com/BhaskarT18/Job-Listing-Portal",
      },
    },
    {
      img: project3,
      title: "BIT-Connect: Student Collaboration Platform",
      description: "BIT-Connect, a Student Collaboration Platform for seamless interaction and collaboration among students. Built using EJS for dynamic templating, Bootstrap for responsive design, and jQuery for enhanced user interactions. The back-end is powered by Express.js and Node.js, with PostgreSQL for data management, and deployed on AWS for scalability and performance.",
      links: {
        site: "https://bitballarpur.co.in/",
        github: "#",
      },
    },
    {
      img: project4,
      title: "GreenYard",
      description: "a website providing information about trees with options to upload images and descriptions. Built using Node.js and Express.js for API integration and handling user data. The website also allows downloading tree images and descriptions in PDF format, with the frontend built using HTML, CSS, and JavaScript.",
      links: {
        site: "https://greenyard-21a8213e25bd.herokuapp.com/",
        github: "https://github.com/BhaskarT18/GreenYard",
      },
    },

  ]

  const Portfolio = () => {
    return (
      <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Projects</h2>
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } mb-12`}
            >
              <div className="w-full md:w-1/2 p-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  {index >= 2 && (
                    <a
                      href={project.links.site}
                      className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                    >
                      View Site
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    );
  };
  
  export default Portfolio;
  
