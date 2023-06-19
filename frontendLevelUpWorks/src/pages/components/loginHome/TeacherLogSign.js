import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginTeacher from "./LoginTeacher";
import SignupTeacher from "./SignupTeacher";


const TeacherLogSign = (props) => {
  // === show/hide login and signup forms ===
  const [showSignUp, setShowSignUp] = useState(true);
  const [showLogIn, setShowLogIn] = useState(false);

  //  === active button underline ===
  const [activeBtn, setActiveBtn] = useState(null);
  const handleButtonClick = (button) => {
    setActiveBtn(button);
  };

  return (
    <div className="temp-container">
      <img src={props.pic} alt="user" />
      <h1 className="loginH1">{props.title}</h1>
      <div className="login-box">
        <h2
        className={activeBtn === 'loginTSBTN' ? "activeLS blueLS" : ""}
          onClick={() => {
            setShowSignUp(true);
            setShowLogIn(false);
            handleButtonClick('loginTSBTN')
          }}
        >
          LOG IN
        </h2>
        <h2
        className={activeBtn === 'signupTSBTN' ? "activeLS pinkLS" : ""}
          onClick={() => {
            setShowLogIn(true);
            setShowSignUp(false);
            handleButtonClick('signupTSBTN')
          }}
        >
          SIGN UP
        </h2>
      </div>
      {/* =========== LOGIN form ================= */}
      {showLogIn && (
        <SignupTeacher />  
  
      )}
 {/* ===========   SIGNUP form =================*/}
      { showSignUp && (
        <>
   
    <LoginTeacher/>  

</>
      )}
    </div>
  );
};




export default TeacherLogSign;