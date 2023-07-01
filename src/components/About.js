
import React from 'react';
import hireMe from '../assets/Hire_me.png';
const About = () => {


  return (
    <section className="py-10 px-3 text-white" id="about">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
        Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do You have any work</p>

      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 gap-6 lg:flex-row flex-col-revers items-center">
        <img src={hireMe} alt="" className="lg:h-[34rem] h-80 lg:absolute bottom-0 -right-2 text-center object-cover" />
        <div>
          <h3 className="text-2xl fon semibold">Do you want any any work form me </h3>
          <p className="max-w-lg text-xl mt-4 text-gary-200 leading-6">
          Are you looking for a passionate and skilled professional to join your team? Look no further! I bring a unique blend of experience, expertise, and a strong commitment to delivering exceptional results.
          </p>
          <button className="btn btn p-3 mt-10">say hello</button>
        </div>
          
      </div>
    </section>
  );
};

export default About;
