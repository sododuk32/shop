import React from 'react';
import styles from './CarouselGrid.module.css';
import Image from 'next/image';
import { useState } from 'react';
function CarouselGrid() {
  //custom attirbute가 있는대 이걸 사용해서
  //css를 변경 가능해 보인다.

  const [slide, setslide] = useState('1');

  function prevClick() {
    let nowslide = parseInt(slide, 10);
    const pbtn = document.getElementById('prevbtn');
    const nbtn = document.getElementById('nextbtn');
    const ctns = document.getElementById('gridsContainer');

    if (nowslide === 2) {
      ctns.style.transform = 'translate3d(0, 0px, 0px)';
      pbtn.style.transform = 'translate3d(0rem, 0px, 0px)';
      nbtn.style.transform = 'translate3d(0rem, 0px, 0px)';
      setslide('1');
    }
    if (nowslide === 3) {
      ctns.style.transform = 'translate3d(80.6rem, 0px, 0px)';
      pbtn.style.transform = 'translate3d(80.3rem, 0px, 0px)';
      nbtn.style.transform = 'translate3d(80.3rem, 0px, 0px)';
      setslide('2');
    }
  }
  function nextClick() {
    const ctns = document.getElementById('gridsContainer');
    const pbtn = document.getElementById('prevbtn');
    const nbtn = document.getElementById('nextbtn');

    let nowslide = parseInt(slide, 10);

    if (nowslide === 1) {
      ctns.style.transform = 'translate3d(-80.3rem, 0px, 0px)';
      pbtn.style.transform = 'translate3d(-80.3rem, 0px, 0px)';
      nbtn.style.transform = 'translate3d(-80.3rem, 0px, 0px)';
      setslide('2');
    }
    if (nowslide === 2) {
      ctns.style.transform = 'translate3d(-160.6rem, 0px, 0px)';
      pbtn.style.transform = 'translate3d(-160.3rem, 0px, 0px)';
      nbtn.style.transform = 'translate3d(-160.3rem, 0px, 0px)';

      setslide('3');
    }
  }
  console.log(slide);
  return (
    <div>
      <section id="gridsContainer" className={styles.gridsContainer}>
        <div className={styles.boxs}>
          <button id="prevbtn" className={styles.prevBtn} onClick={prevClick}>
            &#8592;
          </button>
          <button id="nextbtn" className={styles.nextBtn} onClick={nextClick}>
            &#8594;
          </button>
          <div data-slide-index="1" className={styles.gridbox1}>
            <div className={styles.keyboardwhite}>
              <Image src={'/keyboardwhite.jpg'} layout="fill" objectFit="scale-down" />
              <span>1</span>
            </div>
            <div className={styles.headset}>
              <Image src={'/headset.jpg'} layout="fill" objectFit="scale-down" />
            </div>
            <div className={styles.laptop}>
              <Image src={'/laptop.jpg'} layout="fill" objectFit="scale-down" />
            </div>
            <div className={styles.webcam}>
              <Image src={'/webcam.jpg'} layout="fill" objectFit="scale-down" />
            </div>
          </div>
          <div data-slide-index="2" aria-hidden="true" className={styles.gridbox2}>
            <div className={styles.keyboardwhite}>
              <Image src={'/keyboardwhite.jpg'} layout="fill" objectFit="scale-down" />
              <span>2</span>
            </div>
            <div className={styles.headset}>
              <Image src={'/headset.jpg'} layout="fill" objectFit="scale-down" />
            </div>
            <div className={styles.laptop}>
              <Image src={'/laptop.jpg'} layout="fill" objectFit="scale-down" />
            </div>
            <div className={styles.webcam}>
              <Image src={'/webcam.jpg'} layout="fill" objectFit="scale-down" />
            </div>
          </div>
          <div data-slide-index="3" aria-hidden="true" className={styles.gridbox3}>
            <div className={styles.keyboardwhite}>
              <Image src={'/keyboardwhite.jpg'} layout="fill" objectFit="scale-down" />
              <span>3</span>
            </div>
            <div className={styles.headset}>
              <Image src={'/headset.jpg'} layout="fill" objectFit="scale-down" />
            </div>
            <div className={styles.laptop}>
              <Image src={'/laptop.jpg'} layout="fill" objectFit="scale-down" />
            </div>
            <div className={styles.webcam}>
              <Image src={'/webcam.jpg'} layout="fill" objectFit="scale-down" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarouselGrid;
