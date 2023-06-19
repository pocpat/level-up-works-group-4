import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginStudent = (props) => {
  const navigate = useNavigate();

  // === message to render ===
  const [messageToRender, setMessageToRender] = useState("");
  //  ==== collect all inputs ====

  const [loggedInStudent, setLoggedInStudent] = useState({});

  function handleUserInput(e) {
    console.log(e.target.value);
    setLoggedInStudent((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  //  ==== handle submit login ====
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loggedInStudent);

    axios
      .post("http://localhost:4000/login/student", loggedInStudent)

      .then((data) => {
        // alert("Login Successful");
        const message = <span style={{ color: "green" }}>Welcome back !</span>;
        setMessageToRender(message);
        console.log("Success:", data);
        setTimeout(() => {
          navigate("/student-projects-library");
        }, 2000);
      })
      .catch((error) => {
        // alert("Please check Username or Password");
        const message = (
          <span style={{ color: "red" }}>Please check Email or Password</span>
        );
        setMessageToRender(message);
        console.error("Error:", error);
      });
  };

  return (
    <div className="login-container">
      {/* ===========   LOGIN form =================*/}

      <div className="form-box">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleUserInput}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleUserInput}
        />
        {/*  message to render */}
        <p>{messageToRender}</p>
        {/* button LOGIN */}
        <button name="loginStudent" type="submit" onClick={handleSubmit}>
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default LoginStudent;
