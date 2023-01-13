import React from 'react';
import styles from './bags.module.css';
import Header from 'components/commons/Headers/Header';
function bags() {
  return (
    <div>
      <header className={styles.header}>
        <Header />
      </header>
      <section className={styles.bodyContainer}>
        <div className={styles.pannelContainer}>
          <div className={styles.productPannel}>1</div>

          <div className={styles.billPannel}>2</div>
        </div>
      </section>
    </div>
  );
}

export default bags;
