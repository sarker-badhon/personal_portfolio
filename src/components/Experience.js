import React from 'react';
import html from '../assets/html5.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/reactImage.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';
import nextjs from '../assets/nextjs.png';
import firebase from '../assets/firebase.png';
import mongodb from '../assets/mongodb.png';
import github from '../assets/github.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'REACT',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 6,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-sky-400'
    },
    {
      id: 7,
      src: nextjs,
      title: 'Next js',
      style: 'shadow-white'
    },
    {
      id: 8,
      src: mongodb,
      title: 'Mongodb',
      style: 'shadow-green-400'
    },
    {
      id: 9,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-pink-400'
    },
    {
      id: 10,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400'
    },
  ];

  return (
    <div className="">
      <div className=" my-8" id="experience">
        <div className="lg:mr-[150px] lg:ml-[150px] px-5 lg:py-10">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 py-2 mb-6 text-center">My Experience</h2>
          <p className="mb-8 text-center">These are the technologies</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {techs.map(({ id, src, title, style }) => (
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} key={id}>
                <img className="w-40 h-40 mx-auto mb-4" src={src} alt={title} />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
