import React from 'react';
import styles from './CarouselGrid.module.css';
function CarouselGrid() {
  //custom attirbute가 있는대 이걸 사용해서
  //css를 변경 가능해 보인다.
  return (
    <div>
      <div className={styles.boxContainer}>
        <div className={styles.gridContainer} tabIndex={1} data-cmp-hook-carousel={'1'}>
          <div className={styles.griditem1}>1</div>
          <div className={styles.griditem1}>2</div>
          <div className={styles.griditem1}>3</div>
          <div className={styles.griditem1}>4</div>
        </div>
        <div className={styles.gridContainer}></div>
        <div className={styles.gridContainer}></div>
      </div>
    </div>
  );
}

export default CarouselGrid;
