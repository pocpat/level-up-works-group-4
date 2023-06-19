const express = require("express");
const { pool } = require("../db/db-config");
//using Express Router
const router = express.Router();

router.get("/total-Projects", (req, res) => {
  pool.query(`SELECT project_id FROM project`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result); // sending the result of the query as the API response
    }
  });
});

// exporting route
module.exports = router;
