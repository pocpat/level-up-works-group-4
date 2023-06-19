import styles from "./StudentInfo.module.css";
import { useState, useEffect } from "react";

export default function StudentInfo() {
  //Setting up the state variables I will need for student names and project data
  const [aiden, setAiden] = useState("");
  const [cort, setCort] = useState("");
  const [nagani, setNagani] = useState("");
  const [rawiri, setRawiri] = useState("");
  const [result, setResult] = useState([]);
  const [circles, setCircles] = useState([]);

  //Fetching Student names to be populated on page
  useEffect(() => {
    async function fetchNames() {
      const response = await fetch("http://localhost:4000/student-cards");
      const studentNames = await response.json();
      setAiden(studentNames[1]);
      setCort(studentNames[3]);
      setNagani(studentNames[10]);
      setRawiri(studentNames[0]);
    }
    fetchNames();
  }, []);

  //Fetching data for which and how many projects have been completed
  useEffect(() => {
    fetch("http://localhost:4000/project_completion")
      .then((response) => response.json())
      .then((data) => setResult(data));
  }, []);

  //Fetching total number of available projects
  useEffect(() => {
    fetch("http://localhost:4000/total-projects")
      .then((response) => response.json())
      .then((projects) => setCircles(projects));
  }, []);

  return (
    <>
      {/*Pulled in the student's name usng the first fetch request*/}
      <div className={styles.cardBackground}>
        <div className={styles.studentInfo}>
          <p className={styles.student}>{aiden.name}</p>
          <p className={styles.projectNo}>
            {/*Pulled in the number of projects completed using the second fetch request*/}
            {result[0]?.total_completed_projects}/15 projects completed
          </p>
        </div>
        <div className={styles.courseMarkers}>
          {/* Used the data from third fetch request to map out 15 circles held in my state variable, then used the data from second fetch request to apply either
          the standard CSS class or the green circle class based on whether the student had any completed projects in the db*/}
          {circles.map((circle, index) => {
            let projectID = circle.project_id;
            let isCompleted = result[0].completed_projects
              ?.split(",")
              .includes(projectID.toString());
            {
              /* Had to use the .split(",") as without it the fucntion was reading two digit numbers such as 12 as both 1, 2 and 12*/
            }
            let circleStyle = isCompleted ? styles.greenCircle : styles.circle;
            return (
              <p key={circle.project_id} className={circleStyle}>
                {circle.project_id}
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.cardBackground}>
        <div className={styles.studentInfo}>
          <p className={styles.student}>{cort.name}</p>
          <p className={styles.projectNo}>
            {result[2]?.total_completed_projects}/15 projects completed
          </p>
        </div>
        <div className={styles.courseMarkers}>
          {circles.map((circle, index) => {
            let projectID = circle.project_id;
            let isCompleted = result[2].completed_projects
              ?.split(",")
              .includes(projectID.toString());
            let circleStyle = isCompleted ? styles.greenCircle : styles.circle;
            return (
              <p key={circle.project_id} className={circleStyle}>
                {circle.project_id}
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.cardBackground}>
        <div className={styles.studentInfo}>
          <p className={styles.student}>{nagani.name}</p>
          <p className={styles.projectNo}>
            {result[9]?.total_completed_projects}/15 projects completed
          </p>
        </div>
        <div className={styles.courseMarkers}>
          {circles.map((circle, index) => {
            let projectID = circle.project_id;
            let isCompleted = result[9].completed_projects
              ?.split(",")
              .includes(projectID.toString());
            let circleStyle = isCompleted ? styles.greenCircle : styles.circle;
            return (
              <p key={circle.project_id} className={circleStyle}>
                {circle.project_id}
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.cardBackground}>
        <div className={styles.studentInfo}>
          <p className={styles.student}>{rawiri.name}</p>
          <p className={styles.projectNo}>
            {result[11]?.total_completed_projects}/15 projects completed
          </p>
        </div>
        <div className={styles.courseMarkers}>
          {circles.map((circle, index) => {
            let projectID = circle.project_id;
            let isCompleted = result[11].completed_projects
              ?.split(",")
              .includes(projectID.toString());
            let circleStyle = isCompleted ? styles.greenCircle : styles.circle;
            return (
              <p key={circle.project_id} className={circleStyle}>
                {circle.project_id}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}
