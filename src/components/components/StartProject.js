import React from 'react'
import useStyles from '../../styles/start';
import {Button } from '@material-ui/core'
import { useMediaQuery ,useTheme} from '@material-ui/core';

const Contact =({darkTheme})=>{
    const classes=useStyles();
    const theme= useTheme();
    const showText = useMediaQuery(theme.breakpoints.up('md'));
    return (
   <section className={classes.start}>
      <h1 classes={classes.heading}>Start A Project</h1>
      { showText && <p classes={classes.para}>Intersted In working together? We should queue up a chat. I'll buy the coffee</p>}
      <Button variant="contained" color="secondary" classes={classes.button}>Let's do this</Button>
   </section>
    );
}
export default Contact;
