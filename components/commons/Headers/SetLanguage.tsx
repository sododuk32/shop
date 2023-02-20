import React from 'react';
import Drop from './Drop';
import styled from 'styled-components';
const SetBox = styled.section`
  @media only screen and (max-width: 800px) {
    .setLanguage {
      height: 4vw;
      width: 100%;
      background-color: white;
      display: flex;
      justify-content: space-around;
      z-index: 3;
      position: sticky;
      margin-bottom: 2vw;
    }

    .chLanguage {
      font-weight: bold;
      font-size: xx-small;
      margin-top: 3vw;
      z-index: 3;
    }
  }
  @media only screen and (min-width: 801px) {
    .setLanguage {
      height: 48px;
      width: 100%;
      background-color: white;
      display: grid;
      grid-template-columns: auto 355px auto;
      margin-left: 20rem;
      z-index: 5;
      position: sticky;
    }

    .chLanguage {
      font-weight: bold;
      font-size: small;
      padding-top: 15px;
    }
  }
`;
function SetLanguage() {
  return (
    <SetBox>
      <div className="setLanguage">
        <Drop />
        <div></div>
        <div className="chLanguage">대한민국</div>
      </div>
    </SetBox>
  );
}

export default SetLanguage;
