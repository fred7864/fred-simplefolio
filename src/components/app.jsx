import React, { Fragment } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';




function App() {
  return (
    <Fragment>
        <Hero />
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </Fragment>
  );
}

export default App;