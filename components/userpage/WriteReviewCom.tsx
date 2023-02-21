/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import GiveStar from './GiveStar';
import { logined } from 'lib/redux/interface';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { Comments } from 'lib/redux/interface';
import { inputComment } from 'lib/fetches/ApiCall';
// import styled from 'styled-components';

function WriteReviewCom(takepid: string, islogined: logined) {
  const [rating, setstar] = useState<number>(0);
  const [select, setselect] = useState<string>('');
  const [comment, setcomment] = useState<string>('');
  const [newComment, setnewComment] = useState<boolean>(true);

  const nameInput = useRef<HTMLDivElement>(null);
  const commentObject: Comments = {
    userName: islogined.username,
    pid: takepid,
    uids: islogined.uid,
    rating: rating,
    comment: comment,
    line: select,
    togle: newComment,
  };
  console.log(commentObject);

  function sendComment(Comment: Comments) {
    if (Comment.rating === 0 || Comment.comment?.length === 0 || Comment.pid.length === 0) {
      return alert('댓글과 별을 잘 입력해주세요!');
    } else {
      inputComment(commentObject).then((res) => setnewComment(res.data.togle));
      return null;
    }
  }
  return (
    <div>
      <section id="headers">
        <span>{'상품명:' + takepid}</span>
      </section>
      <section id="productsInfo">
        <div ref={nameInput}>{islogined.username}</div>
      </section>
      <div id="stars">{GiveStar(setstar)}</div>
      <input type="text" onChange={(e) => setcomment(e.target.value)} name="" id="reviewText" />
      <div>
        <Form.Select size="sm" onChange={(e) => setselect(e.target.value)}>
          <option>디자인이 이뻐요 </option>
          <option value="그립이 좋아요">그립이 좋아요</option>
          <option value="상품이 맘에 안들어요">상품이 맘에 안들어요</option>
          <option value="기능이 다양해요">기능이 다양해요</option>
        </Form.Select>
      </div>
      {/*
      //오늘 여기 css 완성하면됨.  */}
      <Button onClick={() => sendComment(commentObject)}>등록</Button>
    </div>
  );
}

export default WriteReviewCom;
