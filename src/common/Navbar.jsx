// === To applied the style you have to import this === //
import styles from "../common/Navbar.module.css";


// === to use link need to install npm install react-router-dom  === //
import { Link} from "react-router-dom";


// // === To Applied Photos should import this from your folder === //
import logo from "../assets/navbar/marketing-association.png";

// === To access this you have to install the 'npm install react-icons' for font awesome === //
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

// === variable use and function of button close and open === //
const [nav, setNav] = useState(false)
    
  return (
    <header className={styles.HeaderNavbar}>
      {/* === Left Part of the NavBar === */}
      <img  src={logo} alt="mcgilogo" style={{height:250, width:350}}></img>
  
    {/* === RightSide Part of NavBar === */}
    <nav>
    {/* ==== to hide nav when small screen ==== */}
    <ul className={nav ? [styles.headerUlRight, styles.active].join(' ') : [styles.headerUlRight]}>
      <br />
      <Link className={styles.linkstyle} to="/">HOME</Link>
      <Link className={styles.linkstyle} to="/">TRAINING</Link>
      <Link className={styles.linkstyle} to="/">EVENTS</Link>
      <Link className={styles.linkstyle} to="/">SERVICES</Link>
      <Link className={styles.linkstyle}  to="/">BECOME A MEMBER</Link>
      <Link className={styles.linkstyle} to="/">SEE DASHBOARD</Link>
    </ul>
    </nav>
{/* === Button Show When meet the maximum screen of 1024=== */}
    <button onClick={()=> setNav(!nav)} className={styles.OpenCloseButton}  >
      {nav ?  <FaTimes/>  :   <FaBars/> }     
   </button>  
{/* ^^^ Button Show When meet the maximum screen of 1024 ^^^ */} 
    </header>    
  
  )
}