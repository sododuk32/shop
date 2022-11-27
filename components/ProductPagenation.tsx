/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Pagination } from 'react-bootstrap';

function ProductPagenation(totalpage: number, currentPage: number, category: string | undefined, setcurrentPage: React.Dispatch<React.SetStateAction<number>>) {
  let totalPageNumber = totalpage;
  console.log('pagination totalPageNumber:' + totalpage);

  //총 페이지 갯수.
  let pageList: JSX.Element[] = [];
  //위 과정을 거치면 currentPagenation에는 현재숫자를 반내림한 정수의 0부터 10번째까지가 들어감.
  console.log(currentPage);
  let numberList: number[] = [];

  for (let i = 0; i < 10; i++) {
    if (currentPage < 5) {
      numberList[i] = i + 1;
    } else {
      if (currentPage - (4 - i) > totalpage) {
        break;
      } else {
        numberList[i] = currentPage - (4 - i);
      }
    }
  }

  for (let i = 0; i < numberList.length; i++) {
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
        <Pagination.Item key={146546465456} onClick={() => setcurrentPage(1)}>
          {1}
        </Pagination.Item>
        <Pagination.First onClick={() => setcurrentPage(numberList[0])} />
        <Pagination.Prev onClick={() => setcurrentPage(numberList[0] - 1)} />
        {pageList}
        <Pagination.Next onClick={() => setcurrentPage(numberList[9] + 1)} />
        <Pagination.Last onClick={() => setcurrentPage(numberList[9] + 10)} />
        <Pagination.Item key={totalpage} onClick={() => setcurrentPage(totalpage)}>
          {totalpage}
        </Pagination.Item>
      </>
    </Pagination>
  );
}

export default ProductPagenation;
