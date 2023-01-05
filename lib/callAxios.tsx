/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { getCookie } from 'cookies-next';
const defaulturl = 'https://34.97.28.149:80';

export const callAxios = axios.create({
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
