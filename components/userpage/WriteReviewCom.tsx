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
  const [stars, setstar] = useState<number>(0);
  const [select, setselect] = useState<string>('');
  const [comment, setcomment] = useState<string>('');
  const nameInput = useRef<HTMLDivElement>(null);
  let commentObject: Comments = {
    nameInput: nameInput.current?.innerHTML,
    pids: takepid,
    uids: islogined.uid,
    star: stars,
    comment: comment,
    line: select,
  };

  function takeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setselect(e.target.value);
  }
  const onChangeCom = (e: any) => {
    setcomment(e.target.value);
  };
  function sendComment(Comment: Comments) {
    if (commentObject.nameInput === undefined || commentObject.comment === undefined) {
      alert('댓글을 잘 입력해주세요!');
      return console.log(commentObject);
    } else {
      inputComment(commentObject);
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
      <input type="text" onChange={onChangeCom} name="" id="reviewText" />
      <div>
        <Form.Select size="sm" onChange={(e) => takeSelect(e)}>
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
