/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styles from './pagess.module.css';

function pagess() {
  return (
    <div>
      {/* <Accordion defaultActiveKey="0" className={`${styles.inputcolor} ${'p-5'}`}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>2</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div id="temp1"></div> */}
      <div className="m-[-2px]">
        <svg className="w-fit">
          <path
            d="m5,5 m50,0 a25,25 0 0 1 25,25
                    m0,25 a25,25 0 0 1 -25,25
                    m-50,-25 a25,25 0 0 0 25,25
                    m-25,-50 a25,25 0 0 1 25,-25"
            fill="none"
            stroke="white"
            strokeWidth="3"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default pagess;
