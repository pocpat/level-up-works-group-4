import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginTeacher from "./LoginTeacher";
import LoginStudent from "./LoginStudent";
import SignupTeacher from "./SignupTeacher";

const LoginTemplate = (props) => {
  // === show/hide login and signup forms ===
  const [showSignUp, setShowSignUp] = useState(true);
  const [showLogIn, setShowLogIn] = useState(false);

  //  ===============================================================
 //   // === show/hide login and signup forms ===
//   const [showSignUp, setShowSignUp] = useState(true);
//   const [showLogIn, setShowLogIn] = useState(false);
 
 
  // //  === state for signup/login form ===
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");



  // // === message to render ===
  // const [messageToRender, setMessageToRender] = useState("");
  // //  ==== collect all inputs ====

  // const [loggedInUser, setLoggedInUser] = useState({});

  // function handleUserInput(e) {
  //   console.log(e.target.value);
  //   setLoggedInUser((prevState) => {
  //     return {
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // }
//  =====================================================================
  //  ==== handle submit login ====
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(loggedInUser);

  //   axios
  //     .post("http://localhost:4000/login/teacher", loggedInUser)

  //     .then((data) => {
  //       alert("Login Successful");
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       alert("Please check Username or Password");
  //       console.error("Error:", error);
  //     });
  // };
  //  =====================================================================

  // function handleForm (e){
  // //  prevent the page from reloading
  //     e.preventDefault();
  //     if (e.target.name === "loginTeacher"){
  //         fetch(`https://localhost:4000/login/teacher`, {
  //           method: "post",
  //           headers: { "Content-Type": "application/json", },
  //           body: JSON.stringify({
  //             email: emailLoginTeacher,
  //             password: passwordLoginTeacher,
  //           }),
  //         })
  //           .then((res) => {
  //             console.log(res);
  //             if (res.status === 200) {
  //               const message = <span style={{color:"green"}}>You have successfully logged in!</span>;
  //               setMessageToRender(message);
  //               setTimeout(() => {
  //                 setMessageToRender("");
  //               }, 3000);
  //               setEmailLoginTeacher("");
  //               return setPasswordLoginTeacher("");
  //             } if (!res.ok) {
  //               const message = <span style={{color:"red"}}>Something went wrong, please try again!</span>;
  //               setMessageToRender(message);
  //               setTimeout(() => {
  //                 setMessageToRender("");
  //               }, 3000);
  //             }
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       }
  //       }

  // ====================== handle signup ===================

  return (
    <div className="temp-container">
      <img src={props.pic} alt="user" />
      <h1 className="loginH1">{props.title}</h1>
      <div className="login-box">
        <h2
          onClick={() => {
            setShowSignUp(true);
            setShowLogIn(false);
          }}
        >
          SIGN UP
        </h2>
        <h2
          onClick={() => {
            setShowLogIn(true);
            setShowSignUp(false);
          }}
        >
          LOG IN
        </h2>
      </div>
      {/* ===========   SIGNUP form ================= */}
      {showSignUp && (
     <SignupTeacher/>
      )}
      {/* ===========   LOGIN form =================*/}
      {showLogIn && (
        <>
    <LoginTeacher />    
    <LoginStudent/>
</>
      )}
    </div>
  );
};

export default LoginTemplate;
