import React from 'react'
import { Box,} from '@material-ui/core'
import useStyles from '../../styles/styles';
const Hero =(props)=>{

  const classes=useStyles();
return(
    <Box className={classes.hero}>
      <div className={classes.overlay}>
        <img className={classes.image} src={props.userData.image} />
       <div className={classes.info}>
           <p className={classes.para}>{props.userData.name}</p>
           <p className={classes.para}>{props.userData.batch}</p>
        </div>
       </div>
    </Box>
    );
}
export default Hero;