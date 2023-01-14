/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//rootstate가 스토어 인덱스 같음.
import { decrement, increment, selectValue } from '../lib/redux/reducers/counterSlice';
//이건 스토어에서 참조할 state
import { productInfo } from 'lib/redux/interface';
import { cartTest } from 'lib/redux/reducers/getUserSlice';
import { store } from 'store';
import { add, remove } from 'lib/redux/reducers/getUserSlice';
function pagess() {
  const dispatch = useDispatch();
  const count = useSelector(selectValue);
  const mycart = useSelector(cartTest);

  console.log('mounted');

  const product: productInfo = {
    productId: 'number3',
    amount: 1,
    price: 30000,
    option: {
      ProductColor: 'white',
      ProductSize: 'L',
      ProductWireless: 'cable',
      ProductHands: 'left-hands',
    },
  };
  const product2: productInfo = {
    productId: 'number1231',
    amount: 2,
    price: 20000,
    option: {
      ProductColor: 'white',
      ProductSize: 'L',
      ProductWireless: 'cable',
      ProductHands: 'left-hands',
    },
  };
  const diffoptionp2: productInfo = {
    productId: 'number3',
    amount: 1,
    price: 10000,
    option: {
      ProductColor: 'Yello',
      ProductSize: 'S',
      ProductWireless: 'WIRELESS',
      ProductHands: 'left-hands',
    },
  };
  const mystating: productInfo[] = [product, product2, diffoptionp2];

  function putItOn1() {
    store.dispatch(add(product));
    console.log(mycart);
  }
  function putItOn2() {
    store.dispatch(add(product2));
    console.log(mycart);
  }
  function putItOn3() {
    store.dispatch(add(diffoptionp2));
    console.log(mycart);
  }
  const existProduct = mystating.find((e) => e.productId === product.productId);
  function fixamount() {
    store.dispatch(add(diffoptionp2));
  }
  function deletingCart() {
    store.dispatch(remove(product));
  }
  //Argument of type '() => IterableIterator<productInfo>' is not assignable to parameter of type 'AnyAction'.
  //=>액션 타입 지정필요
  return (
    <div>
      <div>
        <h1>The value of count is {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={putItOn1}>카트에넣기</button>
        <button onClick={putItOn2}>1번과 다른 상품 넣기</button>
        <button onClick={putItOn3}>2번째랑 같지만 옵션이 다른 넣기</button>
        <button onClick={fixamount}>1번의 다른옵션</button>
        <button onClick={deletingCart}>첫번째를 지워줌</button>
      </div>
      ;
    </div>
  );
}

export default pagess;
