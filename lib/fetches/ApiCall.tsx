/* eslint-disable @typescript-eslint/no-explicit-any */
import { Comments } from 'lib/redux/interface';
import { callAxios, defaulturl } from './callAxios';

/**
 * 엑세스 jwt키 값을 헤더의 auth에 넣는 사용자 인증api
 *
 * 입력값:
 *
 * sendJson: 유저가 입력한 id pw 오브젝트를 json변환 한 string값
 *
 * 반환값
 *
 *    RESPONSE 오브젝트:
 *
 *    message:BOOLEAN [인증 성공 유무]
 *
 *    userid: STRING 유저 넘버 uid,
 *
 *    usersIdentity: STRING, 유저 아이디
 *
 */
export async function updater(getcookie: any) {
  console.log('updater실행');
  return await callAxios.get('/verify', {
    headers: {
      'Content-Type': `application/json`,
      withCredentials: true,
      Authorization: getcookie,
    },
  });
}

/**
 * 상품 게시판 페이지 불러오기
 *
 * 입력값:
 *
 * category: query string의 category값
 *
 * currentPage: pagination의 현제페이지이자, db에 20개식 잘라서 조회할 숫자
 *
 * tags:유저가 선택한 상품의 태그들
 *
 * 리턴값은 상품정보가 담긴 json
 */
export async function postProduct(category: string, currentPage: number, tags: string[]) {
  console.log('postProduct실행');
  return callAxios.post(defaulturl + '/productInfo/' + category + '/' + currentPage, { tags });
}
/**
 * 로그인을 위한 post통신
 *
 * sendJson: 유저가 입력한 id pw 오브젝트를 json변환 한 string값
 *
 * header type : json
 *
 * return object : message (아이디 비밀번호 존재 유무) , jwtToken (엑세스 토큰)
 */
export async function postLogin(sendJson: string) {
  console.log('postLogin실행');
  return callAxios.post(defaulturl + '/login', sendJson, {
    headers: { 'Content-Type': `application/json` },
  });
}
/**
 * 장바구니 담기를 위한 api통신
 *
 * 입력값:
 *
 * uid:유저고유id
 *
 * pid:  db에 저장된 상품 고유 id
 *
 * amount: 장바구니에 담은 물건의 수량
 *
 * 반환값:
 *
 *
 */
export const putIncart = async (uids: string, carts: string, price: number) => {
  console.log('postLogin실행');
  const sendCart: string = JSON.stringify(carts);
  return callAxios.post(defaulturl + '/putIncart', { uid: uids, cart: sendCart, totalPrice: price });
};
/**
 * uid를 얻기위한 api통신
 *
 * 입력값: jwt토큰
 * 반환값: uid
 *
 *
 */
export const updater2 = async (getcookie: any) => {
  const response = await callAxios.get('/verify', {
    headers: {
      'Content-Type': `application/json`,
      withCredentials: true,
      Authorization: getcookie,
    },
  });
  const userId: string = response.data.userid;
  return userId;
};

export const getOderinfo = async (uids: string) => {
  return callAxios.post(defaulturl + '/getOderinfo', { uid: uids });
};

export const inputComment = async (commentObj: Comments) => {
  return callAxios.post(defaulturl + '/inputComment', {
    userName: commentObj.userName,
    pid: commentObj.pids,
    uid: commentObj.uids,
    rating: commentObj.rating,
    comment: commentObj.comment,
    line: commentObj.line,
    togle: commentObj.togle,
  });
};
