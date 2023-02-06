/* eslint-disable @typescript-eslint/no-unused-vars */
import { oidDay, orderProduct } from 'lib/redux/interface';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Button, Collapse } from 'react-bootstrap';
import showList from './showList';
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
  }
  .productList {
    list-style: none;
    border: 1px solid red;
    -webkit-transition: all 1s ease-in-out;
    height: fit-contents;
    margin-top: 0.5vw;
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
  .producsTap {
    display: flex;
    justify-content: space-between;
  }
  .summry2 {
    margin-right: 10vw;
  }
`;

let Products = styled.div`
  display: block;
`;

function ShowOrder(orderList: orderProduct[][], dayNumber: oidDay[]) {
  function generator() {
    const char = '1234562009765210';

    const serialLenght = 10;

    let randomKey = '';
    for (let i = 0; i < serialLenght; ++i) {
      const randomSingle = char[Math.floor(Math.random() * char.length)];
      randomKey += randomSingle;
    }
    return Number(randomKey);
  }
  function showing() {
    Products = styled.div`
      display: none;
    `;
  }
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
                  <span key={generator()}>가격:{dayNumber[orderList.indexOf(second)].totalPrice}원</span>
                </div>
              </div>
              <Button variant="info" onClick={() => showing()} size="sm" className="showBtn">
                주문상세 보기
              </Button>
              <ul className="productList">
                <Products>
                  <div key={dayNumber[orderList.indexOf(second)].oid} className="products">
                    {second.map((indiObj: orderProduct) => (
                      <li key={generator()} className="producsTap">
                        <div>
                          <Image className="orderImage" src="/gallary-1.jpg" alt="a" width={75} height={75} />
                        </div>
                        <li key={generator()} className="summry2">
                          <li key={indiObj.productId}>제품명:{indiObj?.productId}</li>
                          <li key={indiObj.amount}>수량:{indiObj?.amount}</li>
                          <li key={indiObj.price}>가격:{indiObj?.price}원</li>
                        </li>
                      </li>
                    ))}
                  </div>
                </Products>
              </ul>
            </div>
          ))
        : 'nodata'}
    </ListBody>
  );
}

export default ShowOrder;
