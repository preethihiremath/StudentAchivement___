import React,{useState} from 'react'
import { Box,TextField,Typography,Button,Row,Col} from '@material-ui/core'
import useStyles from '../../styles/styles';
import FeedForm from './FeedForm'
import Hero from './Hero'
import Grid from '@mui/material/Grid';
const Feed =(props)=>{
  const classes=useStyles();
return(
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <Hero userData={props.userData}/>
        </Grid>
        <Grid item xs={6}>
            <FeedForm handleUserData={props.handleUserData} userData={props.userData} />
        </Grid>
    </Grid>
    );
}
export default Feed;