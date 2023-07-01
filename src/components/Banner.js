import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/badhon.jpeg';
import { FaGithub, FaYoutube, FaDribbble,FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { fadeIn } from '../variants';
import resume from '../assets/Badhon_resume_fewd (1).pdf';
import cover_latter from '../assets/Badhon-Cover_Letterf.pdf';

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="lg:mr-[150px] lg:ml-[150px] px-5">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <motion.div
            className="flex-1 text-center font-secondary lg:text-left gap-y-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1
              className="text-[45px] font-bold leading-[0.10] lg:text-[90px] mb-16 uppercase"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Badhon <span>Sarker</span>
            </motion.h1>
            <motion.div
              className="mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold leading-[1]"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <span className="text-white mr-4 uppercase">I am a </span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Front-End Developer',
                  2000,
                  'Designer',
                  2000,
                  'Developer',
                  2000,
                ]}
                speed={50}
                className="text-pink-700"
                wrapper={motion.span}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              />
            </motion.div>
            <motion.p initial="hidden" animate="visible" variants={fadeIn}>
              I am writing to express my enthusiastic interest in the Front-End Web Developer position at your company.
              I am very eager to apply for the web developer position at your company as advertised on LinkedIn, and I
              am incredibly excited about the opportunity to start my career with your organization.
            </motion.p>
            <div>
              <a href={resume} download="Badhon_resume_fewd (1).pdf">
                <button className="btn btn-lg text-xl mt-3 mr-2">
                <FaDownload className="" />
                  Resume</button>
              </a>
              <a href={cover_latter} download="Badhon-Cover_Letterf.pdf">
             
              <button className="btn btn-lg text-xl mt-3 px-8"> 
               <FaDownload />Cover Letter
              </button>
              </a>
            </div>
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex text-[30px] gap-x-5 max-w-max mx-auto mt-5">
              <Link to="youtube-link">
                <FaYoutube />
              </Link>
              <Link to="github-link">
                <FaGithub />
              </Link>
              <Link to="dribbble-link">
                <FaDribbble />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-[-32] hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="bg-blue-500 shadow-2xl pb-8 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.img
                className="ml-10 h-[450px] w-[400px] rounded-xl shadow-2xl"
                src={Image}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;