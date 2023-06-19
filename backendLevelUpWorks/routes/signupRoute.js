const express = require("express");
const { pool } = require("../db/db-config");
const bcrypt = require('bcrypt');
//using Express Router
const router = express.Router();


//  ====================== signup student =================================
router.post("/signup/student", (req, res) => {
  console.log("1st log: " + req.body.name, req.body.email);
  // check if a user with the same name or email already exists in the database
  pool.execute(
    `SELECT * FROM student WHERE name = ? OR email = ?`,
    [req.body.name, req.body.email],
    (err, result) => {
      if (err) {
        // console.log('2nd log: '+err);
        return res.status(500).send("Error checking for existing user");
      }
      if (result.length > 0) {
        return res
          .status(400)
          .send("User with this name or email already exists");
      }
      // hash the user's entered password before saving it to the database and insert it into the database
      bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        // console.log('3rd log: '+req.body.password, hashedPass);
        pool.execute(
          `INSERT INTO student (name,email,password) VALUES(?,?,?);`,
          [req.body.name, req.body.email, hashedPass],
          (err, result) => {
            // console.log('4th log: '+req.body.name, req.body.email, hashedPass);
            if (err) {
              // console.log('5th log: '+err);
              return res.status(400).send("Error creating user");
            }
            res.status(200).send("Student created");
          }
        );
      });
    }
  );
});

//  ====================== signup teacher =================================
router.post("/signup/teacher", (req, res) => {
  // console.log('1st log: '+req.body.name, req.body.email);
  // check if a user with the same name or email already exists in the database
  pool.execute(
    `SELECT * FROM teacher WHERE name = ? OR email = ?`,
    [req.body.name, req.body.email],
    (err, result) => {
      if (err) {
        // console.log('2nd log: '+err);
        return res.status(500).send("Error checking for existing user");
      }
      if (result.length > 0) {
        return res
          .status(400)
          .send("User with this name or email already exists");
      }
      // hash the user's entered password before saving it to the database and insert it into the database
      bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        console.log('3rd log: '+req.body.password, hashedPass);
        pool.execute(
          `INSERT INTO teacher (name,email,password) VALUES(?,?,?);`,
          [req.body.name, req.body.email, hashedPass],
          (err, result) => {
            // console.log('4th log: '+req.body.name, req.body.email, hashedPass);
            if (err) {
              // console.log('5th log: '+err);
              return res.status(400).send("Error creating user");
            }
            res.status(200).send("Teacher created");
          }
        );
      });
    }
  );
});

// exporting route
module.exports = router;