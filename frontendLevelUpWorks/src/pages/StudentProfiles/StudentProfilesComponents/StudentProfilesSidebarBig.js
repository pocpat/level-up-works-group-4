import { Link } from "react-router-dom";
import styles from "../StudentProfilesComponents/StudentProfilesSidebarBig.module.css";
import Teach from "../../../src-assets/Ellipse-38.png";
import ProgressTitleIcon from "../../../src-assets/TeacherDashboard/progressTracker.png";
import StudProfIcon from "../../../src-assets/TeacherDashboard/studentProfilesSelected.png";
import HelpReqIcon from "../../../src-assets/TeacherDashboard/helpRequests.png";
import ProjSubIcon from "../../../src-assets/TeacherDashboard/projectSubmissions.png";
import ProjLibIcon from "../../../src-assets/TeacherDashboard/projectLibrary.png";
import CloseArrow from "../../../src-assets/arrowLeft.png";
import Profile from "../../../src-assets/profile.png";
import Settings from "../../../src-assets/settings.png";
import Logout from "../../../src-assets/logout.png";

export default function BigSidebar({ handleSidebar }) {
  return (
    <div className={styles.BigSidebar}>
      <img className={styles.TeachPhoto} src={Teach} alt="Teacher" />
      <div className={styles.menu}>
        <Link to="/progress-tracker">
          <img
            className={styles.PTIcon}
            src={ProgressTitleIcon}
            alt="progress"
          />
        </Link>
        <Link to="/progress-tracker" className={styles.menuText}>
          PROGRESS TRACKER
        </Link>
      </div>
      <div className={styles.HLMenu}>
        <Link to="student-profiles">
          <img className={styles.SPIcon} src={StudProfIcon} alt="studProf" />
        </Link>
        <Link to="student-profiles" className={styles.HLmenuText}>
          STUDENT PROFILES
        </Link>
      </div>
      <div className={styles.sideBarContent}>
        <div className={styles.sideBarImages}>
          <Link to="help-requests">
            <img className={styles.HRIcon} src={HelpReqIcon} alt="HelpReq" />
          </Link>
          <Link to="project-submissions">
            <img className={styles.PSIcon} src={ProjSubIcon} alt="ProjSub" />
          </Link>
          <Link to="project-library">
            <img className={styles.PLIcon} src={ProjLibIcon} alt="ProjLib" />
          </Link>
        </div>
        <div className={styles.sideBarText}>
          <Link to="/help-requests" className={styles.menuText}>
            HELP REQUESTS
          </Link>
          <Link to="project-submissions" className={styles.menuText}>
            PROJECT SUBMISSIONS
          </Link>
          <Link to="project-library" className={styles.menuText}>
            PROJECT LIBRARY
          </Link>
        </div>
      </div>
      <div className={styles.closeBtn}>
        <img
          onClick={handleSidebar}
          src={CloseArrow}
          alt="CloseArrow"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={styles.BSBottom}>
        <div className={styles.BSProfile}>
          <Link className={styles.BSImages} to="/teacher-profile-viewer">
            <img src={Profile} alt="Profile" />
          </Link>
          <Link to="teacher-profile-viewer" className={styles.BSText}>
            Profile
          </Link>
        </div>
        <div className={styles.BSSettings}>
          <Link to="/">
            <img className={styles.BSImages} src={Settings} alt="Settings" />
          </Link>
          <Link to="/" className={styles.BSText}>
            Settings
          </Link>
        </div>
        <div className={styles.BSLogout}>
          <Link className={styles.BSImages} to="/">
            <img src={Logout} alt="Logout" />
          </Link>
          <Link to="/" className={styles.BSText}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
