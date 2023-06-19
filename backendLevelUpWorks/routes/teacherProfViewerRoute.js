const express = require('express');
const { pool } = require('../db/db-config');
//using Express Router
const router = express.Router();

// API endpont for Teacher Profile viewer
//router
router.get('/api/teacher-prof-viewer', (req, res) => {
  pool.query(
    `SELECT teacher_id, name, email, school, profile_pic, DATE_FORMAT(date_of_birth, '%M %d %Y') AS date_of_birth, contact_number FROM missio20_team4.teacher WHERE teacher_id = 1`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result); // sending the result of the query as the API response
      }
    }
  );
});

//export
module.exports = router;
