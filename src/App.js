import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Work from './components/Work';
import Contact from './components/Contact';

// import Bot from './components/Bot';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden '>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Projects/>
      {/* <Resume/> */}
      {/* <Work /> */}
      <Contact />
      
      {/* <Bot /> */}
      <div className='h-[500px]'></div>
    </div>
  );
};

export default App;
