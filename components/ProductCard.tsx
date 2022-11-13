/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import Link from 'next/link';
interface productInfo {
  productId: number;
  productTag: string;
  productRank: number;
  productCategory: string;
}
function ProductCard(info: productInfo) {
  if (info.productId === null) {
    console.log('not loaded');
  }
  <Link href="/goods/0101864"></Link>;
  return (
    <li key={info.productId} className={styles.pcard}>
      <Link className={styles.CardBody} href={`${/goods/}+${info.productId}`}>
        <Card>
          <Image src="/gallary-1.jpg" layout="responsive" width={350} height={350} />
          <Card.Body>
            <Card.Title>{info.productId}</Card.Title>
            <Card.Text>{info.productCategory}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </li>
  );
}

export default ProductCard;
