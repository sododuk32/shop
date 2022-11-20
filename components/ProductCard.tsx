/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import Link from 'next/link';
import { positions } from '@mui/system';
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
      <Link href={`${/goods/}${info.productId}`}>
        <Image src="/gallary-1.jpg" width={250} height={250} alt="a" />
        <Card.Body>
          <Card.Title>{info.productId}</Card.Title>
          <Card.Text>{info.productCategory}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;
