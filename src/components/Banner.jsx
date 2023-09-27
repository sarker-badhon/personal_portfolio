import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/badhon.jpeg';
import { FaGithub, FaLinkedin, FaDribbble, FaDownload } from 'react-icons/fa';
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

                    >
                        <motion.h1
                            className="text-[45px] font-bold leading-[0.10] lg:text-[90px] mb-16 uppercase"
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 0.25 }}
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 8 },
                            }}
                        // whileHover={{scale:1.5}}
                        >
                            Badhon <span>Sarker</span>
                        </motion.h1>
                        <motion.div
                            className="mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold leading-[1]"
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1.5, delay: 0.25 }}
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 8 },
                            }}
                        >
                            <span className="text-white mr-4 uppercase">I am a </span>
                            <TypeAnimation
                                sequence={[
                                    'Web Developer',
                                    2000,
                                    'Front-End Developer',
                                    2000,
                                    'Web Designer',
                                    2000,

                                ]}
                                speed={50}
                                className="text-pink-700"
                                wrapper={motion.span}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            />
                        </motion.div>
                        <motion.p initial="hidden" animate="visible" transition={{duration:2,delay:0.25}}
                        variants={{
                            hidden:{opacity:0,y:75},
                            visible:{opacity:1,y:8},
                        }}>
                            "Hello, my name is Badhon Sarker, and I am a software developer. I am currently pursuing my education at Kurigram Polytechnic, where I am studying computer science. I'm expected to graduate in 2023, and I'm excited to apply my skills and knowledge to real-world projects. I have a passion for web development and specialize in front-end technologies such as HTML, CSS, and JavaScript. Throughout my education, I have gained hands-on experience with frameworks like React js, enabling me to create interactive and user-friendly web applications.
                        </motion.p>
                        <div>
                            <button className="btn btn-sm text-xl mt-3 mr-2">
                                <a href={resume} download="Badhon_resume_fewd (1).pdf">
                                    <FaDownload className="" />
                                </a>
                                My Resume</button>

                            <button className="btn btn-lg text-xl mt-3 px-8">
                                <a href={cover_latter} download="Badhon-Cover_Letterf.pdf">
                                    <FaDownload /> <span>Cover Letter</span>
                                </a>
                            </button>
                        </div>
                        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex text-[30px] gap-x-5 sm:max-w text-white mx-auto mt-5">
                            <div className=" rounded-full p-4" style={{
                                background: 'linear-gradient(to right, #000fff,#ff00ff)',
                                backgroundClip: 'padding-box',
                            }}>
                                <a href="https://www.linkedin.com" target="_blank">
                                    <FaLinkedin />
                                </a>
                            </div>

                            <div className=" rounded-full p-4" style={{
                                background: 'linear-gradient(to right, #ff00ff, #ffff00)',
                                backgroundClip: 'padding-box',
                            }}>
                                <a href="https://github.com/sarker-badhon" target="_blank">
                                    <FaGithub />
                                </a>
                            </div>

                            <div className="shadow-lg rounded-full p-4" style={{
                                background: 'linear-gradient(to right, #ffff00, #ff00ff)',
                                backgroundClip: 'padding-box',
                            }}>
                                <a href="dribbble-link" target="_blank">
                                    <FaDribbble />
                                </a>
                            </div>

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