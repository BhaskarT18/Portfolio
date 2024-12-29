import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiJava,
  DiPython,
  DiDocker,
  DiPostgresql,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Sass", icon: <DiSass className="text-pink-600" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
      { name: "Webpack", icon: <SiWebpack className="text-blue-400" /> },
    ],
  },
  {
    category: "Backend / Fullstack",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "PostgreSQL", icon: <DiPostgresql className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
    ],
  },
  {
    category: "Other Tools & Languages",
    technologies: [
      { name: "Java", icon: <DiJava className="text-red-600" /> },
      { name: "Python", icon: <DiPython className="text-blue-600" /> },
      { name: "Docker", icon: <DiDocker className="text-blue-400" /> },
    ],
  },
];
const Skills = () => {
  return (
    <div
      className="max-w-[950px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them{" "}
          <a
            href="https://github.com/BhaskarT18?tab=repositories"
            className="underline"
          >
            there
          </a>
          .
        </p>

        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 transform transition-transform duration-200 hover:scale-90"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 transform transition-transform duration-200 hover:scale-105"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
