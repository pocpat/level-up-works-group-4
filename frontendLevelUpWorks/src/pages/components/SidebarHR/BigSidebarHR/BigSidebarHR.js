import { Link } from 'react-router-dom';
import styles from './BigSidebarHR.module.css';
import Teach from '../../../../src-assets/Ellipse-38.png';
import ProgressTitleIcon from '../../../../src-assets/TeacherDashboard/progressTracker.png';
import StudProfIcon from '../../../../src-assets/TeacherDashboard/studentProfiles.png';
import HelpReqIcon from '../../../../src-assets/TeacherDashboard/helpRequestsSelected.png';
import ProjSubIcon from '../../../../src-assets/TeacherDashboard/projectSubmissions.png';
import ProjLibIcon from '../../../../src-assets/TeacherDashboard/projectLibrary.png';
import CloseArrow from '../../../../src-assets/arrowLeft.png';
import Profile from '../../../../src-assets/profile.png';
import Settings from '../../../../src-assets/settings.png';
import Logout from '../../../../src-assets/logout.png';

export default function BigSidebar({ handleSidebar }) {
  return (
    <div className={styles.BigSidebar}>
      <img className={styles.TeachPhoto} src={Teach} alt='Teacher' />
      {/* <div className={styles.HLMenu}>
        <img className={styles.PTIcon} src={ProgressTitleIcon} alt='progress' />
        <p className={styles.HLmenuText}>PROGRESS TRACKER</p>
      </div> */}
      {/* <div className={styles.HLMenu}>
        <img className={styles.HRIcon} src={HelpReqIcon} alt='progress' />
        <p className={styles.HLmenuText}>HELP REQUEST</p>
      </div> */}
      <div>
        <div className={styles.sideBarContent}>
          <div className={styles.sideBarImages}>
            <Link to='/progress-tracker'>
              <img
                className={styles.PTIcon}
                src={ProgressTitleIcon}
                alt='progress'
              />
            </Link>
            <Link to='/student-profiles'>
              <img
                className={styles.SPIcon}
                src={StudProfIcon}
                alt='studProf'
              />
            </Link>
          </div>
          <div className={styles.sideBarText}>
            <Link to='/progress-tracker' className={styles.menuText}>
              PROGRESS TRACKER
            </Link>
            <Link to='/student-profiles' className={styles.menuText}>
              STUDENT PROFILES
            </Link>
          </div>
          {/* SIDEBAR CONTENT END DIV */}
        </div>
        {/* Highlighted Menu */}
        <div className={styles.HLMenu}>
          <img className={styles.HRIcon} src={HelpReqIcon} alt='progress' />
          <p className={styles.HLmenuText}>HELP REQUEST</p>
        </div>

        <div className={styles.sideBarContent}>
          <div className={styles.sideBarImages}>
            <Link to='/project-submissions'>
              <img className={styles.PSIcon} src={ProjSubIcon} alt='ProjSub' />
            </Link>
            <Link to='/project-library'>
              <img className={styles.PLIcon} src={ProjLibIcon} alt='ProjLib' />
            </Link>
          </div>
          <div className={styles.sideBarText}>
            <Link to='/project-submissions' className={styles.menuText}>
              PROJECT SUBMISSIONS
            </Link>
            <Link to='/project-library' className={styles.menuText}>
              PROJECT LIBRARY
            </Link>
          </div>
          {/* SIDEBAR CONTENT END DIV */}
        </div>
      </div>
      <div className={styles.closeBtn}>
        <img
          onClick={handleSidebar}
          src={CloseArrow}
          alt='CloseArrow'
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className={styles.BSBottom}>
        <div className={styles.BSProfile}>
          <Link className={styles.BSImages} to='/teacher-profile-viewer'>
            <img src={Profile} alt='Profile' />
          </Link>
          <Link to='teacher-profile-viewer' className={styles.BSText}>
            Profile
          </Link>
        </div>
        <div className={styles.BSSettings}>
          <Link to='/'>
            <img className={styles.BSImages} src={Settings} alt='Settings' />
          </Link>
          <Link to='/' className={styles.BSText}>
            Settings
          </Link>
        </div>
        <div className={styles.BSLogout}>
          <Link className={styles.BSImages} to='/'>
            <img src={Logout} alt='Logout' />
          </Link>
          <Link to='/' className={styles.BSText}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
