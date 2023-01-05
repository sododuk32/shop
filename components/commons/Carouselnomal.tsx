/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import styles from './Carouselnomal.module.css';
import Image from 'next/image';
import { useState } from 'react';
function Carouselnomal() {
  const [slide, setslide] = useState(1);
  function prevbtn() {
    console.log(slide);
    if (slide === 1) {
      console.log('1일때 시행중' + slide);
      let nowSlide = document.getElementById('box' + (slide + 1).toString())!;
      nowSlide.style.zIndex = '1';
      nowSlide = document.getElementById('box' + slide.toString())!;
      nowSlide.style.zIndex = '2';

      return setslide(3);
    }
    if (slide > 1) {
      console.log('1보다클때 시행중');
      let nowSlide = document.getElementById('box' + slide.toString())!;
      if (slide === 3) {
        nowSlide = document.getElementById('box1')!;
        nowSlide.style.zIndex = '1';
        nowSlide = document.getElementById('box' + slide.toString())!;
        nowSlide.style.zIndex = '2';
        return setslide(slide - 1);
      }

      nowSlide = document.getElementById('box' + slide.toString())!;
      nowSlide.style.zIndex = '2';
      nowSlide = document.getElementById('box' + (slide + 1).toString())!;
      nowSlide.style.zIndex = '1';
      console.log('prev끝날때' + slide);
      return setslide(slide - 1);
    }
  }

  function nextbtn() {
    if (slide === 3) {
      let nowSlide = document.getElementById('box' + (slide - 1).toString())!;
      nowSlide.style.zIndex = '1';
      nowSlide = document.getElementById('box' + slide.toString())!;
      nowSlide.style.zIndex = '2';

      return setslide(1);
    }
    if (slide < 3) {
      let nowSlide = document.getElementById('box' + slide.toString())!;
      if (slide > 1) {
        nowSlide = document.getElementById('box' + (slide - 1).toString())!;
        nowSlide.style.zIndex = '1';
      }

      nowSlide = document.getElementById('box' + slide.toString())!;
      nowSlide.style.zIndex = '2';
      if (slide === 1) {
        nowSlide = document.getElementById('box3')!;
        nowSlide.style.zIndex = '1';
      }

      return setslide(slide + 1);
    }
  }

  return (
    <div>
      <div className={styles.carouselBox}>
        <div id="box1" className={styles.carouselContainer}>
          <Image alt="nothing" width={1100} height={450} quality={100} className={styles.carouselImg1} src={'/pcrplastic.jpg'} />
          <span className={styles.carouselSpan}>1</span>
        </div>
        <div id="box2" className={styles.carouselContainer}>
          <Image alt="nothing" width={1050} height={450} quality={100} className={styles.carouselImg2} src={'/sircuit.jpg'}></Image>
          <span className={styles.carouselSpan}>2</span>
        </div>
        <div id="box3" className={styles.carouselContainer}>
          <Image alt="nothing" width={1050} height={450} quality={100} className={styles.carouselImg3} src={'/logicares.jpg'} />
          <span className={styles.carouselSpan}>3</span>
        </div>
        <button className={styles.nextBtn} onClick={nextbtn}>
          NEXT
        </button>
        <button className={styles.prevBtn} onClick={prevbtn}>
          PREV
        </button>
      </div>
    </div>
  );
}

export default Carouselnomal;
