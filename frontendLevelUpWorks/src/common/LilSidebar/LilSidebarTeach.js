import { Link } from "react-router-dom";
import styles from "./LilSidebarTeach.module.css";
import Teach from "../../src-assets/Ellipse-38.png";
import ProgressTitleIcon from "../../src-assets/TeacherDashboard/progressTrackerSelected.png";
import StudProfIcon from "../../src-assets/TeacherDashboard/studentProfiles.png";
import HelpReqIcon from "../../src-assets/TeacherDashboard/helpRequests.png";
import ProjSubIcon from "../../src-assets/TeacherDashboard/projectSubmissions.png";
import ProjLibIcon from "../../src-assets/TeacherDashboard/projectLibrary.png";
import OpenArrow from "../../src-assets/arrowRight.png";
import Profile from "../../src-assets/profile.png";
import Settings from "../../src-assets/settings.png";
import Logout from "../../src-assets/logout.png";

export default function LilSidebarTeach({ handleSidebar }) {
  return (
    <div className={styles.LilSidebar}>
      <img className={styles.TeachPhoto} src={Teach} alt="Teach" />
      <div className={styles.LilSbTopHalf}>
        <div className={styles.HLMenu}>
          <img src={ProgressTitleIcon} alt="PTIcon" />
        </div>
        <Link to="/student-profiles">
          <img src={StudProfIcon} alt="SPIcon" />
        </Link>
        <Link to="help-requests">
          <img src={HelpReqIcon} alt="HRIcon" />
        </Link>
        <Link to="project-submissions">
          <img src={ProjSubIcon} alt="PSIcon" />
        </Link>
        <Link to="project-library">
          <img src={ProjLibIcon} alt="PLIcon" />
        </Link>
      </div>
      <div className={styles.openBtn}>
        <img
          onClick={handleSidebar}
          src={OpenArrow}
          alt="openArrow"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={styles.bottomSb}>
        <Link className={styles.LBSImages} to="/teacher-profile-viewer">
          <img src={Profile} alt="Profile" />
        </Link>
        <Link to="/">
          <img className={styles.LBSImages} src={Settings} alt="Settings" />
        </Link>
        <Link className={styles.LBSImages} to="/">
          <img src={Logout} alt="Logout" />
        </Link>
      </div>
    </div>
  );
}
