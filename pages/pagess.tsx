/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styles from './pagess.module.css';
import axios from 'axios';
import { getCookie } from 'cookies-next';

function pagess() {
  return (
    <div>
      <Accordion defaultActiveKey="0" className={`${styles.inputcolor} ${'p-5'}`}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>2</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div id="temp1"></div>
    </div>
  );
}

export default pagess;
