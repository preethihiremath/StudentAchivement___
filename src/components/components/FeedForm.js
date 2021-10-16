import React,{useState} from 'react'
import { TextField,Typography,Button,FormGroup,FormControlLabel,Checkbox} from '@material-ui/core'
import useStyles from '../../styles/feed';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useHistory } from 'react-router';
const USNInput =(props)=>{
  const classes=useStyles();
  const history=useHistory();
  const [year, setYear] = React.useState('');
  const [nameOfEvent,setEvent] =React.useState('');
  const [details,setDetails] =useState('');
  const [level, setLevel] = React.useState('');
  const [award, setAward] = React.useState('No');

  const [checked,setChecked] =React.useState(false);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleEventChange = (event) => {
    setEvent(event.target.value);
  };
  
  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };
  const handleCheckbox =(event) =>{
    if(event.target.checked){
      setAward("Yes");
    }
    else {
      setAward("No");
    }
    
  }
  function Validate (){
    console.log(year,nameOfEvent,details,level, year && nameOfEvent && details && level )
    if(year && nameOfEvent && details && level){
      return true
    }
    else {
      return false
    }
  }
  const handleClear =() =>{
    setYear("");
    setEvent("");
    setDetails("");
    setAward("No");
    setChecked(false);
    setLevel("");
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
       if(Validate()){ 
        console.log(props.userData);
        console.log(year);
        props.handleUserData("year",year);
        props.handleUserData("nameOfEvent",nameOfEvent);
        props.handleUserData("detailsOfEvent",details);
        props.handleUserData("level",level);
        props.handleUserData("award",award);
        console.log(props.userData);
        //   await add_data(props.userData);
        alert("Success")
        history.push('/feed')
        handleClear();
      }
      else {
        throw new Error("Invalid ");
      }
    }
    catch(error)
    {
      alert("Invalid Selection ");
      history.push('/feed')
    }
    }
return(
    <Box 
    component="form" 
    className={classes.feedForm}    sx={{
      '& .MuiTextField-root': { m: 1,  },
    }}
    noValidate
    autoComplete="off">
   
   <Typography as="h1" className={classes.feedHeading} style={{marginBottom:'30px'}}>Enter the Following details </Typography> 
        <FormControl fullWidth style={{marginBottom:'30px'}}>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                labelId="year"
                id="demo-simple-select"
                value={year}
                label="Age"
                onChange={handleYearChange}  
                style={{maxWidth:'484px'}}
              >
                  <MenuItem  style={{display:'flex',flexDirection:'column'}} value={1}>Year 1</MenuItem>
                  <MenuItem value={2}  style={{display:'flex',flexDirection:'column',textAlign:'left',justifyContent:'left'}}>Year 2</MenuItem>
                  <MenuItem value={3}  style={{display:'flex',flexDirection:'column'}}>Year 3</MenuItem>
                  <MenuItem value={4}  style={{display:'flex',flexDirection:'column'}}>Year 4</MenuItem>
              </Select>
          </FormControl>    
          <FormControl fullWidth style={{marginBottom:'30px'}}>
              <InputLabel id="Event">Event</InputLabel>
              <Select
              required
                labelId="Event"
                id="demo-simple-select"
                value={nameOfEvent}
                label="Event"
                onChange={handleEventChange}  
                style={{maxWidth:'484px'}}
              >
                  <MenuItem  style={{display:'flex',flexDirection:'column'}} value="Quiz Competition">Quiz Competition</MenuItem>
                  <MenuItem  style={{display:'flex',flexDirection:'column'}} value="Coding Competition/Hackathons">Coding Competition/Hackathons</MenuItem>
                  <MenuItem value="IEEE Event"  style={{display:'flex',flexDirection:'column',textAlign:'left',justifyContent:'left'}}>IEEE Event</MenuItem>
                  <MenuItem  style={{display:'flex',flexDirection:'column'}} value="Any Techincal Events">Any Techincal Events</MenuItem>
                  <MenuItem  style={{display:'flex',flexDirection:'column'}} value="HackerRank Challenges/ Competetion">HackerRank Challenges/ Competetion</MenuItem>
                  <MenuItem  style={{display:'flex',flexDirection:'column'}} value="Paper or Publications">Paper or Publications</MenuItem>
                  <MenuItem  style={{display:'flex',flexDirection:'column'}} value="Other">Other</MenuItem>
              </Select>
          </FormControl>  

          <FormControl style={{marginBottom:'30px'}}>
            <TextField
              placeholder="Details/Place of Event"
              multiline
              rows={2}
              rowsMax={4}
              value={details}
              id="details"
              label="Details/Place of Event"
              variant="outlined"
              style={{position:'relative',left:'-10px'}}
              className={classes.inputText}
              onChange={handleDetailsChange}
            />   
          </FormControl>
       
        <FormControl >   
            <InputLabel id="level">Level</InputLabel>
            <Select
              required
              labelId="level"
              id="level"
              value={level}
              label="Level"
              onChange={handleLevelChange}
              style={{maxWidth:'484px'}}
            >
                <MenuItem value="college" style={{display:'flex',flexDirection:'column'}}>College</MenuItem>
                <MenuItem value="district" style={{display:'flex',flexDirection:'column'}}>District</MenuItem>
                <MenuItem value="state" style={{display:'flex',flexDirection:'column'}}>State</MenuItem>
                <MenuItem value="national" style={{display:'flex',flexDirection:'column'}}>National</MenuItem>
                <MenuItem value="international" style={{display:'flex',flexDirection:'column'}}>InterNational</MenuItem>
            </Select> 
        </FormControl> 

        <FormGroup className={classes.inputText}>
        <InputLabel id="demo-simple-select-label">Awards ?</InputLabel>
        <FormControlLabel control={<Checkbox onChange={handleCheckbox}/> } label="Yes" />
        </FormGroup>
        <Button variant="contained"  className={classes.finishButton} onClick={handleSubmit}>Finish</Button>
    </Box>
    );
}
export default USNInput;