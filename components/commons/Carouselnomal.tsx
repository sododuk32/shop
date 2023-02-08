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
          <Image
            alt="nothing"
            fill
            sizes="(max-width: 768px) 0.3vw,
              (max-width: 1200px) 0.2vw,
              0.1vw,(max-height: 768px) 0.3vw,
              (max-height: 1200px) 0.2vw,
              0.1vw"
            quality={100}
            className={styles.carouselImg1}
            src={'/pcrplastic.jpg'}
          />
          <span className={styles.carouselSpan}>친환경 소재</span>
        </div>
        <div id="box2" className={styles.carouselContainer}>
          <Image
            alt="nothing"
            fill
            sizes="(max-width: 768px) 0.3vw,
              (max-width: 1200px) 0.2vw,
              0.1vw,(max-height: 768px) 0.3vw,
              (max-height: 1200px) 0.2vw,
              0.1vw"
            quality={100}
            className={styles.carouselImg2}
            src={'/sircuit.jpg'}
          ></Image>
          <span className={styles.carouselSpan}>첨단 기술</span>
        </div>
        <div id="box3" className={styles.carouselContainer}>
          <Image
            alt="nothing"
            fill
            sizes="(max-width: 768px) 0.3vw,
              (max-width: 1200px) 0.2vw,
              0.1vw,(max-height: 768px) 0.3vw,
              (max-height: 1200px) 0.2vw,
              0.1vw"
            quality={100}
            className={styles.carouselImg3}
            src={'/logicares.jpg'}
          />
          <span className={styles.carouselSpan}>타인을 돕는 의료 사업</span>
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
