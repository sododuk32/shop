<div>
 <h2>
 프로젝트 소개 
 </h2>
 로지텍 웹페이지의 ui, 기능들을 보기만 한 다음 따라해보는 프로젝트입니다<br>
 https://www.logitech.com/ <br>
 

 <br>
 프로젝트 현황 및 작업 우선순위:<br>
1순위. 프론트 페이지 전반적인 css 수정,gcp 프론트 배포 오류 픽스 <br>
2순위. 사용자 정보 상태관리 작업<br>

 
 <br>완료목록<br>
  1. 클라이언트 전역 상태 관리를 위한 redux도입 완료<br>
  2. gcp 배포 <br>
    ㄴ  프론트 서버 배포완료. api사용 페이지들은 제대로 작동하지않음. 2차 배포로 약간의 수정 완료 추가될 기능 더 많음. <br>
    ㄴ  sql서버 동작 확인 완료. 
    ㄴ  https 동작 확인 완료. 
    ㄴ  node server 80, etc port... ->8080 포트 포워딩을 위한 nginex 사용중 오류 발생. <br>
    이 문제 해결시 api서버 사용가능<br>
    ㄴ  프론트 클라이언트 ,node서버 양쪽에 ssl 기능 도입 예정.<br>
    ㄴ 프론트 서버 빌드 오류 수정중 <br>
  3. next 13업데이트로 인한 next image 리펙토링.<br>
  4. axios 모듈화 작업 완료.<br>
  5. 폴더 구조 변경 작업 완료.<br>
  6. gcp api서버 포트포워딩 ssl발급 완료 <br>
  7. 로컬스토리지 redux persist를 사용한 장바구니 기능 작성 완료 <br>
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

 </div>
<div>
 <h2>디렉토리 구조</h2>
<div>  
 <div>

![Cap 2022-12-12 22-36-49-323](https://user-images.githubusercontent.com/37325163/207058393-9ecd4b81-d068-4ea1-9955-d02b82a86b23.png)

- <code> pages</code> : next js 라우터 기능을 사용하기 위해 사용합니다.

- <code>index</code> : 카피코딩 프로젝트의 메인 페이지입니다.
- <code> pagess</code> : 여러 모듈을 먼저 시험해보는 개발 전용 페이지 입니다.
- <code>product 폴더</code>: 상품페이지와 상품상세 페이지를 동적 라우팅한 폴더입니다.
- <code>goods 폴더</code>: 상품팡세 페이지를 동적라우팅 기능을 사용하기위해 만든 폴더입니다
- <code>[...category]</code> : 쿼리스트링에서 처럼 입력받은category를 바탕으로 제품정보api통신으로 받아서 렌더링 해주는 다이나믹 라우팅 페이지 입니다.
- <code>[pid]</code> : 쿼리스트링에서 제품번호를 받아 해당 제품 상세정보를api통신으로 받아 표현해주는 다이나믹 라우팅 페이지 입니다. 장바구니 추가 기능 또한 포함이 되어있습니다.
- <code>users</code>: 로그인 및 사용자 정보를 위한 페이지들이 모인 폴더입니다
- <code>login</code> : login을 위해만든 페이지입니다. id pw를 서버로보내 확인하고 jwt를 발급받습니다
- <code>usermenu</code> : 로그인 후 쿠키에 담긴 jwt를 사용해 유저의 정보를 인증하고 해당 유저의 정보를 받아서 표현해주는 페이지입니다.
- <code>components</code> : 페이지나 컴포넌트에 삽입할 컴포넌트가 담긴 폴더입니다.
- <code>404</code> : 잘못된 경로를 입력했을때 진입하게되는 페이지 입니다.

- <code>fetching</code> : axios로 api통신하는 api호출 함수를 모아둔 파일입니다.

  ![Footer](https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer)
