/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next';
import styles from './index.module.css';
import Header from '../components/Header';
import Image from 'next/image';
import Drop from '../components/Drop';
import GridPhoto from 'components/GridPhoto';
import Carouselnomal from 'components/Carouselnomal';
import CarouselGrid from 'components/CarouselGrid';

const Home: NextPage = () => {
  const dataArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (
    <div>
      <div className={styles.setLanguage}>
        {/* <div className={styles.dropdown}>
          <button id="Brand" onClick={Brandcliked} className={styles.dropbtn}>
            우리 브랜드
          </button>
          <div id="LinkBox" className={styles.LinkBox}>
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
          </div>
        </div> */}
        <Drop />
        <div></div>
        <div className={styles.chLanguage}>KO</div>
      </div>
      <Header />
      <div id="banners">
        <div id="bannerImgs" className={styles.bannerImgs}>
          <div className={styles.colorPannel}>
            <div className={styles.spanContainer}>
              <div className={styles.panneldiv1}>나만의</div>
              <div className={styles.panneldiv2}>컬러 찾기</div>
              <div className={styles.panneldivsmall}>K380 키보드 및 Pebble 마우스</div>
              <div className={styles.btnBox}>
                <button className={styles.overBtn}>K380 키보드</button>
                <button className={styles.underBtn}>PEBBLE 알아보기</button>
              </div>
            </div>
          </div>
          <Image className={styles.keybored} src="/keybored.jpg" alt="asdf" width={500} height={270} />
        </div>
      </div>
      <GridPhoto />
      <CarouselGrid />
      <Carouselnomal />
    </div>
  );
};

export default Home;
