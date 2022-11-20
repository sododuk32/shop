/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Pagination } from 'react-bootstrap';


function ProductPagenation(
  totalContentsNumber: number,
  currentPage: number,
  category: string | string[] | undefined,
  setcurrentPage: React.Dispatch<React.SetStateAction<number>>,
) {
  let totalPageNumber = Math.ceil(totalContentsNumber / 20);
  //총 페이지 갯수.
  let currentPagenation: number[] = [];

  if (currentPage > 0 && currentPage < 11) {
    for (let i = 0; i++; i < 10) {
      currentPagenation.push(i);
    }
  } else {
    for (let i = Math.floor(currentPage / 10) * 10; i++; i + 10) {
      currentPagenation.push(i);
    }
  }

  // 받아온 currentpage를 정수 반내림한 값에서 부터 10번 반복하고  배열에 넣어줌

  return (
    <Pagination size="lg">
      <>
        <Pagination.First />
        <Pagination.Prev />
        {currentPagenation.map((n) => {
          if (n === currentPage) {
            <Pagination.Item active>{n}</Pagination.Item>;
          } else {
            <Pagination.Item onClick={() => setcurrentPage(n)}>{n}</Pagination.Item>;
          }
        })}
        <Pagination.Next />
        <Pagination.Last />
      </>
    </Pagination>
  );
}

export default ProductPagenation;
