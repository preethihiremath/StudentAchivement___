import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Landing from './components/Landing'
import USNInput from './components/USN';
import Navbar from './components/Navbar'
import Feed from './components/Feed'
const MainComponent =()=>{
    const [userData,setUserData]=useState({
        usn: '',
        name: '',
        email: '',
        image: '',
        phone: '',
        nameOfEvent: '',
        detailsOfEvent: '',
        level: '',
        award: '',
        department_id: '',
        batch: '',
        year: ''
    })
    useEffect(()=>{
     console.log("In useEffect",userData);
   },[userData])
    const handleUserData =( type , value) =>{
        
    switch(type) {
        case "usn":  setUserData({...userData , usn: value}); 
             break;
        case "name" : setUserData({...userData , name: value}); 
             break;
        case "image" : setUserData({...userData , image: value});
             break;
        case "email" : setUserData({...userData , email: value}); 
             break;
        case "phone" : setUserData({...userData , phone: value});
             break;
        case "nameOfEvent" : setUserData({...userData , nameOfEvent: value});
             break;
        case "detailsOfEvent" : setUserData({...userData , detailsOfEvent: value});
             break;
       case "level" : setUserData({...userData , level: value}); console.log("In level ",value)
             break;
       case "award" : setUserData({...userData , award: value});
             break;
       case "department_id" : setUserData({...userData ,  department_id: value});
             break;
        case "batch" : setUserData({...userData , batch: value});
             break;
        case "year" : setUserData({...userData , year: value});
             break;
        default : console.log("hehehe");
    }
    console.log(userData);
 }
return(
  <div className="Main">
  <Navbar />
  <Router>
      <Switch>
          <Route path="/" exact render={()=> <Landing handleUserData={handleUserData} />} />
           {/*  Should be authenticated??? */}
          <Route path="/usn" exact render={()=> <USNInput handleUserData={handleUserData} userData={userData}/>} />
          <Route path="/feed" exact render={()=> <Feed handleUserData={handleUserData} userData={userData}/>} />
      </Switch>
  </Router>
</div>
    );
}
export default MainComponent