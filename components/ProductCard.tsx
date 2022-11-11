import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from './ProductCard.module.css';

function ProductCard() {
  return (
    <Card className={styles.CardBody}>
      <Image src="/gallary-1.jpg" layout="responsive" width={350} height={350} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card content.</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
