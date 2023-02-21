/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { reviewJson } from 'lib/redux/interface';
function ReviewCom({ pid, uids, comment, line, rating, depth, place, userName, timeTowrite }: reviewJson) {
  const com = comment;
  return (
    <>
      <section id="headers">
        <span>상품정보:{pid}번상품</span>
      </section>
      <section id="productsInfo">
        <div>작성자:{userName}</div>
      </section>
      <div id="stars">평점:{rating}</div>
      <span>{comment}</span>
      <div>
        <span>한줄평:{line}</span>
      </div>
    </>
  );
}

export default ReviewCom;
