import React from 'react';
import { NavLink } from 'react-router-dom'

import styles from './NavBarHomePageMain.module.css'
import LogoImgWhite from '../../src-assets/NavBar/LevelUpWorks-white.png'
import AvatarW from '../../src-assets/NavBar/Avatar-white.png' 
import FlagNZ from '../../src-assets/NavBar/NZFlag.png' 
import FlagM from '../../src-assets/NavBar/MaoriFlag.png' 

//  1)  TO MAKE RESPONSIVE
function NavBarHomePageMain() {
  return (
    <nav className={styles.navbar}>
    <div className={styles.containerNB}>
    <div className={styles.logo}>
    <img src={LogoImgWhite} alt="" width="150px%"/>
   </div>
    {/* <div className={styles.navElements}> */}
      <ul className={styles.ulNB}>
        <li><NavLink to="/" 
         style={{ textDecoration: 'none', color:"#EFEFEF"}}>
        HOME</NavLink></li>
        <li>FEATURES</li>
        <li>TEACHERS</li>
       
      </ul>
    </div> 
     <div className={styles.rightSide}>
      
        <div className={styles.lang}>
      
          <h6 >LANG </h6>
           <h5 style={{color:"#43C0F6"}}>.</h5>
        <img  src={FlagNZ} alt="" width="20px" height="15px"/>
        <h5 style={{color:"#43C0F6"}}>.</h5>
        <img src={FlagM} alt="" width="20px" height="15px"/>
        </div>
         <NavLink to="/registerLogin" style={{ textDecoration: 'none', color:"#EFEFEF"}}> <img className={styles.avatarw} src={AvatarW} alt="" width="11%"/>REGISTER | LOGIN</NavLink>
    </div>

    
  </nav>
  )
}

export default NavBarHomePageMain