import Header from 'components/commons/Headers/Header';
import SetLanguage from 'components/commons/Headers/SetLanguage';
import React from 'react';
import styled from 'styled-components';

function orders() {
  const Orderbody = styled.body`
    .bodyContainer {
      margin-top: 5.8vw;
    }
    .header {
      position: relative;
    }

    .bodyContainer {
      margin-top: 5.8vw;
    }
    .pannelContainer {
      width: 60%;
      height: 10vw;
      display: flex;
      flex-direction: row;
      margin: 0% auto;
    }
    .orderPannel {
      list-style: none;
      width: 95%;
      height: fit-content;
      border: solid 0.1vw gray;
      padding-left: 0.1;
      padding-top: 0.5vw;
    }
    .infoPannel {
      width: 95%;
      border: solid 0.1vw red;
      padding-left: 0.1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      hight: fit-content;
    }
    .productPannel {
      list-style: none;
      width: 70%;
      border: solid 0.1vw gray;
      padding-left: 0.1;
      font-size: 1vw;
    }
    .pricePannel {
      list-style: none;
      width: 25%;
      border: solid 0.1vw gray;
      padding-left: 0.5vw;
      font-size: 0.9vw;
    }
    .totalPannel {
      margin: 0% auto;
      border: solid 0.1vw blue;
      margin-top: 3vw;
      width: 80%;
      display: flex;
      justify-content: space-between;
    }
    .listPannel {
      display: flex;
      flex-direction: column;
      margin-top: 0% auto;
      margin-left: 0% auto;
      margin-right: 0% auto;
      margin-bottom: 1vw;
    }
    .totalspan {
      margin-left: 2vw;
      margin-right: 2vw;
    }
  `;
  return (
    <div>
      <header id="pageHeader">
        <SetLanguage />
        <Header />
      </header>
      <Orderbody>
        <section className="bodyContainer">
          <div className="pannelContainer">
            <ul className="orderPannel">
              <li className="listPannel">
                <div className="infoPannel">
                  <div className="productPannel">제품정보</div>
                  <div className="pricePannel">pricePannel</div>
                </div>
                <div className="totalPannel">
                  <span className="totalspan">1</span>
                  <span className="totalspan">2</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </Orderbody>
    </div>
  );
}

export default orders;
// 사용자 id , && 상태가 ready or shipping 인것들만 찾아서 가져오기.

// -> 한번의 쿼리로 가능하고, 그대로 view로 보여주면됨.
// -> 상품이 1개 이상일 경우 첫번째 상품.... 그외 1로 보여주고

// -> 클릭 시 숨겨진 창에서 모든 상품 표기.

// 알림창 이쁜거 하나 찾아서 띄울수 있게 하기.
