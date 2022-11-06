import React from 'react';
import styles from './SetLanguage.module.css';
// import Drop from './Drop';

function SetLanguage() {
  return (
    <div>
      <div className={styles.setLanguage}>
        <div className={styles.dropdown}>
          <button id="Brand" className={styles.dropbtn}>
            우리 브랜드
          </button>
          {/* <div id="LinkBox" className={styles.LinkBox}>
        <div className={styles.link} id="Link" href="#">
          Link 1
        </div>
        <div className={styles.link} id="Link" href="#">
          Link 2
        </div>
        <div className={styles.link} id="Link" href="#">
          Link 3
        </div>
        <div className={styles.link} id="Link" href="#">
          Link 4
        </div>
        <div className={styles.link} id="Link" href="#">
          Link 5
        </div>
        <div className={styles.link} id="Link" href="#">
          Link 6
        </div>
      </div> */}
        </div>
        {/* <Drop /> */}
        <div></div>
        <div className={styles.chLanguage}>KO</div>
      </div>
    </div>
  );
}

export default SetLanguage;
