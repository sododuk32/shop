import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styles from './pagess.module.css';
function pagess() {
  return (
    <div>
      <Accordion defaultActiveKey="0" className={`${styles.inputcolor} ${'p-5'}`}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            {' '}
            <div>asdf</div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>2</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default pagess;