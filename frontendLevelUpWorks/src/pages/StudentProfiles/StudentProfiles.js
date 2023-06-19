import styles from "./StudentProfiles.module.css";
import StudentProfilesSidebarBig from "./StudentProfilesComponents/StudentProfilesSidebarBig";
import StudentProfilesSidebarSmall from "./StudentProfilesComponents/StudentProfilesSidebarSmall";
import DashboardNav from "../../common/DashboardNav/DashboardNav";
import SmallFooter from "../../common/SmallFooter/SmallFooter";
import ProfileCards from "./StudentProfilesComponents/ProfileCards";
import { useState } from "react";

export default function StudentProfiles() {
  const [sideBar, setSideBar] = useState(true);

  function sideBarOpen() {
    setSideBar(true);
  }

  function sideBarClose() {
    setSideBar(false);
  }

  return (
    <div className={styles.background}>
      <DashboardNav />
      <div className={styles.body}>
        <div className={styles.pageBackground}>
          {/* ternary function used to conditionally render the big or small sidebar based on whether state variable is true or false*/}
          {sideBar ? (
            <StudentProfilesSidebarBig
              handleSidebar={sideBarClose}
            ></StudentProfilesSidebarBig>
          ) : (
            <StudentProfilesSidebarSmall
              handleSidebar={sideBarOpen}
            ></StudentProfilesSidebarSmall>
          )}
        </div>
        <div className={styles.profileCards}>
          <ProfileCards></ProfileCards>
        </div>
      </div>
      <SmallFooter />
    </div>
  );
}
