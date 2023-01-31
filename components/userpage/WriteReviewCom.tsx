import React, { useState } from 'react';
import GiveStar from './GiveStar';
// import styled from 'styled-components';

function WriteReviewCom() {
  const [stars, setStars] = useState(0);

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
        {GiveStar(setStars)}
        {stars}
      </div>
      <input type="text" name="" id="reviewText" />
      <div>키워드 옵션</div>
    </div>
  );
}

export default WriteReviewCom;
