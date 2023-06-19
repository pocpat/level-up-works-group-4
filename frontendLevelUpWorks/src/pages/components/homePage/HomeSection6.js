import React from 'react'
import styles from './HomeSection6.module.css'
import './HomeMain.css'
import classroom from '../../../src-assets/Home/classroom.png'
import ButtonHero from '../../../common/ButtonHero'

const HomeSection6 = ({handleShow}) => {
  return (
    
    <div className={styles.section6}>
        <section 
        // className={styles.section6Img}
        >
            <img src={classroom} alt="" />
            </section>
            <div className={styles.textBtnS6}>
            <section className={styles.textS6}>
                <h1>What are you waiting for?</h1>
                <br></br>
                <h3 style={{fontFamily:"Open Sans, sans-serif", fontWeight:"600"}}>Start teaching Digital Technologies today.</h3> <br></br>
           <p>If you need more information, we are happy to answer any questions you may have. </p>
<div className={styles.btnGroupS6}>
 <ButtonHero  
        backgroundColor="white"
        border="#43c0f6"
        color="#606060"
        text="ENQUIRE NOW"
/>
<ButtonHero  
        backgroundColor="#F91C85"
        border="#F91C85"
        color= "white"
        text="SIGN UP"
        onClick={handleShow}
/>
</div>
            </section>
            </div>
           
    </div>
  )
}

export default HomeSection6