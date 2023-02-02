import React from 'react';
import GiveStar from './GiveStar';
// import styled from 'styled-components';

function WriteReviewCom() {
  return (
    <div>
      <section id="headers">
        <span>id</span>
        <span>days</span>
      </section>
      <section id="productsInfo">
        <span>image</span>
        <span>
          name
          <button>구매</button>
        </span>
      </section>
      <div id="stars">
        <GiveStar />
      </div>
      <input type="text" name="" id="reviewText" />
      <div>키워드 옵션 선택 창 </div>
      {/*
      //오늘 여기 css 완성하면됨.  */}
      <div>등록</div>
    </div>
  );
}

export default WriteReviewCom;
