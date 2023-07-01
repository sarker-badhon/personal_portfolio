import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 text-2xl text-white/50 flex justify-between items-center">

          <Link
            to="home"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            smooth={true} 
              activeClass="active"
              spy={true}
              offset={-200}
              >
            <BiHomeAlt />
          </Link>


          <Link
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            smooth={true} 
              activeClass="active"
              spy={true}>
            <BiUser />
          </Link>


          <Link
            to="experience"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            smooth={true} 
              activeClass="active"
              spy={true}>
            <BsClipboardData />
          </Link>


          <Link
            to="project"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            smooth={true} 
              activeClass="active"
              spy={true}>
            <BsBriefcase />
          </Link>


          <Link
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            smooth={true} 
              activeClass="active"
              spy={true}>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
