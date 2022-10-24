/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next';
import styles from './index.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRows from 'components/CardRows';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { relative } from 'path';
import { Button } from '@mui/material';
const Home: NextPage = () => {
  const dataArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return (
    <div>
      <div className={styles.setLanguage}>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>우리 브랜드</button>
          <div className={styles.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div></div>
        <div className={styles.chLanguage}>KO</div>
      </div>
      <Header />
      <div id="banners">
        <div id="bannerImgs" className={styles.bannerImgs}>
          <div className={styles.colorPannel}>
            <div id={styles.spanContainer}>
              <span>나만의</span>
              <span>컬러 찾기</span>
              <span>K380 키보드 및 Pebble 마우스</span>
              <button className={styles.pannelBtn}>K380 키보드</button>
              <button className={styles.pannelBtn}>PEBBLE 알아보기</button>
            </div>
          </div>
          <Image className={styles.keybored} src="/keybored.jpg" layout="responsive" width={500} height={270} />
        </div>
      </div>

      <Box sx={{ position: 'relative', margin: 5, display: 'flex', justifyContent: 'center' }}>
        <Grid container sm={'auto'} md={10} spacing={{ md: 3 }} direction="row" justifyContent="center" alignItems="center">
          {dataArray.map((e) => {
            return CardRows(e);
          })}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
