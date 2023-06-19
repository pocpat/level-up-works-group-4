import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import LoginTeacher from "./LoginTeacher";
// import LoginStudent from "./LoginStudent";

const SignupTeacher = (props) => {
  //  === state for signup/login form ===
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  // === message to render ===
  const [messageToRender, setMessageToRender] = useState("");
  
  //  ==== collect all inputs ====
  const [inputSignUpTeacher, setInputSignUpTeacher] = useState({});
  
  //  =====  confirm password match ==== 
  const [isMatch, setIsMatch] = useState(true);
  useEffect(() => {
    setIsMatch(password === confirmPassword);
    console.log(setIsMatch);
  }, [password, confirmPassword]);
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsMatch(event.target.value === confirmPassword);
  };
  
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setIsMatch(event.target.value === password);
  };


// == handle all user inputs at once  ==
  function handleUserInput(e) {
    console.log(e.target.value);
    setInputSignUpTeacher((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  // function handleInputChange(event) {
  //   handlePasswordChange(event);
  //   handleConfirmPasswordChange(event);
  //   handleUserInput(event);
  // }
 
  
  //  ==== handle  signup ====
  const handleSignup = (e) => {
    e.preventDefault();
   
    if (!isMatch) {
      // console.log(isMatch); // check the value of isMatch
      alert("Passwords do not match");
      return;
    }

    axios
      .post("http://localhost:4000/signup/teacher", inputSignUpTeacher)
      .then((data) => {
        const message = <span style={{ color: "green" }}>Welcome aboard!</span>;
        setMessageToRender(message);
        console.log("Success:", data);
      })
      .catch((error) => {
        const message = (
          <span style={{ color: "red" }}>User/email already exists. </span>
        );
        setMessageToRender(message);
        console.error("Error:", error);
      });
  };

  return (
    <div className="signup">
 {/* name input */}
      <div className="form-box">
        <input
          type="name"
          placeholder="Full Name"
          name="name"
          onChange={handleUserInput}
        />
 {/* email   input   */}
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleUserInput}
        />
 {/* password input*/}
        <input
          type="password"
          placeholder="Password"
          name="password"
         
          onChange={(event) => {
            handlePasswordChange(event);
            handleUserInput(event);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        
          onChange={(event) => {
            handleConfirmPasswordChange(event);
            handleUserInput(event);
          }}
        />
 {/*  message to render  */}
        <p>{messageToRender}</p>
        {!isMatch && <p>Passwords do not match</p>}
 {/* button Signup */}
        <button 
      
        type="submit" 
        onClick={handleSignup} 
        name="signupTeacher">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default SignupTeacher;
