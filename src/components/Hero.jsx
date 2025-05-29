import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";


import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
  DiGithubBadge,
  DiPython,
  DiJava,
  DiDocker,
  DiPostgresql,
  DiFirebase,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Full stack developer",
              1000,
              "React developer",
              1000,
              "Java developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hey, I'm <br />
            <span className="text-purple-500">Bhaskar Tikale </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate fullstack developer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
        
            
              <button className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
              border-purple-400 rounded-xl" onClick={() => window.open("https://drive.google.com/file/d/15H0V4ODvWEyPEWklAhN_oQWRrgeKS2Yr/view?usp=drive_link")}>
                Download CV
              </button>
              {/* <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                href="https://drive.google.com/file/d/104K_9vOMs14NE7-Pk6J9quPVisUsdCRq/view?usp=sharing"
                className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
               border-purple-400 rounded-xl"
              >
                Download CV
              </motion.a> */}
            

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-blue-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/BhaskarT18"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/bhaskartikale/"
              >
                <AiOutlineLinkedin />
              </motion.a>

              {/* <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineInstagram />
              </motion.a> */}
            </div>
          </motion.div>
        </motion.div>

        <motion.img
  src={profilepic}
  className="w-[200px] md:w-[300px] rounded-lg"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 0.8, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
/>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        {/* Title Section */}
        <p className="text-gray-200 mb-6">My Tech Stack</p>

        {/* Logos Section */}
        <div className="flex flex-row flex-wrap items-center justify-center ">
          {/* Icons Array */}
          {[
            { Icon: DiHtml5, color: "text-orange-600" },
            { Icon: DiCss3, color: "text-blue-600" },
            { Icon: DiJavascript1, color: "text-yellow-500" },
            { Icon: DiReact, color: "text-blue-500" },
            { Icon: DiNodejsSmall, color: "text-green-500" },
            { Icon: DiMongodb, color: "text-green-600" },
            { Icon: DiGithubBadge, color: "text-gray-600" },
            { Icon: DiPython, color: "text-yellow-600" },
            { Icon: DiJava, color: "text-red-600" },
            { Icon: DiDocker, color: "text-blue-600" },
            { Icon: DiPostgresql, color: "text-blue-700" },
            { Icon: DiFirebase, color: "text-yellow-400" },
            { Icon: SiTailwindcss, color: "text-blue-400" },
            { Icon: SiRedux, color: "text-purple-600" },
            { Icon: SiExpress, color: "text-gray-600" },
            { Icon: SiVite, color: "text-purple-400" },
            { Icon: SiWebpack, color: "text-blue-500" },
          ].map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              className={`mx-2 ${color} text-6xl`} // Adjust size as needed
              animate={{
                x: [-10, 10, -10], // Moves left, then right, then back
              }}
              transition={{
                repeat: Infinity, // Continuous looping
                duration: 2, // Time for one full cycle
                ease: "easeInOut", // Smooth animation
              }}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
