import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
 heading:{
        textAlign:'center',
        fontSize:'2rem',
        fontWeight:600,
    },
 welcome :{
        textAlign:'center',
        fontSize:'3rem',
        fontWeight:600,
    },
signIn :{
    display:'flex', 
    marginTop:'40px',
    justifySelf:'center',
    alignSelf:'center',
    flexDirection:'column',
    maxWidth:'500px',
    height:'auto',
    padding:'1rem 4rem',
    border:'none'
},
     
signInButton :{
    marginTop:'2rem',
    padding:'1rem',
    maxWidth:'50%',
    backgroundColor:'green',
    color:'white'
},
inputText :{
    marginTop:'2rem'
},
hero :{
    background:'url("https://media.istockphoto.com/photos/abstract-blurred-office-interior-background-picture-id1313115119?b=1&k=20&m=1313115119&s=170667a&w=0&h=E4WPdhmRrjCcQHXszYhhfg1nOMHD7vGtpL4usT9KOwM=")',
    backgroundPosition:'cover',
    minHeight:'100vh',
    height:'100%',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    position:'relative'
},
overlay :{
    maxWidth:'400px',
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
    borderBottomRightRadius:'10px'

},
image:{
    borderRadius:'50%',
    width:'80px',
    height:'80px',
    objectFit:'cover'
},
info :{
    padding:'1rem 0.5rem 0rem',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    juststufyConent:'left'
},
para:{
    margin:'0',
    padding:'0'
},
landing :{
    background:'url("https://media.istockphoto.com/photos/abstract-blurred-office-interior-background-picture-id1313115119?b=1&k=20&m=1313115119&s=170667a&w=0&h=E4WPdhmRrjCcQHXszYhhfg1nOMHD7vGtpL4usT9KOwM=")',
    minHeight:'90vh',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'contain',
    position:'relative',
    
},
landingOverlay :{
    position:'absolute',
    top:'30%',
    left:'20%',
    textAlign:'center'
}
});
export default useStyles;
