import React from 'react';
import hireMe from '../assets/atomix-restaruant-chef.web.app.jpeg';
import yoga_zone from '../assets/yoga-zone.web.app.jpeg';
import teddy_bear from '../assets/teddy-bear-client.web.app.jpeg';


const Projects = () => {
  return (
    <section className="py-10 text-white" id="project">
      <div className="text-center lg:mr-[150px] lg:ml-[150px] px-5 lg:py-10">
        <h3 className="text-4xl font-semibold">
          My<span className="text-cyan-600"> Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome work</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className=" w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-full gap-4">



            <div className="h-fit w-full p-4 bg-slate-700 ">
              <img src={hireMe} alt="Top Chef App" className="h-[270px] border border border-blue-600 rounded-lg rounded shadow-t-xl hover:scale-105 lg:w-full object-fit " />
              <h3 className="text-xl my-4">Restaruant Chef Application</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/sarker-badhon/Atomix_Restaurnt_chef_client_complete_projects" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Github
                </a>
                <a
                  href="https://atomix-restaruant-chef.web.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 bg-gray-800 px-2 py-1"
                >
                  Live Demo
                </a>
              </div>
            </div>


            <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
            <img src={yoga_zone} alt="Top Chef Application" className="h-[270px] border border border-blue-600 rounded-lg rounded shadow-t-xl hover:scale-105" />
              <h3 className="text-xl my-4">Yoga Zone App</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/sarker-badhon/Yoga_Zone_client_complete_project"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Github
                </a>
                <a
                  href="https://yoga-zone-client.web.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 bg-gray-800 px-2 py-1"
                >
                  Live Demo
                </a>
              </div>
            </div>



            <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
            <div className="flex mx-auto hover:scale-105">
            <img src={teddy_bear} alt="Teddy_bear Application" className="h-[270px] border border border-blue-600 rounded-lg rounded shadow-t-xl object-fit" />
            <img src={teddy_bear} alt="Teddy_bear Application" className="h-[270px] border border border-blue-600 rounded-lg rounded shadow-t-xl " />
            </div>
              <h3 className="text-xl my-4">Teddy House Application</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/sarker-badhon/Teddy_House_complete_project"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Github
                </a>
                <a
                  href="https://teddy-bear-client.web.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 bg-gray-800 px-2 py-1"
                >
                  Live Demo
                </a>
              </div>
            </div>

          </div>
          {/* Add more as needed */}

        </div>
      </div>
    </section>
  );
};

export default Projects;
