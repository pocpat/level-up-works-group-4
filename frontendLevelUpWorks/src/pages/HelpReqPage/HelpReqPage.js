import HelpRequestMain from '../components/HelpRequestMain';
import DashboardNav from '../../common/DashboardNav/DashboardNav';
import SmallFooter from '../../common/SmallFooter/SmallFooter';
import BigSidebarHR from '../components/SidebarHR/BigSidebarHR/BigSidebarHR';
import LilSidebarHR from '../components/SidebarHR/LilSidebarHR/LilSidebarHR';
import { useState } from 'react';
import './HelpReqPage.css';

export default function HelpReqPage() {
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
      <div className='helpReqPageFlex'>
        <div className='sidebars'>
          {sideBar ? (
            <BigSidebarHR handleSidebar={sideBarClose}></BigSidebarHR>
          ) : (
            <LilSidebarHR handleSidebar={sideBarOpen}></LilSidebarHR>
          )}
        </div>
        <HelpRequestMain></HelpRequestMain>
      </div>
      <SmallFooter></SmallFooter>
    </div>
  );
}
