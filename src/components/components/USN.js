import React from 'react'
import { Box,Button} from '@material-ui/core'
import useStyles from '../../styles/styles';
import Grid from '@mui/material/Grid';
import USNForm from './USNForm';
import Hero from './Hero'

const USN =(props)=>{
  const classes=useStyles();
return(
    <Grid container spacing={2}>
        <Grid item xs={6}>
        <Box className={classes.hero}>
            <div className={classes.overlay}>
                <img className={classes.image} src={props.userData.image} alt="image"/>
            <div className={classes.info}>
                <p className={classes.para}>{props.userData.name} </p>
                <p className={classes.para}>{props.userData.batch}Bleh</p>
                </div>
            </div>
         </Box>
        </Grid>

        <Grid item xs={6}>
            <USNForm  handleUserData={props.handleUserData}/>
        </Grid>

    </Grid>

    );
}
export default USN;