import './styles/App.css'
import Header from "./Helping components/Header";
import Footer from "./Helping components/Footer";
import Earth from "./Earth";
import Home from "./Home";
import Profile from "./Profile";
import Science from "./Science";
import Space from "./Space";
import Technology from "./Technology";
import Login from "./Login";
import NotFound from "./notfound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import { use } from 'react';


function App() {
                    
  const[isLoggedIn, setIsLoggedIn] = useState(false); 
  const[currentId, setCurrentId] = useState();

  const[imageName, setImageName] = useState();
  
  if(!isLoggedIn){
    return <Login confirmationData={val => setIsLoggedIn(val)}
                  setId={newId => setCurrentId(newId)}
                  setName={val => setImageName(val)}
                  />
  }
  else if(isLoggedIn){
    
    return (
      <div>
        <Routes>
            <Route 
              exact path="/"
              element={ <Home profileImage={imageName} id={currentId}/>} 
            />
            <Route 
              exact path="/Profile"
              element={ <Profile confirmationLogout={val => setIsLoggedIn(val)}
                                 setId={() => setCurrentId()} 
                                 id={currentId}   
                                 imageName={(val) => setImageName(val)}                                  /> }
            />
            <Route
              exact path="/Home"
              element={ <Home profileImage={imageName} id={currentId}/>}
            />
            <Route
              exact path="/Earth"
              element={ <Earth profileImage={imageName} id={currentId}/>}
            />
            <Route
              exact path="/Science"
              element={ <Science profileImage={imageName} id={currentId}/>}
            />
            <Route
              exact path="/Space"
              element={ <Space profileImage={imageName} id={currentId}/>}
            />
            <Route
              exact path="/Technology"
              element={ <Technology profileImage={imageName} id={currentId}/>}
            />
            <Route
              path="*"
              element={ <NotFound profileImage={imageName} id={currentId}/>}
            />
        </Routes>     
      {/**<Footer /> */} 
      </div>
    )
  }

}

export default App;
