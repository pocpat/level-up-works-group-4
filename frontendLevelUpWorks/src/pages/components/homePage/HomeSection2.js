import  {React, useState} from 'react'
import './HomeMain.css'

import laptop1 from '../../../src-assets/Home/laptop1.png'
import laptop2 from '../../../src-assets/Home/laptop2.png'
import laptop3 from '../../../src-assets/Home/laptop3.png'
import laptop4 from '../../../src-assets/Home/laptop4.png'
import animation from '../../../src-assets/Home/animation.png'
import augreality from '../../../src-assets/Home/augreality.png'
import chatbots from '../../../src-assets/Home/chatbots.png'
import games from '../../../src-assets/Home/games.png'
import styles from './HomeSection2.module.css'



const HomeSection2 = () => {

  const[laptopImg, setLaptopImg] = useState(laptop1);

  const handleLaptop1 = () => {
    setLaptopImg(laptop1);
  };
  const handleLaptop2 = () => {
    setLaptopImg(laptop2);
  };
  const handleLaptop3 = () => {
    setLaptopImg(laptop3);
  };
  const handleLaptop4 = () => {
    setLaptopImg(laptop4);
  };

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
       <h3 style={{fontWeight:"800"}}>What will students create?</h3>
  
       <div >
   
      <img className={styles.blueSquereS2} src={animation} alt="" onClick={handleLaptop1}/>
      <img className={styles.blueSquereS2} src={games} alt=""  onClick={handleLaptop2}/>
      <img className={styles.blueSquereS2} src={chatbots} alt="" onClick={handleLaptop3}/>
      <img className={styles.blueSquereS2} src={augreality} alt="" onClick={handleLaptop4}/>
      </div>
     </div>
     </div>
     {/*  ================= laptop + 4 buttons ================== */}
  
 <div className={styles.laptopS2Wrap}>  
<img className={styles.laptopImgS2} src={laptopImg} style={{width:"100%", height:"auto"}} alt="Laptop" />
<section className={styles.laptop1BtnGroup}> 
<button className={styles.round} onClick={handleLaptop1}></button>
<button className={styles.round} onClick={handleLaptop2}></button>
<button className={styles.round} onClick={handleLaptop3}></button>
<button className={styles.round} onClick={handleLaptop4}></button>
</section>
  </div>

</div>
)
}
export default HomeSection2