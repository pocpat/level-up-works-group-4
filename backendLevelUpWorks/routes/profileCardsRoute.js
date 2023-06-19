const express = require("express");
const { pool } = require("../db/db-config");
//using Express Router
const router = express.Router();

// API Endpoint for profile card details
router.get("/student-cards", (req, res) => {
  pool.query(
    "SELECT * FROM student WHERE teacher_id = 1;", // Statement designed so that only student's in the specific teacher's class will show up in the dashboard
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// exporting route
module.exports = router;
