// === This is the Reusable component to use for the slide ===//

import React from 'react';

//=== Need to install react-slideshow-image -S before you can use styles.css from react === //
import 'react-slideshow-image/dist/styles.css';
// import { Slide } from 'react-slideshow-image';

// === Import photos from assets to hero folder === //
import hero_1 from '../../../assets/hero/hero_1.png'
import hero_2 from '../../../assets/hero/hero_2.png'
import hero_3 from '../../../assets/hero/hero_3.png'
import hero_4 from '../../../assets/hero/hero_4.png'
import hero_5 from '../../../assets/hero/hero_5.png'
import hero_6 from '../../../assets/hero/hero_6.png'
import hero_7 from '../../../assets/hero/hero_7.png'
import hero_8 from '../../../assets/hero/hero_8.png'
import hero_9 from '../../../assets/hero/hero_9.png'
import hero_10 from '../../../assets/hero/hero_10.png'
import hero_11 from '../../../assets/hero/hero_11.png'
import hero_12 from '../../../assets/hero/hero_12.png'
import hero_13 from '../../../assets/hero/hero_13.png'
import hero_14 from '../../../assets/hero/hero_14.png'
import hero_15 from '../../../assets/hero/hero_15.png'
import hero_16 from '../../../assets/hero/hero_16.png'
import hero_17 from '../../../assets/hero/hero_1.png'
import hero_18 from '../../../assets/hero/hero_18.png'
import hero_19 from '../../../assets/hero/hero_10.png'
import hero_20 from '../../../assets/hero/hero_20.png'



// === Import Css Style used === //
import styles from '../components/HeroBanner.module.css'
// import styles from '../frontend/SlideShowMain.module.css'
// import { MdHeight } from 'react-icons/md';


// import { useMediaQuery } from 'react-responsive';

 

// === Style when loading images to hero banner=== //
const divStyle = {
  
  display: 'flex',
  // flexDirection:'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '6rem',
  width: '8rem',
  resize: 'both',
  border: '1px,solid,var(--backColorWhite)',
  position: 'relative',
  flexWrap: 'wrap',
  borderRadius: '15px',
  textAlign: 'center',
  opacity: '0.5',
  maxWidth:'100%'
  

}
// === Photos that import from folder === //
const Images = [
  {
    url: hero_1
    
  },
  {
    url: hero_2
  },
  {
    url: hero_3
  },
  {
    url: hero_4
  },
  {
    url: hero_5
  },
  {
    url: hero_6
  },
  {
    url: hero_7
  },
  {
    url: hero_8
  },
  {
    url: hero_9
  },
  {
    url: hero_10
  },
  {
    url: hero_11
  },
  {
    url: hero_12
  },
  {
    url: hero_13
  },
  {
    url: hero_14
  },
  {
    url: hero_15
  },
  {
    url: hero_16
  },
  {
    url: hero_17
  },
  {
    url: hero_18
  },
  {
    url: hero_19
  },
  {
    url: hero_20
  },
];




const HeroBannerPhotos = ({Image}) => {

  // ==== to repeat images showing ==== 
  const repeatArray = Array.from({ length: 5 });
  return (
    
      
    // == function for images show == //
    <div className={styles.gridcontainer} >
      {repeatArray.map((_,repeatIndex) => (
<div key={repeatIndex}>
<div className={styles.gridcontainer} >
              
{Images.map((Image, index)=> (
            <div key={index}>
             <div className={styles.item}  style={{ ...divStyle, 'backgroundImage': `url(${Image.url})` }} >
              </div>
            </div> 
          ))} 


</div>
</div>
      ))}
       
       </div>
    
    
  )
}


















export default HeroBannerPhotos