import React from 'react';
import styles from './Carouselnomal.module.css';
import Image from 'next/image';
import { useState } from 'react';
function Carouselnomal() {
  const [slide, setslide] = useState(1);
  function prevbtn() {
    if (slide === 0) {
      console.log('0일때 시행중');
      setslide(3);
      const nowSlide = document.getElementById('box' + slide)!;
      nowSlide.style.zIndex = '2';
      console.log('prev끝날때' + slide);
      return setslide(slide - 1);
    }
    if (slide > 1) {
      console.log('1보다클때 시행중');

      const nowSlide = document.getElementById('box' + slide)!;
      nowSlide.style.zIndex = '2';
      console.log('prev끝날때' + slide);
      return setslide(slide - 1);
    }
    console.log('prev끝날때' + slide);
  }

  function nextbtn() {
    if (slide === 3) {
      console.log('4일때 시행중');
      setslide(1);
      let nowSlide = document.getElementById('box' + slide)!;
      nowSlide.style.zIndex = '2';
      nowSlide = document.getElementById('box' + 3)!;
      nowSlide.style.zIndex = '1';
      console.log('prev끝날때' + slide);
      return setslide(slide + 1);
    }
    if (slide < 3) {
      console.log('3보다작을때 시행중');
      let nowSlide = document.getElementById('box' + slide)!;
      nowSlide.style.zIndex = '2';
      nowSlide = document.getElementById('box' + slide - 1)!;
      nowSlide.style.zIndex = '1';
      console.log('prev끝날때' + slide);
      return setslide(slide + 1);
    }
    console.log('next끝날때' + slide);
  }

  return (
    <div>
      <div className={styles.carouselBox}>
        <button className={styles.prevBtn} onClick={prevbtn}>
          PREV
        </button>
        <div id="box1" className={styles.carouselContainer}>
          <Image layout="responsive" width={1200} height={450} quality={100} className={styles.carouselImg1} src={'/pcrplastic.jpg'} />
          <span>1</span>
        </div>
        <div id="box2" className={styles.carouselContainer}>
          <Image layout="responsive" width={1200} height={450} quality={100} className={styles.carouselImg2} src={'/sircuit.jpg'} />
          <span>2</span>
        </div>
        <div id="box3" className={styles.carouselContainer}>
          <Image layout="responsive" width={1200} height={450} quality={100} className={styles.carouselImg3} src={'/logicares.jpg'} />
          <span>3</span>
        </div>
        <button className={styles.nextBtn} onClick={nextbtn}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Carouselnomal;
