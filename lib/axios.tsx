import axios from 'axios';
// cookies: js로 쿠키가 져오기.
export const temp = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-Type': `application/json`,
    withCredentials: true,
    Authorization: cookies.get('jwt'),
  },
});

// 1. gcp 업로드 우선으로.
// 1해결되면 2. 상태관리. next - cookie사용해서 , 모듈화 다시
// 3. 이력서 더 내기. - 언제든지하기
