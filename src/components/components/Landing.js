import React from 'react'
import Login from './Login'
import useStyles from '../../styles/styles';

const Landing =(props)=>{
const classes=useStyles();
return(
   <div className={classes.landing}>
     <div className={classes.landingOverlay}>
      <h1 className={classes.welcome}> Welcome to Student Achivement</h1>
      <p style={{color:'white'}}>Please Login to Continue </p>
        <Login handleUserData={props.handleUserData} />
     </div>
   </div>
    );
}
export default Landing;