import React from 'react';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <header className="py-8">
    <div className=" lg:mr-[150px] lg:ml-[150px] px-5">
        <div className="flex flex-col lg:flex-row justify-between items-center px-3 border-b-4 border-gray-500 pb-5">
          <h2 className="text-4xl font-bold mb-4 lg:mb-0  btn-link">Badhon Sarker</h2>
          <div className="space-y-2 lg:space-y-0 space-x-4 lg:space-x-4 ">
            <Link
              to="project"
              className="btn btn py-3 px-3 cursor-pointer text-xl"
              smooth={true}
              activeClass="active"
              spy={true}
              offset={-200}
            >
              Projects
            </Link>
            
            <Link
              to="resume"
              className="btn btn py-3 px-3 cursor-pointer text-xl"
              smooth={true}
              activeClass="active"
              spy={true}>
              Resume
            </Link>
            
          </div>
        </div>
      </div> 


    </header>
  );
};

export default Header;
