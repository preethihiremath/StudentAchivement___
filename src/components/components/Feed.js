import React from 'react'
import FeedForm from './FeedForm'
import Hero from './Hero'
import Grid from '@mui/material/Grid';
const Feed =(props)=>{
return(
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <Hero userData={props.userData}/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <FeedForm handleUserData={props.handleUserData} userData={props.userData} />
        </Grid>
    </Grid>
    );
}
export default Feed;