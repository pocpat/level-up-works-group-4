import styles from "./BeginnerCourse.module.css";
import ExportImg from "../../../src-assets/Icon awesome-file-export.png";
import StudentInfo from "./StudentInfo";
import WimScroll from "../../../common/WimScroll";

export default function BeginnerCourse() {
  return (
    <div className={styles.mainBack}>
      <div className={styles.container}>
        <div>
          <div className={styles.topText}>
            <h2 className={styles.headerText}>BEGINNER COURSE</h2>
            <span className={styles.ExportSec}>
              <img
                className={styles.ExportImage}
                src={ExportImg}
                alt="Export"
              />
              <p>EXPORT AS SPREADSHEET</p>
            </span>
          </div>
          <div className={styles.studentCards}>
            <StudentInfo></StudentInfo>
          </div>
        </div>
        <WimScroll />
      </div>
    </div>
  );
}
