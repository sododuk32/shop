<div>
 <h2>
 프로젝트 소개 
 </h2>
 로지텍 웹페이지의 ui, 기능들을 보기만 한 다음 따라해보는 프로젝트입니다<br>
 https://www.logitech.com/ <br>
 배포 된 페이지 : https://shop-front-372501.dt.r.appspot.com/<br>
 페이지 로그인시 ID : TOM / PW QWER2@ , JACK / QWER1!
 <br>
 프로젝트 현황 및 작업 우선순위:<br>

1순위 스타일드 컴포넌트로 반응형 웹 추가 현재 index 와 GNB 반응형  90%완료<br>


 
 <br>완료목록<br>
  1. 클라이언트 전역 상태 관리를 위한 redux도입 완료<br>
  2. gcp 배포 <br>
  3. next 13업데이트로 인한 next image 리펙토링.<br>
  4. axios 모듈화 작업 완료.<br>
  5. 폴더 구조 변경 작업 완료.<br>
  6. gcp api서버 포트포워딩 ssl발급 완료 <br>
  7. 로컬스토리지 redux persist를 사용한 장바구니 기능 작성 완료 <br>
  8. 주문조회 기능 작성완료 스타일 추가 예정 <br>
  9. 댓글 작성 컴포넌트 및 rating 모듈 작성 완료  레이팅 모듈은 추 후 npm 웹에 배포 예정 <br> 
  10. fetch 된 데이터가 많은 곳은 usememo나 usecallback으로 변경해주기 
  11. 댓글- 대 댓글 기능 작성 
 
</div>

<div id="pannel">
 <H2>사용기술 ▽
 
 ![ts](https://img.shields.io/badge/Typescript-13.0.3-black)
 ![ts](https://img.shields.io/badge/Next.js-13.0.3-black)
 ![ts](https://img.shields.io/badge/React-18.2.0-purple)
 ![ts](https://img.shields.io/badge/redux-purple)

  
 ![ts](https://img.shields.io/badge/bootstrap-5.2.2-purple)
 ![ts](https://img.shields.io/badge/axios-1.2.0-blue)
 ![ts](https://img.shields.io/badge/npm-5.74.0-red)
 ![ts](https://img.shields.io/badge/express-4.18-black)

</div>
<div>
 <h2>
  주요 기능 및 페이지 소개  
 </h2>

| index페이지                                                                                                     | 제품페이지                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ![index](https://user-images.githubusercontent.com/37325163/207046416-d5ca180c-f0c5-42b7-8d72-d4f341549a1e.gif) | ![checkbox](https://user-images.githubusercontent.com/37325163/207048950-1b018c1f-f713-40f5-9415-67748f6f2633.gif) |
| 기능                                                                                                            | 기능                                                                                                               |
| 로지텍웹의 index                                                                                                | 원하는 물품 검색 기능                                                                                              |
| grid기능을 사용해표현한 케러셀                                                                                  | api요청을 통한 컨텐츠의 동적 렌더링 , 받아온 api정보를 통한 페이지 네이션,제품                                     |



 | 장바구니 페이지                                                                                                   | 로그인 기능                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ![ezgif-3-02cf426318](https://user-images.githubusercontent.com/37325163/213492194-f6191b13-ce55-4beb-963d-d69a51726bb9.gif) | ![lgin](https://user-images.githubusercontent.com/37325163/213493585-f1321bd6-1ca5-4a32-bea3-e1e4e36036e0.gif)| |
| redux 전역 상태관리를 통한 장바구니 기능                                        | jwt 발급 및 인증을 통한 로그인                                                                                                                                                             




 </div>
<div>
 <h2>디렉토리 구조</h2>
<div>  
 <div>
  
![Cap 2023-01-20 01-14-25-619](https://user-images.githubusercontent.com/37325163/213495123-0dccf3f6-810a-42e5-8b45-7675f7fc2dd3.png)
- <code>components</code> : 페이지나 컴포넌트에 삽입할 컴포넌트가 담긴 폴더입니다.
- <code>commons</code> : index페이지나 분류하기 힘든 컴포넌트를 모아둔 폴더입니다. 
- <code>productpage</code> : 상품관련 컴포넌트를 모아둔 폴더입니다.
- <code>userpage</code> : 유저 관련 페이지의 컴포넌트를 모아둔 폴더입니다

![Cap 2023-01-20 01-16-02-728](https://user-images.githubusercontent.com/37325163/213495051-d0c6a814-754d-48fd-9577-d716b8e36c07.png)
  
- <code> pages</code> : next js 라우터 기능을 사용하기 위해 사용합니다.

- <code>index</code> : 프로젝트의 메인 페이지입니다.
- <code> pagess</code> : 여러 모듈을 먼저 시험해보는 개발 전용 페이지 입니다.
  
- <code>product 폴더</code>: 상품페이지와 상품상세 페이지를 동적 라우팅한 폴더입니다.
- <code>goods 폴더</code>: 상품팡세 페이지를 동적라우팅 기능을 사용하기위해 만든 폴더입니다
- <code>[...category]</code> : 쿼리스트링에서 처럼 입력받은category를 바탕으로 제품정보api통신으로 받아서 렌더링 해주는 다이나믹 라우팅 페이지 입니다.
- <code>[pid]</code> : 쿼리스트링에서 제품번호를 받아 해당 제품 상세정보를api통신으로 받아 표현해주는 다이나믹 라우팅 페이지 입니다. 장바구니 추가 기능 또한 포함이 되어있습니다.
  
- <code>users</code>: 로그인 및 사용자 정보를 위한 페이지들이 모인 폴더입니다
- <code>login</code> : login을 위해만든 페이지입니다. id pw를 서버로보내 확인하고 jwt를 발급받습니다
- <code>usermenu</code> : 로그인 후 쿠키에 담긴 jwt를 사용해 유저의 정보를 인증하고 해당 유저의 정보를 받아서 표현해주는 페이지입니다.
 - <code>bags</code> : 장바구니에 넣은 상품의 전역 상태를 보여주는 페이지입니다

- <code>404</code> : 잘못된 경로를 입력했을때 진입하게되는 페이지 입니다.
- <code>fetches</code> : axios로 api통신하는 api호출 함수를 모아둔 파일입니다.
- <code>redux</code> : redux의 action을 정의하거나, 개별 리듀서 및 리듀서의 타입을 정의해두는 폴더입니다. 

  

  
  
  
  ![Footer](https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer)
