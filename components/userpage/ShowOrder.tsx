/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { oidDay, orderProduct } from 'lib/redux/interface';
import React, { ButtonHTMLAttributes, HtmlHTMLAttributes, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Button, Collapse } from 'react-bootstrap';
import generator from 'components/commons/generator';
const ListBody = styled.section`
  .OrderInformation {
    border: 1px solid gray;
  }
  .oids {
    display: flex;
    height: 6vw;
    justify-content: space-between;
  }
  .oid {
    font-weight: bold;
    font-size: 0.7vw;
  }
  .orderSummery {
    display: flex;
    flex-direction: column;
    padding-right: 1vw;
    font-size: 0.8vw;
  }
  .orderImage {
    width: 6vw;
    height: 6vw;
    position: relative;
    transform: scale(1);
    transition: 0.2s;
  }
  .orderImage2 {
    width: 6vw;
    height: 6vw;
    position: relative;
    transform: scale(2);
    transition: 0.2s;
  }
  .productList {
    list-style: none;
    border: 1px solid red;
    height: fit-contents;
    margin-top: 0.5vw;
  }
  .listOfProducts {
    webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  .products {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .showBtn {
    margin: 0% auto;
    overflow: hidden!;
    display: block;
  }

  .summry2 {
    margin-right: 10vw;
  }
  .productUl {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .listInfo {
    margin-right: 10vw;
  }
`;

const Products = styled.div`
  display: block;
`;
type setStateFunction = (a: React.MouseEvent<HTMLElement>) => void;
interface myprops {
  orderList: orderProduct[][];
  dayNumber: oidDay[];
  btnKey: string;
  eventFunction: setStateFunction;
}
function ShowOrder({ orderList, dayNumber, btnKey, eventFunction }: myprops) {
  console.log(orderList);
  console.log(dayNumber);
  console.log(btnKey);

  return (
    <ListBody>
      {/* first [] */}
      {orderList[0].length != 0 || orderList[0] != undefined
        ? orderList.map((second) => (
            <div key={generator()} className="OrderInformation">
              <div className="oids">
                <div key={generator()} className="oid">
                  <Image className="orderImage" src="/gallary-1.jpg" alt="a" width={150} height={150} />

                  <span>주문번호:{dayNumber[orderList.indexOf(second)].oid}</span>
                </div>
                <div className="orderSummery">
                  <span key={generator()}>상태:{dayNumber[orderList.indexOf(second)].orderCondition}</span>
                  <span key={generator()}>주문시작일:{dayNumber[orderList.indexOf(second)].orderSday}</span>
                  <span key={generator()}>도착예정일:{dayNumber[orderList.indexOf(second)].daytoEnd}</span>
                  <span key={generator()}>가격:{dayNumber[orderList.indexOf(second)].totalPrice}</span>
                </div>
              </div>
              <Button variant="info" id={dayNumber[orderList.indexOf(second)].oid} onClick={(e) => eventFunction(e)} className="showBtn">
                주문상세 보기
              </Button>
              <div className="listOfProducts">
                {second[0] != undefined && btnKey === dayNumber[orderList.indexOf(second)].oid
                  ? second.map((obj) => (
                      <ul key={generator()} className="productUl">
                        <li className="listImg">
                          <Image
                            className="orderImage"
                            onMouseEnter={(e) => (e.currentTarget.className = 'orderImage2')}
                            onMouseLeave={(e) => (e.currentTarget.className = 'orderImage')}
                            src="/gallary-1.jpg"
                            alt="a"
                            width={80}
                            height={80}
                          />
                        </li>
                        <li className="listInfo">
                          <li>제품명:{obj.productId}</li>
                          <li>수량:{obj.amount}개</li>
                          <li>가격{obj.price}원</li>
                        </li>
                      </ul>
                    ))
                  : null}
              </div>
            </div>
          ))
        : 'nodata'}
    </ListBody>
  );
}

export default ShowOrder;
