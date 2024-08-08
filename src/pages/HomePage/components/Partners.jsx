import React from 'react'

// === To applied the style you have to import this === //
import styles from '../components/Partners.module.css'
// === To applied the style you have to import this === //


// === Import Photos from the folder=== //
import partnerwest from '../../../assets/partner/partnerwestpac.png'
import google from '../../../assets/partner/partnergoogle.png'
import media from '../../../assets/partner/partnermedia.png'
import spark from '../../../assets/partner/partnerspark.png'



export default function Partners() {
  
  return (
    // <div>

<div className={styles.parentDivBody2MRA}>
       <h2 className={styles.childH2Body2MRA}>Our Principal Partners</h2>
    <div className={styles.childDivImageBody2MRA}>
      <div className={styles.imgDiv}>
      <img className={styles.imgDigital}src={partnerwest} alt="digital" ></img>
      </div>

      <div className={styles.imgDiv}>
       <img className={styles.imgAdvance}src={google} alt="Advance" ></img>
      
      </div>

      <div className={styles.imgDiv}>
       <img className={styles.imgDiscruptive} src={media} alt="Discruptive" ></img>
     
       </div>

       <div className={styles.imgDiv}>
       <img className={styles.imgStakeHolders}src={spark} alt="StakeHolders" ></img>
     
       </div>

    </div>

 

</div>

  )
}
