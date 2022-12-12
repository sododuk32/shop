<div>
 <h2>
 프로젝트 소개 
 </h2>
 로지텍 웹페이지의 ui, 기능들을 보기만 한 다음 따라해보는 프로젝트입니다
 https://www.logitech.com/
</div>

<div id="pannel">
 <H2>사용기술 ▽
 
 ![ts](https://img.shields.io/badge/Typescript-13.0.3-black)
 ![ts](https://img.shields.io/badge/Next.js-13.0.3-black)
 ![ts](https://img.shields.io/badge/React-18.2.0-purple)
 ![ts](https://img.shields.io/badge/ReactQuery-3.39.2-purple)
  
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

![Cap 2022-12-12 22-10-05-288](https://user-images.githubusercontent.com/37325163/207053257-de938137-5324-431d-bec1-ac4c9f47eb63.png)
| ![주요 기능 함수](https://user-images.githubusercontent.com/37325163/207052956-47053d21-76c6-4b30-a5cf-8e3672faf4dd.jpg)

 </div>
<div>
 <h2>디렉토리 구조</h2>
<div>  
 <div>

![Cap 2022-12-12 22-36-49-323](https://user-images.githubusercontent.com/37325163/207058393-9ecd4b81-d068-4ea1-9955-d02b82a86b23.png)

-<code> pages</code> : next js 라우터 기능을 사용하기 위해 사용합니다.

- <code>index</code> : 카피코딩 프로젝트의 메인 페이지입니다. -<code> pagess</code> : 여러 모듈을 먼저 시험해보는 개발 전용 페이지 입니다.
- <code>product 폴더</code>: 상품페이지와 상품상세 페이지를 동적 라우팅한 폴더입니다.
- <code>goods 폴더</code>: 상품팡세 페이지를 동적라우팅 기능을 사용하기위해 만든 폴더입니다
- <code>[...category]</code> : 쿼리스트링에서 처럼 입력받은category를 바탕으로 제품정보api통신으로 받아서 렌더링 해주는 페이지 입니다.
- <code>[pid]</code> : 쿼리스트링에서 제품번호를 받아 해당 제품 상세정보를api통신으로 받아 표현해주는 페이지 입니다.
- <code>users</code>: 로그인 및 사용자 정보를 위한 페이지들이 모인 폴더입니다
- <code>login</code> : login을 위해만든 페이지입니다. id pw를 서버로보내 확인하고 jwt를 발급받습니다
- <code>usermenu</code> : 로그인 후 쿠키에 담긴 jwt를 사용해 유저의 정보를 인증하고 해당 유저의 정보를 받아서 표현해주는 페이지입니다.