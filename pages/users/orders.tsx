/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from 'components/commons/Headers/Header';
import SetLanguage from 'components/commons/Headers/SetLanguage';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getOderinfo } from 'lib/fetches/ApiCall';
import { useSelector } from 'react-redux';
import { userStat } from 'lib/redux/reducers/isLoginSlice';
import { orderInfo, productInfo } from 'lib/redux/interface';

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function orders() {
  const stat = useSelector(userStat);
  const uid = stat.uid;
  const [order, setorder] = useState<orderInfo[]>([]);

  useEffect(() => {
    startFetching(uid);
    console.log(order);
  }, []);

  function startFetching(uid: string) {
    let myorder: orderInfo[];

    getOderinfo(uid).then((res) => {
      myorder = res.data.yourOrder;

      setorder(myorder);
    });
  }
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
                  <div className="productPannel"></div>
                  <div className="pricePannel"></div>
                </div>
                <div className="totalPannel">
                  <span className="totalspan"></span>
                  <span className="totalspan"> </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* <div>{order.length > 0 ? order[0].daytoEnd : null}</div> */}
      </Orderbody>
    </div>
  );
}

export default orders;
// 사용자 uid , && 상태가 ready or shipping 인것들만 찾아서 가져오기.

// -> 한번의 쿼리로 가능하고, 그대로 view로 보여주면됨.
// -> 상품이 1개 이상일 경우 첫번째 상품.... 그외 1로 보여주고

// -> 클릭 시 숨겨진 창에서 모든 상품 표기.

// 알림창 이쁜거 하나 찾아서 띄울수 있게 하기.
