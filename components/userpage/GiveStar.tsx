/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { ImStarFull } from 'react-icons/im';
import styled from 'styled-components';
/**
 * @props: setState
 *
 * this is for give  number of star to upper Components
 */
function GiveStar(props: React.Dispatch<React.SetStateAction<number>>) {
  const array = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState<string[]>(['false', 'false', 'false', 'false', 'false']);
  let score: number;

  const handleStarClick = (index: number) => {
    console.log(clicked[0] + '+' + clicked[1]);
    let clickStates: string[] = [...clicked];

    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? 'true' : 'false';
    }
    score = clicked.filter((element) => element === 'true').length;
    props(score);
    setClicked(clickStates);
  };
  const RatingBox = styled.div`
    margin: 0 auto;

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
  `;
  return (
    <RatingBox>
      {array.map((el) => (
        <ImStarFull key={el} onClick={() => handleStarClick(el)} className={clicked[el] && 'white'} size="25" />
      ))}
    </RatingBox>
  );
}

export default GiveStar;
