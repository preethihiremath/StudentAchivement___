import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Project from './components/Projects'
import Contact from './components/Contact';

const MainComponent =()=>{
    return (
        <>
        <NavBar />
        <Hero />
        <Project />
        <Contact />
        </>
    );
}
export default MainComponent;