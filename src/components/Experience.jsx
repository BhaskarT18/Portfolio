import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Full stack web dev',
        at:'Arohi Software   ',
        period: 'Sep 2024 - Dec 2024',
        description: 'Developed a SaaS model website, focusing primarily on front-end development using React and Tailwind CSS. Also contributed to back-end functionality, ensuring seamless integration and user-friendly design. Collaborated with the team to deliver a scalable and efficient multi-tenant architecture.',
      },
      {
        company: 'MERN stack dev ',
        at:'Zidio Development   ',
        period: 'Jul 2024 - Oct 2024',
        description: 'Contributed to developing dynamic and responsive web applications using the MERN stack. Focused on building intuitive front-end interfaces with React and managing server-side logic with Node.js and Express. Gained hands-on experience in integrating MongoDB for data persistence and optimizing performance across the application lifecycle.',
      },
      {
        company: 'Java dev ',
        at:'Xenosis IT Solution   ',
        period: 'May 2024 - Jun 2024 ',
        description: 'Gained a strong foundation in Java by studying core concepts and applying them to real-world scenarios. Worked on live examples to implement object-oriented programming principles, exception handling, multi-threading, and file I/O. Enhanced problem-solving skills and built practical knowledge by integrating theoretical learning with hands-on experience.',
      },
      // {
      //   company: 'Fourth Company',
      //   period: '2020 - Present',
      //   description: 'Description of your experience in this company.',
      // },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[930px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-200'> {experience.at}  &#x2022; Intership</p>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience