import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
blog:{
padding:'0 4rem',
height:'100vh',
},
heading: {
textAlign:'right',
fontSize:'40px'
},
skills :{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
list :{
    width:'250px',
    margin:'40px',
    listStyle:'none',
    borderRadius:'25px',
    
    padding:'2rem',
    textAlign:'center'
},
listElement :{
    fontSize:'1rem',
    marginTop:'10px',
}
});
export default useStyles;