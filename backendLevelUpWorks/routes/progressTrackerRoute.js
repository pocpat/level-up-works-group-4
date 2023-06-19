const express = require("express");
const { pool } = require("../db/db-config");
//using Express Router
const router = express.Router();

// API Endpoint for project completion data
router.get("/project_completion", (req, res) => {
  pool.query(
    "SELECT student.student_id, student.name, GROUP_CONCAT(student_projects.project_id) AS completed_projects, COUNT(student_projects.student_id) AS total_completed_projects FROM student LEFT JOIN student_projects ON student.student_id = student_projects.student_id AND student_projects.date_completed IS NOT NULL GROUP BY student.student_id ORDER BY student.name;",
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
