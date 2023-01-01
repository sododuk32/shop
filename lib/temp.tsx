/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { getCookie } from 'cookies-next';
const defaulturl = 'http://localhost:8080';

export const temp = axios.create({
  baseURL: defaulturl,
  headers: {
    'Content-Type': `application/json`,
    withCredentials: true,
    Authorization: getCookie('jwt'),
  },
});

// 1. gcp 업로드 우선으로.
// 1해결되면 2. 상태관리. next - cookie사용해서 , 모듈화 다시
// 3. 이력서 더 내기. - 언제든지하기

// function getCookie(cName: string) {
//   cName = cName + '=';
//   const cookieData = getCookie('jwt');

//   let start = cookieData.indexOf(cName);
//   let cValue = '';
//   if (start != -1) {
//     start += cName.length;
//     let end = cookieData.indexOf(';', start);
//     if (end == -1) end = cookieData.length;
//     cValue = cookieData.substring(start, end);
//   }
//   return encodeURIComponent(cValue);
// }
// //encodeURIComponent encodeURI 둘중하나임.
