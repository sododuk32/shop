/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next';
import styles from './index.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div id="bodyContainer" className={styles.bodyContainer}>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
