import React from 'react'
import useStyles from '../../styles/project';
import Simple from './SimpleCarousel'
import {Divider} from '@material-ui/core';
import "react-multi-carousel/lib/styles.css";
const Project = ({darkState}) => {
const classes= useStyles();
return (
  <section className={classes.project} id="projects">
    <h1 className={classes.heading} style={{color:darkState? 'white': 'black'}}> My Projects </h1>
    <Divider style={{color:'red'}} />
     <Simple deviceType="desktop" darkState={darkState}/>
  </section>
)
};




export default Project;
