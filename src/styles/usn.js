import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
 usnHeading:{
        textAlign:'center',
        fontSize:'2rem',
        fontWeight:600,
    },
nextButton :{
    marginTop:'2rem',
    padding:'1rem',
    maxWidth:'50%',
    backgroundColor:'green',
    color:'white'
},
usnForm :{
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
inputText :{
    marginTop:'2rem'
},

});
export default useStyles;
