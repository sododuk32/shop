/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { ImStarFull } from 'react-icons/im';
import styled from 'styled-components';

function GiveStar() {
  const array = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState<string[]>(['false', 'false', 'false', 'false', 'false']);
  const [score, setScore] = useState(0);

  const handleStarClick = async (index: number) => {
    let clickStates: string[] = [...clicked];

    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? 'true' : 'false';
    }
    await setScore(clicked.filter((element) => element === 'true').length);
    await setClicked(clickStates);
  };

  const RatingBox = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    & svg {
      color: #c4c4c4;
      cursor: pointer;
    }
    :hover svg {
      color: yellow;
    }
    & svg:hover ~ svg {
      color: #c4c4c4;
    }
    .black {
      color: black;
    }
    .yellow {
      color: yellow;
    }
  `;
  console.log(score);

  return (
    <RatingBox className="starBody">
      {array.map((el) => (
        <ImStarFull key={el} onClick={() => handleStarClick(el)} className={clicked[el] === 'true' && 'black' ? 'yellow' : 'black'} size="25" />
      ))}
      {/* <div>{score > 0 ? score : null}</div> */}
    </RatingBox>
  );
}

export default GiveStar;
