import React,{useState} from 'react'
import { Box,TextField,Typography,Button} from '@material-ui/core'
import useStyles from '../../styles/usn';
import {useHistory} from 'react-router-dom';

const USNInput =(props)=>{

  const classes=useStyles();
  let history=useHistory();
  const [usn,setUsn] =useState(null);
  const [phno, setPhNo]=useState(null);

const Validate= async ()=>{
  let usnValid=false //get user
  let phValid =false

    try {
          // data=await get_user_data (usn);
         props.handleUserData("usn",usn);
          // props.handleUserData("depatment_id",data.department_id);
          // props.handleUserData("batch",data.batch);
          usnValid= true;
          // phone=await validate_ph_number(phno);
          //  props.handleUserData("phone",phone);
           phValid=true;
    } catch(error){
           usnValid=false 
           phValid=false
    }

  if (usnValid && phValid ){
       return true
  }
  else {
      return false
    }
  }
const handleUsnChange = (event) => {
  setUsn(event.target.value);
};

const handlePhnoChange = (event) => {
    setPhNo(event.target.value);
};
const handleSubmit =(event) =>{
   event.preventDefault();
   if(Validate()){ 
     history.push('/feed')
   }
   else {
     alert("Invalid USN OR Phone");
     history.push('/usn')
   }
}
return(
    <Box 
    component="form" 
    className={classes.usnForm}    sx={{
      '& .MuiTextField-root': { m: 1,  },
    }}
    noValidate
    autoComplete="off">
      <Typography as="h1" className={classes.usnHeading}>Enter the following details </Typography>
        <TextField
          required
          id="usn"
          label="USN"
          type="text"
          variant="outlined"
          className={classes.inputText}
          onChange={handleUsnChange}
        />      
         <TextField
          required
          id="phno"
          label="Phone Number"
          variant="outlined"
          className={classes.inputText}
          onChange={handlePhnoChange}
        />     

          <Button type="submit" variant="contained"  className={classes.nextButton} onClick={handleSubmit}  >
              Next
          </Button>
    </Box>
    );
}
export default USNInput;