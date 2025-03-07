import './styles/Login.css'
import { React, useState } from 'react'
import axios from 'axios';
import validator from 'validator';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Images
import loginImage from "../assets/images/bg.jpg";




function Login(props){

    {/**This one changes between Login page and Register Page*/}
    const[loginVisible, setLoginVisible] = useState(true);

    function changeToRegister(e){
        e.preventDefault();             {/**Preventing it from refreshing*/}
        setLoginVisible(false);
    }
    function changeToLogin(e){
        e.preventDefault();
        setLoginVisible(true)
    }

    {/** */}
    const[name, setName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    
    function checkLogin(e){
            e.preventDefault();
            
            axios.post("http://localhost:3000/login", {
                "name": name,
                "email": email,
                "pass": password
            })
            .then(response => {
                if(!response.data.message){
                    alert("Wrong username/password/email.");
                }
                
                props.confirmationData(response.data.message);
                props.setId(response.data.id);
                props.setName(response.data.imageName);
                
                
            })
            .catch(error => {
                console.log(error);
            })
    }

    function registrate(e){
        e.preventDefault();
        
        if(!validator.isEmail(email)){                  //checks if the email is valid
            alert("Plase check your email address")
        }
        else if(name === "" || lastName === "" || email === "" || password === ""){
            alert("In order to registrate, please fill out all the fields.");
        }
        else if(name === null || lastName === null || email === null || password === null){
            alert("In order to registrate, please fill out all the fields.");
        }
        else{
            axios.post("http://localhost:3000/registrate", {
                "name": name,
                "lastName": lastName,
                "email": email,
                "pass": password
            })
            .then(response => {
                alert(response.data.message)

                setTimeout( () => {         //Reloads the page after a 1 sec delay and bring the user
                    location.reload();      //to the Login page.
                }, 500);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    return(
    <>
        <div className="loginPage" >
            <img src={loginImage} alt=""></img>

            <div className={loginVisible ? "loginData" : "regisData"} >  {/**class name for css */}
                {/**This one is for the transparent box effect, loginVisible corresponds with registerOver*/}
            </div>

            {/**This one hovers over the loginData*/}
            <form className="loginOver" style={{visibility: loginVisible ? "visible" : "collapse"}}>
                
                <div className="title">
                    <h1>Welcome, please Login</h1>
                </div>

                <div className="text-input">
                    <input type="text" onChange={e => setName(e.target.value)} placeholder="Name" required={true} />  
                </div>
                <div className="text-input">
                    <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" required={true} />
                </div>
                <div className="text-input">
                    <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" required={true} />
                </div>

                <div className="submit-button">
                    <button onClick={checkLogin} type="submit" name="click1">Submit</button>
                </div>
                <div className="register-button">
                    <button name="click2" onClick={changeToRegister}>Register</button>     
                    {/**When clicked, sets setLoginVisible to false, so that regist. pops visible */}
                </div> 
            </form>

            {/**This one also hovers over the regisData*/}
            <form className="regisOver" action="" style={{visibility: loginVisible ? "collapse" : "visible"}}>
                
                <div className="title">
                    <h1>Register</h1>
                </div>
                <div className="text-input">
                    <input required={true} type="text" onChange={e => setName(e.target.value)} placeholder="First Name"  />  
                </div>
                <div className="text-input">
                    <input required={true} type="text" onChange={e => setLastName(e.target.value)} placeholder="Last Name"  />    
                </div>
                <div className="text-input">
                    <input required={true} type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" /> 
                </div>
                <div className="text-input">
                    <input required={true} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                </div>
                
                
                <div className="submit-button">
                    <button required={true} type="submit" onClick={registrate}>Sign Up</button>    
                </div>
                <div className="register-button">
                   <button type="submit" name="click1" onClick={changeToLogin}>Already have an account?</button> 
                </div>
            </form>

        </div>
        
    </>
    )

}

export default Login;