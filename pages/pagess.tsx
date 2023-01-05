/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//rootstate가 스토어 인덱스 같음.
import { decrement, increment, selectValue } from '../slices/counterSlice';
//이건 스토어에서 참조할 state
function pagess() {
  const dispatch = useDispatch();
  const count = useSelector(selectValue);
  console.log('mounted');
  return (
    <div>
      <div>
        <h1>The value of count is {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
      ;
    </div>
  );
}

export default pagess;
