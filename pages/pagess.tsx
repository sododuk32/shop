/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styles from './pagess.module.css';
import axios from 'axios';
import { getCookie } from 'cookies-next';

// export async function getStaticProps() {
//   let mycookie = getCookie('jwt');
//   console.log(mycookie);
//   mycookie = mycookie.json();
//   // const verifyedString = await axios.get('http://localhost:8080/verify', {
//   //   headers: {
//   //     'Content-Type': `application/json`,
//   //     withCredentials: true,
//   //     Authorization: mycookie,
//   //   },
//   // });
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       mycookie,
//     },
//   };
// }{ mycookie }
function pagess() {
  // const mycookie = getCookie('jwt');
  // console.log(mycookie);

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
    </div>
  );
}

export default pagess;

// pagess.getInitialProps = async (req) => {
//   req.cookies;
//   // const loginInfo = await axios
//   //   .post('http://localhost:8080/verify', {
//   //     headers: {
//   //       'Content-Type': `application/json`,
//   //       withCredentials: true,
//   //       Authorization: token,
//   //     },
//   //   })
//   //   .then((res) => {
//   //     return res.data;
//   //   });

//   return { matches: matches };
// };
