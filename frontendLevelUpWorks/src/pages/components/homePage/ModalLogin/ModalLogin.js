import React, { useEffect, useState } from "react";
import "./ModalLogin.css";
import "../../loginHome/Login.css";
import teachersPic from "../../../../src-assets/LoginSignup/teachers.png";
import studentsPic from "../../../../src-assets/LoginSignup/students.png";
import TeacherLogSign from "../../loginHome/TeacherLogSign";
import StudentLogSign from "../../loginHome/StudentLogSign";

const ModalLogin = ({ show, handleClose }) => {
  const checkClickOutside = (e) => {
    if (e.target.id === "contact-modal-login") {
      handleClose();
    }
  };

  
  
  return (
    <>
      
      <div
        className="modal-login"
        id="contact-modal-login"
        onClick={checkClickOutside}
        style={{ display: show ? "block" : "none" }}
      >
        <div id="modal-content-login">
          <div className="modal-header-login">
          <span className="close-modal-login" onClick={handleClose}>
          X
        </span>
            <div className="modal-two-login">
             <section className="teacher">
                <StudentLogSign title="Students" pic={studentsPic} />
              </section> 
              <section className="student">
                <TeacherLogSign title="Teachers" pic={teachersPic} />
              </section>
            </div>
            <div className="modal-footer-login"></div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ModalLogin;
