// === To applied the style you have to import this === //
import styles from './SlideShowMain.module.css'
// === To applied the style you have to import this === //

// === Import Photos from the folder on the Left Side=== //
import slideleft1 from '../../../assets/slide/slideleft1.png'
import slideleft2 from '../../../assets/slide/slideleft2.png'
import slideleft3 from '../../../assets/slide/slideleft3.png'
import slideleft4 from '../../../assets/slide/slideleft4.png'

// === Import Photos from the folder Right Side=== //
import laptop1 from '../../../assets/slide/slide1.png'
import laptop2 from '../../../assets/hero/hero_8.png'
import laptop3 from '../../../assets/hero/hero_11.png'
import laptop4 from '../../../assets/hero/hero_9.png'
// import SlideShow from './SlideShow'

// ==== For SlideShow  on the right==== //
import { useState } from 'react'
import { useEffect } from 'react'

 // === need to install  npm install use-resize-observer --save-dev to use this === //
//  import useResizeObserver from 'use-resize-observer';

export default function Body1() {
 // need to install  npm install use-resize-observer --save-dev to use this //
//  const { ref, width, height } = useResizeObserver();

// =====  For Slide show on the right ===== //
const [img1, setImg1] = useState(true)   
const [img2, setImg2] = useState(false)   
const [img3, setImg3] = useState(false)   
const [img4, setImg4] = useState(false)   

// ===== Function for buttons on the slide ===== //
function handleClickImg1(){
  setImg1(true)
}

function handleClickImg2(){
  setImg2(true)
}

function handleClickImg3(){
  setImg3(true)
}

function handleClickImg4(){
  setImg4(true)
}

// ====== Image 1 on right side ====== //

useEffect(() => {
  console.log(img1);
  console.log(img2);
  console.log(img3);
  console.log(img4);

  if(img1 === true) {
    setImg1(true)
    setImg2(false)
    setImg3(false)
    setImg4(false)
   }  
}, [img1])

// ====== Image 2 on right side ===== //

useEffect(() => {
  console.log(img1);
  console.log(img2);
  console.log(img3);
  console.log(img4);

  if(img2 === true) {
    setImg1(false)
    setImg2(true)
    setImg3(false)
    setImg4(false)
   }  
}, [img2])

// ====== Image 3 on right side ===== //
useEffect(() => {
  console.log(img1);
  console.log(img2);
  console.log(img3);
  console.log(img4);

  if(img3 === true) {
    setImg1(false)
    setImg2(false)
    setImg3(true)
    setImg4(false)
   }  
}, [img3])

// ====== Image 4 on right side ===== //
useEffect(() => {
  console.log(img1);
  console.log(img2);
  console.log(img3);
  console.log(img4);

  if(img4 === true) {
    setImg1(false)
    setImg2(false)
    setImg3(false)
    setImg4(true)
   }  
}, [img4])


  return (

    <div>
       
<div className={styles.parentDivBody1MRA}>
{/* <div className={styles.childDivBody1MRA}> */}
<div className={styles.grandchildBody1LeftMRA}>
        <h1 className={styles.grandchilSlideH1}>The YouTube NZ Marketing Awards</h1>
        <br />
        <p className={styles.body1PMRA}>The YouTube NZ Marketing Awards is happening this September 4 at Spark Arena! Now in its 33rd year, the Awards celebrate the collective excellence in strategic and creative thinking that goes into award-winning marketing.</p>
        <br />
        <button className={styles.body1H1MRA}>Find Out More</button>
        <br />
        <div className={styles.imageStudentCreateBody1MRA}>
      <img className={styles.animation} src={slideleft4} alt="slideleft4" ></img> 
        <img className={styles.animation} src={slideleft3} alt="slideleft3" ></img>
        <img className={styles.animation}src={slideleft2} alt="slideleft2" ></img>
        <img className={styles.animation} src={slideleft1} alt="slideleft1" ></img>
        
        </div>
</div>
<div className={styles.grandchildBody1RightMRA}  >
{/* <SlideShow / > */}

{/* ===== SLIDE SHOW OF PHOTOS ON THE RIGHT SIDE ===== */}
{img1 && <img className={styles.laptop} src={laptop1} alt="animation" ></img> }
{img2 && <img className={styles.laptop} src={laptop2} alt="animation" ></img> }
{img3 && <img className={styles.laptop} src={laptop3} alt="animation" ></img> }
{img4 && <img className={styles.laptop} src={laptop4} alt="animation" ></img> }

{/* ===== BUTTON ON BELOW ON THE RIGHT SIDE ===== */}
<div className={styles.dotDivSlideMRA}>
<span className={styles.dot} onClick={handleClickImg1}></span> 
<span className={styles.dot} onClick={handleClickImg2} ></span> 
<span className={styles.dot} onClick={handleClickImg3} ></span> 
<span className={styles.dot} onClick={handleClickImg4} ></span> 
</div>

</div>

</div>

</div>

  )
}



