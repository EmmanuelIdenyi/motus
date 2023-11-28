import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({username:"",email:"",password:""});

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    }

  const login = async () => {
    let dataObj;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert('Invalid email/password')
      }
  }

  const signup = async () => {
    let dataObj;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
  }

  return (
    <div className="loginsignup">
    <div className={`wrapper active-popup ${state === 'Sign Up' ?  'active' : ''}`}>
      <div className={`form-box ${state === 'Sign Up' ? 'register' : 'login'}`}>
          <h2>{state}</h2>
     
              {state==="Sign Up"?<div className="input-box">
                  <span className="icon" ><i className="fa-sharp fa-solid fa-user"></i></span>
                  <input type="text" name="username" value={formData.username} onChange={changeHandler} required/>
                  <label>Username</label>
              </div>:<></>}
              <div className="input-box">
                  <span className="icon" ><i className="fa-sharp fa-solid fa-envelope"></i></span>
                  <input type="email" name="email" value={formData.email} onChange={changeHandler} required/>
                  <label>Email</label>
              </div>
              <div className="input-box">
                  <span className="icon"><i className="fa-sharp fa-solid fa-lock"></i></span>
                  <input type="password" name="password" value={formData.password} onChange={changeHandler} required/>
                  <label>Password</label>
              </div>
              <div className="remember-forgot">
                  <label><input type="checkbox"/> Remember me</label>
              </div>
              <div className="remember-forgot">
                  <label><input type="checkbox"/> I agree to the terms & conditions</label>
              </div>
              {state==="Login"
              ?<button className="btn" onClick={()=>{login()}} disabled={!(formData.email || formData.password)}>Login</button>
              :<button className="btn" onClick={()=>{signup()}} disabled={!(formData.email || formData.password)}>SignUp</button>}

              {state==="Login"?
              <div className="login-register">
              <p>Don't have an account? <span onClick={()=>{setState("Sign Up")}} className="register-link">Click here</span></p></div>
              :<div className="login-register">
              <p>Already have an account?  <span onClick={()=>{setState("Login")}} className="login-link">Login here</span></p></div>}

      </div>
    </div>
  </div>

  );
};

export default LoginSignup;
