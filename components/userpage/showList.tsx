/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { orderProduct } from 'lib/redux/interface';
import React from 'react';
import { Button } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';

function showList(indiObj: orderProduct) {
  let open = false;

  return (
    <li>
      <Collapse in={open}>
        <div>
          <li key={indiObj.productId}>제품명:{indiObj?.productId}</li>
          <li key={indiObj.amount}>수량:{indiObj?.amount}</li>
          <li key={indiObj.price}>가격:{indiObj?.price}</li>
        </div>
      </Collapse>
    </li>
  );
}

export default showList;
