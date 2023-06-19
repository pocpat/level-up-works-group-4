import React from 'react'

import styles from "./HomeSection3.module.css";
import './HomeMain.css'
import Group1 from '../../../src-assets/Home/Group 1.png'
import Group2 from '../../../src-assets/Home/Group 2.png'
import Group3 from '../../../src-assets/Home/Group 3.png'
import Group4 from '../../../src-assets/Home/Group 4.png'

const HomeSection3 = () => {
  return (
    
        <div className={styles.containerS3}> 
<h3>Teaching kids programming and digital skills is MORE than just writing code.</h3>
<section className={styles.imgGroupS3}>

<img src={Group1} alt="" className={styles.sectionImgS3}/>
<img src={Group3} alt="" className={styles.sectionImgS3}/>
<img src={Group4} alt="" className={styles.sectionImgS3}/>
<img src={Group2} alt="" className={styles.sectionImgS3}/>
    </section>

    </div>
  )
}

export default HomeSection3