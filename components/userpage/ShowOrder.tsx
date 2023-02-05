/* eslint-disable @typescript-eslint/no-unused-vars */
import { oidDay, orderProduct } from 'lib/redux/interface';
import React from 'react';
import style from 'styled-components';

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
  return (
    <section>
      {/* first [] */}

      {orderList[0].length != 0 || orderList[0] != undefined
        ? orderList.map((second) => (
            <div key={generator()}>
              <span key={generator()}> 주문번호:{dayNumber[orderList.indexOf(second)].oid}</span>
              <span key={generator()}>상태:{dayNumber[orderList.indexOf(second)].orderCondition}</span>
              <span key={generator()}>주문시작일:{dayNumber[orderList.indexOf(second)].orderSday}</span>
              <span key={generator()}>도착예정일:{dayNumber[orderList.indexOf(second)].daytoEnd}</span>
              <ul key={generator()}>
                {second.map((indiObj) => (
                  <>
                    <li key={generator()}>{indiObj?.productId}</li>
                    <li key={generator()}>{indiObj?.amount}</li>
                    <li key={generator()}>가격:{indiObj?.price}</li>
                  </>
                ))}
              </ul>
            </div>
          ))
        : 'nodata'}
    </section>
  );
}

export default ShowOrder;
