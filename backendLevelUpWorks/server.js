const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const cors = require("cors");
const bcrypt = require("bcrypt");
//enable express
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 2,
  database: process.env.MYSQL_DATABASE,
});

// Route Imports
const helpRequestRouter = require("./routes/helpRequestRoute");
const teacherProfViewerRouter = require("./routes/teacherProfViewerRoute");
const profileCardsRouter = require("./routes/profileCardsRoute");
const progressTrackerRouter = require("./routes/progressTrackerRoute");
const totalProjectsRouter = require("./routes/totalProjectsRoute");
const loginRouter = require("./routes/loginRoute");
const signupRouter = require("./routes/signupRoute");

// Routes
app.use(helpRequestRouter);
app.use(teacherProfViewerRouter);
app.use(profileCardsRouter);
app.use(progressTrackerRouter);
app.use(totalProjectsRouter);
app.use(loginRouter);
app.use(signupRouter);




const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`Server Connected! Listening at http://localhost:${PORT}`);
});
