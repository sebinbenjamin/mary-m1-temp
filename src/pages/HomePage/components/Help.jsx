import React from 'react'

// === To applied the style you have to import this === //
import styles from '../components/Help.module.css'
// === To applied the style you have to import this === //


// === Import Photos from the folder=== //
import Digital from '../../../assets/help/help1.png'
import Advance from '../../../assets/help/help2.png'
import Discruptive from '../../../assets/help/help3.png'
import StakeHolders from '../../../assets/help/help4.png'

import HelpPhotos from '../components/HelpPhotos.jsx';


export default function help() {
  return (
    <div>

<div className={styles.parentDivBody2MRA}>
       <h2 className={styles.childH2Body2MRA}>What can we help you find?</h2>
    <div className={styles.childDivImageBody2MRA}>
      <div className={styles.imgDiv}>
      <img className={styles.imgDigital}src={Digital} alt="digital" ></img>
      <div className={styles.textImg}>Digital Strategy</div>
      </div>

      <div className={styles.imgDiv}>
       <img className={styles.imgAdvance}src={Advance} alt="Advance" ></img>
       <div className={styles.textImg}>Advance Social Media Marketing</div>
      </div>

      <div className={styles.imgDiv}>
       <img className={styles.imgDiscruptive} src={Discruptive} alt="Discruptive" ></img>
       <div className={styles.textImg}>Discruptive B2B Marketing</div>
       </div>

       <div className={styles.imgDiv}>
       <img className={styles.imgStakeHolders}src={StakeHolders} alt="StakeHolders" ></img>
       <div className={styles.textImg}>Stakeholders Manangement</div>
       </div>

    </div>

 

</div>
{/* === FOR VIDEO PLAY IN FRONT PAGE ====*/}
<div className={styles.grandchildBody1RightMRA} ><HelpPhotos /></div>


    </div>
  )
}
