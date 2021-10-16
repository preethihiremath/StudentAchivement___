import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
hero :{
    background:'url("https://media.istockphoto.com/photos/abstract-blurred-office-interior-background-picture-id1313115119?b=1&k=20&m=1313115119&s=170667a&w=0&h=E4WPdhmRrjCcQHXszYhhfg1nOMHD7vGtpL4usT9KOwM=")',
    backgroundPosition:'cover',
    minHeight:'100vh',
    height:'100%',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    position:'relative',
    '@media screen and (max-width:654px)':{
     minHeight:'200px',
      height:'200px',
    }

},
overlay :{
    maxWidth:'400px',
    maxHeight:'80px',
    zIndex:300,
    backgroundColor:'white',
    display:'flex',
    flexDirevtion:'row',
    position:'absolute',
    top:'250px',
    left:'200px',
    borderTopLeftRadius:'45px',
    borderBottomLeftRadius:'45px',
    borderTopRightRadius:'10px',
    borderBottomRightRadius:'10px',
    '@media screen and (max-width:654px)':{
     top:'10%',
     left:'10%',
    
    }

},
image:{
    borderRadius:'50%',
    width:'80px',
    height:'80px',
    objectFit:'cover',
    '@media screen and (max-width:654px)':{
  
       }
},
info :{
    padding:'1rem 0.5rem 0rem',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    juststufyConent:'left'
},

});
export default useStyles;
