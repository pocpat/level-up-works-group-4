const express = require("express");
const { pool } = require("../db/db-config");
//using Express Router
const router = express.Router();

// API endpont for Help-Request
//router
router.get("/api/help-request", (req, res) => {
  pool.query(
    `SELECT request_id, date_created, DATE_FORMAT(date_created, '%h:%i') AS time, done, name, profile_pic FROM help_request JOIN student ON help_request.student_id = student.student_id WHERE done = 0`,

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result); // sending the result of the query as the API response
      }
    }
  );
});

router.post('/api/help-request', (req, res) => {
  console.log(`post was made to help-request`, req.body.query);
  pool.query(req.body.query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result); // sending the result of the query as the API response
    }
  });
});

//export
module.exports = router;
