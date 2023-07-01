import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Services from './components/Services';
// import Resume from './components/Resume';
// import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Projects />
      {/* <Resume /> */}
      {/* <Work /> */}
      <Contact />
      <Footer />
      {/* <div className='h-[500px]'></div> */}
    </div>
  );
};

export default App;
