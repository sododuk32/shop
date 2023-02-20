/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import Link from 'next/link';
import styled from 'styled-components';

interface productInfo {
  productId: number;
  productTag: string;
  productRank: number;
  productCategory: string;
}
const Ima = styled.div`
  .hoverEnter {
    position: relative;
    width: 15vw;
    height: 15vw;
    transform: scale(1.3);
    transition: 0.2s;
  }
  .hoverLeave {
    position: relative;
    width: 15vw;
    height: 15vw;
    transform: scale(1);
    transition: 0.2s;
  }
`;
function ProductCard(info: productInfo) {
  console.log('productcard loded');

  return (
    <Card className={styles.pcard}>
      <Link href={'/product' + '/goods/' + info.productId}>
        <Ima>
          <div
            className={styles.img}
            onMouseEnter={(e) => (e.currentTarget.className = 'hoverEnter')}
            onMouseLeave={(e) => (e.currentTarget.className = 'hoverLeave')}
          >
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
        </Ima>
        <Card.Body>
          <Card.Title>{info.productId}</Card.Title>
          <Card.Text>{info.productCategory}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;
