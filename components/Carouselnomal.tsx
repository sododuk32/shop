import React from 'react';
import styles from './Carouselnomal.module.css';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

function Carouselnomal() {
  return (
    <div>
      <Carousel>
        <div className={styles.carouselContainer}>
          <Image layout="responsive" width={1200} height={450} quality={100} className={styles.carouselImg} src={'/pcrplastic.jpg'} />
          <span>1</span>
        </div>
        <div className={styles.carouselContainer}>
          <Image layout="responsive" width={1200} height={450} quality={100} className={styles.carouselImg} src={'/sircuit.jpg'} />
          <span>2</span>
        </div>
        <div className={styles.carouselContainer}>
          <Image layout="responsive" width={1200} height={450} quality={100} className={styles.carouselImg} src={'/logicares.jpg'} />
          <span>3</span>
        </div>
      </Carousel>
    </div>
  );
}

export default Carouselnomal;
