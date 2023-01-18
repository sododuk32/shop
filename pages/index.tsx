/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next';
import styles from './index.module.css';
import Header from '../components/commons/Headers/Header';
import Image from 'next/image';
import GridPhoto from '../components/commons/GridPhoto';
import Carouselnomal from '../components/commons/Carouselnomal';
import CarouselGrid from '../components/commons/CarouselGrid';
import SetLanguage from '../components/commons/Headers/SetLanguage';
import { QueryClient, useQuery } from 'react-query';

const Home: NextPage = () => {
  const queryClient = new QueryClient();
  const data = queryClient.getQueryData('userInfo');

  return (
    <div>
      <header>
        <SetLanguage />
        <Header />
      </header>
      <section>
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
            <Image className={styles.bannerKeyboard} alt="indexKeybored" src="/keybored.jpg" width={1000} height={800} />
          </div>
        </div>
        <GridPhoto />
        <CarouselGrid />
        {/* <Carouselnomal /> */}
      </section>
    </div>
  );
};

export default Home;
