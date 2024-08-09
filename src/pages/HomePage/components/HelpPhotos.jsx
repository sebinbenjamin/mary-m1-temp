// === This is the Reusable component to use for the slide ===//

import React from 'react';

//=== Need to install react-slideshow-image -S before you can use styles.css from react === //
import 'react-slideshow-image/dist/styles.css';
// import { Slide } from 'react-slideshow-image';

// === Import photos from assets to hero folder === //
import help_1 from '../../../assets/help/help1.png'
import help_2 from '../../../assets/help/help2.png'
import help_3 from '../../../assets/help/help3.png'
import help_4 from '../../../assets/help/help4.png'

// to import video from youtube
import ReactPlayer from 'react-player';


// === Import Css Style used === //
import styles from '../components/Help.module.css'
// import styles from '../frontend/SlideShowMain.module.css'
// import { MdHeight } from 'react-icons/md';


 

// === Style when loading array picture === //
const divStyle = {
  
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '15rem',
  width: '20rem',
  resize: 'both',
  border: '1px,solid,var(--backColorWhite)',
  flexWrap: 'wrap',
  borderRadius: '15px',
  textAlign: 'center',
  opacity: '0.5',
  maxWidth:'100%',
  margin: '5px',
  float: 'left'
  
  

}
// === Photos that import from folder === //
const Images = [
  {
    url: help_1
    
  },
  {
    url: help_2
  },
  {
    url: help_3
  },
  {
    url: help_4
  },
//   {
//     url: help_5
//   },
//   {
//     url: help_6
//   },
//   {
//     url: help_7
//   },
//   {
//     url: help_8
//   }
//   {
//     url: hero_9
//   },
//   {
//     url: hero_10
//   },
//   {
//     url: hero_11
//   },
//   {
//     url: hero_12
//   },
//   {
//     url: hero_13
//   },
//   {
//     url: hero_14
//   },
//   {
//     url: hero_15
//   },
//   {
//     url: hero_16
//   },
//   {
//     url: hero_17
//   },
//   {
//     url: hero_18
//   },
//   {
//     url: hero_19
//   },
//   {
//     url: hero_20
//   },
];


 const textArray = ['Think Again Aukland', 'Digital Strategy'];

const HelpPhotos = ({Image}) => {

  // ==== to repeat images showing ==== 
  const repeatArray = Array.from({ length: 2 });
  return (
    <div>
{/* to import video from youtube */}
<div className="player-wrapper">
  <h1 className={styles.h1VideoTop}>Brand Summit 2024</h1>
  <p className={styles.pVideoTop} >Brand Summit is back for a second year and is happening this September at Grand Millennium! You will have the opportunity to gain valuable inspiration and practical insights and network with like-minded professionals</p>
  <button className={styles.ticketbtn}>Get Ticket Now</button>


    <ReactPlayer className="react-player" url="https://www.youtube.com/watch?v=6SSmO0lN5Hk" width="100%"
       height="500px" />
  </div>

    </div>
      
    // == function for images show == //
//     <div className={styles.gridcontainer} >
//       {repeatArray.map((_,repeatIndex) => (
// <div key={repeatIndex}>
// <div className={styles.gridcontainer} >
              
// {Images.map((Image, index)=> (
//             <div key={index}>
//              <div style={{ ...divStyle, 'backgroundImage': `url(${Image.url})` }}>
            
//              {textArray.map((text, index) => (
//         <p className={styles.imgText} key={index}>{text}</p>
//             ))}

//             </div>
//             </div> 
//           ))} 


// </div>
// </div>
//       ))}
       
//        </div>
    
    
  )
}


















export default HelpPhotos