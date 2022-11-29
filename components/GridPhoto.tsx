import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './GridPhoto.module.css';
function GridPhoto() {
  return (
    <div>
      <div className={styles.imgsectionBox}>
        <div className={styles.imgsection}>
          <section className={styles.card}>
            <div className={styles.nextimg}>
              <Image layout="fixed" src={'/gridp1.jpg'} width={386} height={386} />
            </div>
            <Link className={styles.h22} href="/1">
              <div>
                <h3>MAC에 딱.</h3>
                <h4>나에게 딱</h4>
              </div>
            </Link>
            <p className={styles.ptas}>Mac에 딱 맞는 컬러, 디자인, 레이아웃. Logi for Mac을 만나보세요.</p>
            <Link className={styles.h22} href="/2">
              <span>MAC 솔루션 알아보기 &gt;</span>
            </Link>
          </section>
          <section className={styles.card}>
            <div className={styles.nextimg}>
              <Image layout="fixed" src={'/gridp2.jpg'} width={386} height={386} />
            </div>
            <Link className={styles.h22} href="/1">
              <div>
                <h2>MAC을 마스터하다.</h2>
              </div>
            </Link>
            <p className={styles.ptas}>Mac용 기계식 키보드와 최고급 마우스로 Mac을 마스터 하세요.</p>
            <Link className={styles.h22} href="/2">
              <div>
                <span>MX MECHANICAL MINI FOR MAC &gt;</span>
                <span>MX MASTER 3S FOR MAC &gt;</span>
              </div>
            </Link>
          </section>
          <section className={styles.card}>
            <div className={styles.nextimg}>
              <Image layout="fixed" src={'/gridp3.jpg'} width={386} height={386} />
            </div>
            <Link className={styles.h22} href="/1">
              <div>
                <h2>새로운 OPTIONS+ 기능</h2>
              </div>
            </Link>
            <p className={styles.ptas}>Logi Options+로 로지텍 마우스와 키보드를 원하는대로 커스터마이징해보세요.</p>
            <Link className={styles.h22} href="/2">
              <span>LOGI OPTIONS+ &gt;</span>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GridPhoto;
