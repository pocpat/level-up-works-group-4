import { Link } from "react-router-dom";
import styles from "../StudentProfilesComponents/StudentProfilesSidebarSmall.module.css";
import Teach from "../../../src-assets/Ellipse-38.png";
import ProgressTitleIcon from "../../../src-assets/TeacherDashboard/progressTracker.png";
import StudProfIcon from "../../../src-assets/TeacherDashboard/studentProfilesSelected.png";
import HelpReqIcon from "../../../src-assets/TeacherDashboard/helpRequests.png";
import ProjSubIcon from "../../../src-assets/TeacherDashboard/projectSubmissions.png";
import ProjLibIcon from "../../../src-assets/TeacherDashboard/projectLibrary.png";
import OpenArrow from "../../../src-assets/arrowRight.png";
import Profile from "../../../src-assets/profile.png";
import Settings from "../../../src-assets/settings.png";
import Logout from "../../../src-assets/logout.png";

export default function SmallSideBar({ handleSidebar }) {
  return (
    <div className={styles.LilSidebar}>
      <img className={styles.TeachPhoto} src={Teach} alt="Teacher" />
      <div className={styles.menuIcons}>
        <Link to="/progress-tracker">
          <img src={ProgressTitleIcon} alt="progress" />
        </Link>
        <div className={styles.HLImage}>
          <Link to="/student-profiles">
            <img src={StudProfIcon} alt="studProf" />
          </Link>
        </div>
        <Link to="help-requests">
          <img src={HelpReqIcon} alt="helpReq" />
        </Link>
        <Link to="project-submissions">
          <img src={ProjSubIcon} alt="projSub" />
        </Link>
        <Link to="student-project-library">
          <img src={ProjLibIcon} alt="projLib" />
        </Link>
      </div>
      <div className={styles.openArrow}>
        <img
          onClick={handleSidebar}
          src={OpenArrow}
          alt="openArrow"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={styles.bottomMenu}>
        <Link to="/teacher-profile-viewer">
          <img src={Profile} alt="profile" />
        </Link>
        <Link to="/">
          <img src={Settings} alt="settings" />
        </Link>
        <Link to="/">
          <img src={Logout} alt="logout" />
        </Link>
      </div>
    </div>
  );
}
