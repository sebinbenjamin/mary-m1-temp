import React from 'react';
import styles from './Footer.module.css';

// === To use this you have to install npm install react-icons --save  instruction in website https://react-icons.github.io/react-icons/search/#q=facebook === //
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquareTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.footerH3MRA}>Contact Us</h3>

          <ul>
          <li href ="mailto: info@marketingassociation.nz" className={styles.footerList} >info@marketingassociation.nz</li>
            <li className={styles.footerList}>+64 9 361 7760</li>
            <li className={styles.footerList}>69 St Georges Bay Road Parnell Auckland 1052</li>
          </ul>


         
         
        </div>

        <div>
          <h3 className={styles.footerH3MRA}>Our Website</h3>
          <ul>
            <li className={styles.footerList}>Legal information</li>
            <li className={styles.footerList}>Privacy information</li>
            <li className={styles.footerList}>Developed by Engaging Partners</li>
            <li className={styles.footerList}>©2024 Marketing Association | All right reserved</li>

          </ul>

        </div>

        <div>
          <h3 className={styles.footerH3MRA}>Connect With Us</h3>

          <ul>
           {/* <li className={styles.footerList}> <FaFacebookSquare /> Facebook</li> */}
           <li className={styles.footerListContact}> <FaFacebookSquare size="2rem"/></li>
           {/* <span style={{ marginLeft: '8px' }}>Facebook</span></li> */}
            <li className={styles.footerListContact}> <TiSocialInstagram  size="2rem"/></li>
            <li className={styles.footerListContact}> <FaYoutube  size="2rem"/></li>
            <li className={styles.footerListContact}> <HiOutlineMail  size="2rem"/></li>
            <li className={styles.footerListContact}> <FaSquareTwitter  size="2rem"/></li>
          </ul>
        </div>

       
        
      </div>
    </div>
  );
}
