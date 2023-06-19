const express = require("express");
const { pool } = require("../db/db-config");
const bcrypt = require('bcrypt');
//using Express Router
const router = express.Router();



// ====================== login student  =================================
router.post("/login/student", (req, res) => {
    let password = req.body.password;
    let email = req.body.email;
    pool.query(
      `SELECT * FROM student WHERE email = ?`,
      [email],
      (error, results) => {
        if (error) {
          res.status(500).send("Error checking credentials");
        } else if (results.length === 0) {
          res.status(401).send("Invalid email");
          console.log("I am here in the else if");
        } else {
          const student = results[0];
          console.log(student);
          console.log(password);
          bcrypt.compare(password, student.password, (error, result) => {
            if (result) {
              res.status(200).send("Login successful");
            } else {
              res.status(401).send("Invalid password");
            }
          });
        }
      }
    );
  });
  
  //=======================   LOGIN TEACHER  ============================================
  //  check if email and password exist in database
  router.post("/login/teacher", (req, res) => {
    console.log("/login/teacher ENDPOINT was hit!");
    console.log(req.body);
    let password = req.body.password;
    let email = req.body.email;
  
    pool.query(
      `SELECT * FROM teacher WHERE email = ? `,
      [email],
      (error, results) => {
        if (error) {
          res.status(500).send("Error checking credentials");
        } else if (results.length === 0) {
          res.status(401).send("Invalid email");
          console.log("I am here in the else if");
        } else {
          const teacher = results[0];
          console.log(teacher);
          console.log(password);
          bcrypt.compare(password, teacher.password, (error, result) => {
            if (result) {
              res.status(200).send("Login successful");
            } else {
              res.status(401).send("Invalid password");
            }
          });
        }
      }
    );
  });

  // exporting route
module.exports = router;