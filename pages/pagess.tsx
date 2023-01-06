/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//rootstate가 스토어 인덱스 같음.
import { decrement, increment, selectValue } from '../lib/redux/reducers/counterSlice';
//이건 스토어에서 참조할 state
import { productInfo } from 'lib/interface';
import { cartTest } from 'lib/redux/reducers/getUserSlice';
import { store } from 'store';
import { add } from 'lib/redux/reducers/getUserSlice';
function pagess() {
  const dispatch = useDispatch();
  const count = useSelector(selectValue);
  const mycart = useSelector(cartTest);

  console.log('mounted');

  const product: productInfo = {
    productId: 'number3',
    amount: '3',
  };

  function putItOn() {
    store.dispatch(add(product));
  }
  //Argument of type '() => IterableIterator<productInfo>' is not assignable to parameter of type 'AnyAction'.
  //=>액션 타입 지정필요
  return (
    <div>
      <div>
        <h1>The value of count is {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={putItOn}>카트에넣기</button>
      </div>
      ;
    </div>
  );
}

export default pagess;
