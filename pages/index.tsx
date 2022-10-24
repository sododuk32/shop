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

const Home: NextPage = () => {
  const dataArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return (
    <div>
      <Header />
      <Box sx={{ margin: 5, display: 'flex', justifyContent: 'center' }}>
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
