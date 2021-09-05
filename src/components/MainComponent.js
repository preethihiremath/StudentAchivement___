import React,{useState} from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Project from './components/Projects'
import Contact from './components/Contact';
import Blog from './components/Blog';

import {ThemeProvider,createTheme} from '@material-ui/core';
const MainComponent =()=>{
    const [darkState,setDarkState]=useState(true);
    const palletType=darkState ? "dark":"light";
    const mainPrimary=darkState ? '#0D1B34': '#ffe9fe';
    const mainSecondary=darkState?'#90afff':'#ebd6ed';
    document.querySelector('body').style.backgroundColor=mainPrimary;
    const theme =createTheme(
      {
        palette :{
          type:palletType,
          primary:{
            main:mainPrimary,
          },
          secondary:{
            main:mainSecondary
          }
        }
      }
    );
    const handleThemeChange =()=>{
        setDarkState(!darkState);
       
       
      
      }
    return (
        <>
        <ThemeProvider theme={theme}>
            <NavBar darkState={darkState} handleThemeChange={handleThemeChange} />
            <Hero darkState={darkState} />
            <Project darkState={darkState} />
            <Blog darkState={darkState} />
            <Contact />
        </ThemeProvider>
        
        </>
    );
}
export default MainComponent;