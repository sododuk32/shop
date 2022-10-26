import React from 'react';
import Image from 'next/image';
import styles from './Imgetext.module.css';
function Imagetext() {
  return (
    <div>
      <div className={styles.imgbox}>
        <Image className={styles.imgself} src={'/sircuit.jpg'} layout="fill" objectFit="fill" />
      </div>
      <div className={styles.imgbox}>
        <Image className={styles.imgself} src={'/sircuit.jpg'} layout="fill" objectFit="fill" />
      </div>
      <div className={styles.imgbox}>
        <Image className={styles.imgself} src={'/sircuit.jpg'} layout="fill" objectFit="fill" />
      </div>
      <div className={styles.imgbox}>
        <Image className={styles.imgself} src={'/sircuit.jpg'} layout="fill" objectFit="fill" />
        <h1 className={styles.imgspan}>안녕</h1>
      </div>
    </div>
  );
}
export default Imagetext;
