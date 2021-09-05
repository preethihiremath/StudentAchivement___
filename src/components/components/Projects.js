import React from 'react'
import useStyles from '../../styles/project';
import SimpleCarousel from './SimpleCarousel'
import {Divider} from '@material-ui/core';


const Project = ({darkState}) => {
const classes= useStyles();
return (
  <section className={classes.project} >
    <h1 className={classes.heading} style={{color:darkState? 'white': 'black'}} id="projects"> My Projects </h1>
    <Divider style={{color:'red'}} />
     <SimpleCarousel deviceType="desktop" darkState={darkState}/>
  </section>
)
};




export default Project;
