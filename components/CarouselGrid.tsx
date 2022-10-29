import React from 'react';
import styles from './CarouselGrid.module.css';
import Image from 'next/image';
function CarouselGrid() {
  //custom attirbute가 있는대 이걸 사용해서
  //css를 변경 가능해 보인다.
  // 이미지 쓸꺼면 image상위태그에 반드시 position relative
  return (
    <div>
      <section className={styles.gridsContainer}>
        <div className={styles.gridbox}>
          <div className={styles.keyboardwhite}>
            <Image src={'/keyboardwhite.jpg'} layout="fill" objectFit="scale-down" />
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
        <div className={styles.gridbox}>
          <div className={styles.keyboardwhite}>
            <Image src={'/keyboardwhite.jpg'} layout="fill" objectFit="scale-down" />
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
        <div className={styles.gridbox}>
          <div className={styles.keyboardwhite}>
            <Image src={'/keyboardwhite.jpg'} layout="fill" objectFit="scale-down" />
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
      </section>
    </div>
  );
}

export default CarouselGrid;
