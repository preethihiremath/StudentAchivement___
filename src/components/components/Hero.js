import React from 'react'
import useStyles from '../../styles/hero';
import hero from '../../images/hero3.svg'
import { useMediaQuery ,useTheme} from '@material-ui/core';

const Hero =({darkState})=>{
  const classes=useStyles();
  const theme= useTheme();
  const showText = useMediaQuery(theme.breakpoints.up('md'));
    return (
     
      <section className={classes.hero} >
        <div className={classes.heroText} style={{color:darkState? 'white': 'black'}}>
          <h1 className={classes.heading}>Hi,<br /> I'm <span className={classes.p}>P</span>reethi</h1>
          <p className={classes.subHeading}>I am a web Developer from Bangalore. <br />If you are a business seeking web presence you can contact me</p>
        </div>
        <div className={classes.heroImage}>
        {showText &&  <img  className={classes.heroImg} src={hero} alt='hero img' style={{marginTop:'140px'}}/> }
        </div>
      </section>
    );
}
export default Hero;
