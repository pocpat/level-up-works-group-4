import styles from "./ProgressTracker.module.css";
import BigSidebarTeach from "../../common/BigSidebar/BigSidebarTeach";
import LilSidebarTeach from "../../common/LilSidebar/LilSidebarTeach";
import BeginnerCourse from "../components/ProgressTrackerComponents/BeginnerCourse";
import DashboardNav from "../../common/DashboardNav/DashboardNav";
import SmallFooter from "../../common/SmallFooter/SmallFooter";
import { useState } from "react";

export default function ProgressTracker() {
  const [sideBar, setSideBar] = useState(true);

  function sideBarOpen() {
    setSideBar(true);
  }

  function sideBarClose() {
    setSideBar(false);
  }

  return (
    <div>
      <DashboardNav></DashboardNav>
      <div className={styles.background}>
        <div className={styles.layout}>
          <div className="sidebars">
            {/* ternary function used to conditionally render the big or small sidebar based on whether state variable is true or false*/}
            {sideBar ? (
              <BigSidebarTeach handleSidebar={sideBarClose}></BigSidebarTeach>
            ) : (
              <LilSidebarTeach handleSidebar={sideBarOpen}></LilSidebarTeach>
            )}
          </div>
          <div className={styles.mainBody}>
            <BeginnerCourse></BeginnerCourse>
          </div>
        </div>
      </div>
      <SmallFooter></SmallFooter>
    </div>
  );
}
