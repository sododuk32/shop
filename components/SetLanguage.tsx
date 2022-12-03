import React from 'react';
import styles from './SetLanguage.module.css';
import Drop from './Drop';

function SetLanguage() {
  return (
    <div>
      <div className={styles.setLanguage}>
        <Drop />
        <div></div>
        <div className={styles.chLanguage}>대한민국</div>
      </div>
    </div>
  );
}

export default SetLanguage;
