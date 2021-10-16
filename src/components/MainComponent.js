import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import USNInput from './components/USN';
import Navbar from './components/Navbar'
import Feed from './components/Feed'
const MainComponent =()=>{
     const [isLoggedin, setIsloggedIn]=useState(false);
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
        year: '',
    })
    const handleLoggedIn =()=>{
         setIsloggedIn(true);
    }
    const handleUserData =( type , value) =>{    
    switch(type) {
        case "usn":  setUserData(userData =>({...userData , usn: value})); 
             break;
        case "name" : setUserData(userData =>({...userData , name: value})); 
             break;
        case "image" : setUserData(userData =>({...userData , image: value}));
             break;
        case "email" : setUserData(userData =>({...userData , email: value})); 
             break;
        case "phone" : setUserData(userData =>({...userData , phone: value}));
             break;
        case "nameOfEvent" : setUserData(userData =>({...userData , nameOfEvent: value}));
             break;
        case "detailsOfEvent" : setUserData(userData =>({...userData , detailsOfEvent: value}));
             break;
       case "level" : setUserData(userData =>({...userData , level: value})); 
             break;
       case "award" : setUserData(userData =>({...userData , award: value}));
             break;
       case "department_id" : setUserData(userData =>({...userData ,  department_id: value}));
             break;
        case "batch" : setUserData(userData =>({...userData , batch: value}));
             break;
        case "year" : setUserData(userData =>({...userData , year: value}));
             break;
        default : console.log("hehehe");
    }
    console.log(userData);
 }
return(
  <div className="Main">
  <Navbar isLoggedin={isLoggedin} />
  <Router>
      <Switch>
          <Route path="/" exact render={()=> <Landing handleUserData={handleUserData} handleLoggedIn={handleLoggedIn} />} />
           {/*  Should be authenticated??? */}
          <Route path="/usn" exact render={()=> <USNInput handleUserData={handleUserData} userData={userData}/>} />
          <Route path="/feed" exact render={()=> <Feed handleUserData={handleUserData} userData={userData}/>} />
      </Switch>
  </Router>
</div>
    );
}
export default MainComponent