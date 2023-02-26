import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
const GridPh = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 100%;
    color: black;
    margin-bottom: 3vw;
    .imgsection {
      display: grid;
      grid-template-columns: repeat(3, 30vw);
      padding-top: 6rem;
      width: 80%;
      margin-left: 5vw;
    }

    .nextimg {
      width: 525px;
      height: 525px;
      position: relative;
    }
    .nextimg > hover {
      transform: scale(1.3);
      transition: 0.2s;
    }
    .card {
      width: 525px;
      height: fit-contents;
    }
    .ptas {
      font-weight: bold;
      font-size: large;
      word-wrap: break-word;
      width: 525px;
    }

    .h22 {
      color: black;
    }
  }
  @media only screen and (max-width: 1199px) and (min-width: 801px) {
    width: 100%;
    color: black;
    margin-bottom: 3vw;
    .imgsection {
      display: grid;
      grid-template-columns: repeat(3, 30vw);
      padding-top: 6rem;
      width: 80%;
    }

    .nextimg {
      width: 30vw;
      height: 30vh;
      position: relative;
    }
    .nextimg > hover {
      transform: scale(1.3);
      transition: 0.2s;
    }
    .card {
      width: 30vw;
      height: fit-contents;
      margin-left: 5vw;
    }
    .ptas {
      font-weight: bold;
      font-size: large;
      word-wrap: break-word;
      width: 30vw;
    }

    .h22 {
      color: black;
    }
  }
  @media only screen and (max-width: 800px) {
    margin-top: 5vh;

    text-decoration-line: none;
    .card {
      margin-top: 3vw;
      border: none;
    }
    .nextimg {
      position: relative;
      width: 80vw;
      height: 80vw;
      margin-top: 5vh;
      margin-left: 10vw;

      animation: fadein 0.4s;
      -moz-animation: fadein 0.4s; /* Firefox */
      -webkit-animation: fadein 0.4s; /* Safari and Chrome */
      -o-animation: fadein 0.4s; /* Opera */
    }
    .nextimg > hover {
      transform: scale(1.3);
      transition: 0.2s;
    }

    article {
      display: flex;
      flex-direction: column;
      margin-left: 10vw;

      align-items: flex-start;
      color: black;
      text-decoration-line: none;
    }
    a {
      text-decoration-line: none;
    }
    p {
      font-size: 2.8vw;
      word-wrap: break-word;
      margin-left: 10vw;
    }
    h4,
    h5 {
      font-weight: bold;
    }
    article > span {
      font-weight: 700;
      color: blue;
    }
  }
`;
function GridPhoto() {
  return (
    <GridPh>
      <div className="imgsection">
        <section className="card">
          <div className="nextimg">
            <Image className="imges" alt="gridp1" quality={100} src={'/gridp1.jpg'} fill />
          </div>
          <Link className="h22" href="/1">
            <article>
              <h4>MAC에</h4>
              <h5>나에게 딱</h5>
            </article>
          </Link>
          <p className="ptas">Mac에 딱 맞는 컬러, 디자인, 레이아웃. Logi for Mac을 만나보세요.</p>
          <Link className="h22" href="/2">
            <article>
              <span>MAC 솔루션 알아보기 &gt;</span>
            </article>
          </Link>
        </section>
        <section className="card">
          <article className="nextimg">
            <Image className="imges" alt="gridp2" quality={100} src={'/gridp2.jpg'} fill />
          </article>
          <Link className="h22" href="/1">
            <article>
              <h5>MAC을 마스터하다.</h5>
            </article>
          </Link>
          <p className="ptas">Mac용 기계식 키보드와 최고급 마우스로 Mac을 마스터 하세요.</p>
          <Link className="h22" href="/2">
            <article>
              <span>MX MECHANICAL MINI FOR MAC &gt;</span>
              <span>MX MASTER 3S FOR MAC &gt;</span>
            </article>
          </Link>
        </section>
        <section className="card">
          <div className="nextimg">
            <Image className="imges" alt="gridp3" src={'/gridp3.jpg'} quality={100} fill />
          </div>
          <Link className="h22" href="/1">
            <article>
              <h5>새로운 OPTIONS+ 기능</h5>
            </article>
          </Link>
          <p className="ptas">Logi Options+로 로지텍 마우스와 키보드를 원하는대로 커스터마이징해보세요.</p>
          <Link className="h22" href="/2">
            <article>
              <span>LOGI OPTIONS+ &gt;</span>
            </article>
          </Link>
        </section>
      </div>
    </GridPh>
  );
}

export default GridPhoto;
