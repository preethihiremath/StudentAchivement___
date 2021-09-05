import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
start:{
    padding:'2rem',
    width:'80%',
    backgroundColor:'black',
    border:'1px solid black',
    borderRadius:'25px',
    color:'white',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    zIndex:'5',
    position:'absolute',
    top:'-40px'
},
heading:{
fontSize:'40px',
},
para:{
    textAlign:'center',
},
button:{
    borderRadius:'5%'
}
});
export default useStyles;