
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './HomeMain.css'

import laptop1 from '../../../src-assets/Home/laptop1.png'
import animation from '../../../src-assets/Home/animation.png'
import augreality from '../../../src-assets/Home/augreality.png'
import chatbots from '../../../src-assets/Home/chatbots.png'
import games from '../../../src-assets/Home/games.png'
import styles from './TestPage.module.css'


const TestPage2 = () => {
    return (
      <div className={styles.section2Wrap}>
      
    
          <div className={styles.textS2}>
           <h2>What we offer</h2>
           <br></br>
              <p>The Creative Problem Solving programme is series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand’s leading IT industry experts and schools. </p>
           <div className={styles.fourBtnS2}>
           </div>
           <br></br>
               {/* =================blue buttons =========================  */}
               <div className={styles.blueSquereS2Wrap}>
             <h3 style={{fontWeight:"600"}}>What will students create?</h3>
        
             <div >
         
            <img className={styles.blueSquereS2} src={animation} alt="" />
            <img className={styles.blueSquereS2} src={games} alt="" />
            <img className={styles.blueSquereS2} src={chatbots} alt="" />
            <img className={styles.blueSquereS2} src={augreality} alt="" />
            </div>
           </div>
           </div>
           {/*  ================= laptop + 4 buttons ================== */}
        
       <div className={styles.laptopS2Wrap}>  
      <img className={styles.laptopImgS2} src={laptop1} style={{width:"100%", height:"auto"}} alt="" />
      <section className={styles.laptop1BtnGroup}> 
    <button className={styles.round}></button>
    <button className={styles.round}></button>
    <button className={styles.round}></button>
    <button className={styles.round}></button>
    </section>
        </div>
 
    </div>
    )
  }
  
  export default TestPage2