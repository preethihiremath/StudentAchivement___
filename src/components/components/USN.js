import React from 'react'
import Grid from '@mui/material/Grid';
import USNForm from './USNForm';
import Hero from './Hero'

const USN =(props)=>{
return(
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
                <Hero userData={props.userData}/>
        </Grid>

        <Grid item xs={12} sm={6}>
            <USNForm  handleUserData={props.handleUserData}/>
        </Grid>
    </Grid>

    );
}
export default USN;