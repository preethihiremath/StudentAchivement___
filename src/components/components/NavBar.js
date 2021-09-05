import React,{useState} from 'react'
import {ThemeProvider,createTheme,CssBaseline,AppBar,Toolbar,Fab,Typography,Container ,Zoom, useScrollTrigger} from '@material-ui/core'
import { green, purple, yellow } from '@material-ui/core/colors';
import Switch from "@material-ui/core/Switch";
import useStyles from '../../styles/navbar';
import {Link} from 'react-router-dom'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const NavBar =(props)=>{
  const classes = useStyles();
  const [darkState,setDarkState]=useState(true);
  const palletType=darkState ? "dark":"light";
  const mainPrimary=darkState ? purple[50]: green[50];
  const mainSecondary=darkState?purple[50]:yellow[50];
  const darkTheme =createTheme(
    {
      palette :{
        type:palletType,
        primary:{
          main:mainPrimary
        },
        secondary:{
          main:mainSecondary
        }
      }
    }
  );
  const handleThemeChange =()=>{
    setDarkState(!darkState);
  }
    return (
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar>
        <Toolbar className={classes.navbar}>
          <div className={classes.navbarBrand}>
            <img src="" alt="ph"/>
             <Typography variant="h6">Preethi</Typography>
          </div>

            <ul className={classes.navbarMenu}>
              <li> <Link to="#home">Home</Link></li>
              <li> <Link to="#projects">Project</Link></li>
              <li> <Link to="#projects">Blog</Link></li>
              <li> <Link to="#projects">Contact</Link></li>
            </ul>
        </Toolbar>
      </AppBar>

     
      <Container>
        ,=ifjfdshvsghvsdgh
      </Container>
    
   
      </ThemeProvider>
     
    );
}
export default NavBar;