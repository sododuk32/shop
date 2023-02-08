/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import Link from 'next/link';
import ReactLoading from 'react-loading';

interface productInfo {
  productId: number;
  productTag: string;
  productRank: number;
  productCategory: string;
}
function ProductCard(info: productInfo) {
  console.log('productcard loded');

  return (
    <Card className={styles.pcard}>
      <Link href={'/product' + '/goods/' + info.productId}>
        <div className={styles.img}>
          <Image
            src="/gallary-1.jpg"
            fill
            sizes="(max-width: 768px) 10vw,
              (min-width: 1200px) 30vw,
              30vw,(max-height: 768px) 20vw,
              (min-height: 1200px) 30vw,
              30vw"
            alt="a"
          />
        </div>
        <Card.Body>
          <Card.Title>{info.productId}</Card.Title>
          <Card.Text>{info.productCategory}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;
