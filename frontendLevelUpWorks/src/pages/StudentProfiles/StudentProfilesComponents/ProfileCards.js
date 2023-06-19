import styles from "../StudentProfilesComponents/ProfileCards.module.css";
import Scrollbar from "../../../common/Scrollbar/Scrollbar";
import { useState, useEffect } from "react";

export default function ProfileCards() {
  const [results, setResults] = useState([]); // used useState to make changes to how my page displays

  // UseEffect hook wrapping my fetch request so the page doesn't render before the data is retrieved from the db
  useEffect(() => {
    fetch("http://localhost:4000/student-cards")
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);
  return (
    <div className={styles.background}>
      <div className={styles.smallPanel}>
        <div className={styles.list}>
          {/* map function used to map the profile pictures and names of the
          students to cards to be displayed on screen */}
          {results.map(function (results) {
            return (
              <div key={results.student_id} className={styles.card}>
                <img className={styles.avatar} src={results.profile_pic} />
                <span className={styles.nameText}>{results.name}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.scroll}>
          <Scrollbar></Scrollbar>
        </div>
      </div>
    </div>
  );
}
