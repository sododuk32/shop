import React from 'react';
import styles from './CarouselGrid.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
function CarouselGrid() {
  //custom attirbute가 있는대 이걸 사용해서
  //css를 변경 가능해 보인다.

  const [slide, setslide] = useState('1');

  function prevClick() {
    let nowslide = parseInt(slide, 10);

    const ctns = document.getElementById('boxs');

    if (nowslide === 1) {
      ctns.style.transform = 'translate3d(-133.6rem, 0px, 0px)';
      console.log((document.getElementById('slide2').ariaHidden = 'false'));
      setslide('3');
    }

    if (nowslide === 2) {
      ctns.style.transform = 'translate3d(0, 0px, 0px)';

      setslide('1');
    }
    if (nowslide === 3) {
      ctns.style.transform = 'translate3d(-60.3rem, 0px, 0px)';

      setslide('2');
    }
  }
  function nextClick() {
    const ctns = document.getElementById('boxs');

    let nowslide = parseInt(slide, 10);

    if (nowslide === 1) {
      ctns.style.transform = 'translate3d(-60.3rem, 0px, 0px)';

      setslide('2');
    }
    if (nowslide === 2) {
      ctns.style.transform = 'translate3d(-133.6rem, 0px, 0px)';

      setslide('3');
    }
    if (nowslide === 3) {
      ctns.style.transform = 'translate3d(0, 0px, 0px)';
      setslide('1');
    }
  }
  console.log(slide);
  return (
    <div>
      <div className={styles.wholebox}>
        <section id="gridsContainer" className={styles.gridsContainer}>
          <div id="boxs" className={styles.boxs}>
            <div id="slide1" data-slide-index="1" aria-hidden="true" className={styles.gridbox1}>
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
            <div id="slide2" data-slide-index="2" aria-hidden="true" className={styles.gridbox2}>
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
            <div id="slide3" data-slide-index="3" aria-hidden="true" className={styles.gridbox3}>
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
        <div className={styles.btnBox}>
          <button id="prevbtn" className={styles.prevBtn} onClick={prevClick}>
            &#8592;
          </button>
          <button id="nextbtn" className={styles.nextBtn} onClick={nextClick}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarouselGrid;
