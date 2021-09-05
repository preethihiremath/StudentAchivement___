import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
project:{
padding:'1rem 4rem 0',
height:'100vh',
'@media screen and (max-width:654px)':{
    padding:'0',
    height:'auto',
    marginBottom:'60px'
}
},
heading: {
textAlign:'left',
fontSize:'40px',
'@media screen and (max-width:654px)':{
    textAlign:'center',
}
},
carouselCont :{
 position:'relative',
 '@media screen and (max-width:654px)':{
    padding:'0 1rem'
}
},
carouselImg:{
width:'400px',
}
});
export default useStyles;