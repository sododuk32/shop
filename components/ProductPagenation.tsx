/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Pagination } from 'react-bootstrap';

function ProductPagenation(
  totalpage: number,
  currentPage: number,
  category: string | string[] | undefined,
  setcurrentPage: React.Dispatch<React.SetStateAction<number>>,
  numberList: number[],
) {
  let totalPageNumber = Math.ceil(totalpage / 20);
  console.log('pagination totalPageNumber:' + totalpage);

  //총 페이지 갯수.
  let pageList: JSX.Element[] = [];
  //위 과정을 거치면 currentPagenation에는 현재숫자를 반내림한 정수의 0부터 10번째까지가 들어감.

  for (let i = 0; i < 10; i++) {
    if (numberList[i] === currentPage) {
      pageList[i] = (
        <Pagination.Item key={i} active>
          {numberList[i]}
        </Pagination.Item>
      );
    } else {
      pageList[i] = (
        <Pagination.Item key={i} onClick={() => setcurrentPage(numberList[i])}>
          {numberList[i]}
        </Pagination.Item>
      );
    }
  }
  return (
    <Pagination size="lg">
      <>
        <Pagination.First />
        <Pagination.Prev />
        {pageList}
        <Pagination.Next onClick={() => setcurrentPage(numberList[9] + 1)} />
        <Pagination.Last onClick={() => setcurrentPage(totalPageNumber)} />
      </>
    </Pagination>
  );
}

export default ProductPagenation;
