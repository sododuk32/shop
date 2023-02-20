import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
const GridPh = styled.div`
  @media only screen and (min-width: 801px) {
    width: 100%;
    color: black;
    margin-bottom: 3vw;
    .imgsection {
      display: grid;
      grid-template-columns: 0.2fr 0.2fr 0.2fr;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      width: 26rem;
      margin-left: 26rem;
      padding-top: 6rem;
    }

    .nextimg {
      position: static;
    }
    .nextimg > hover {
      transform: scale(1.3);
      transition: 0.2s;
    }
    .card {
      width: 24rem;
    }
    .ptas {
      font-weight: bold;
      font-size: large;
      word-wrap: break-word;
    }

    .h22 {
      color: black;
    }
  }
  @media only screen and (max-width: 800px) {
    text-decoration-line: none;
    .card {
      margin: 0% auto;
    }
    .nextimg {
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
      align-items: center;
    }
  }
`;
function GridPhoto() {
  return (
    <GridPh>
      <div className="imgsection">
        <section className="card">
          <div className="nextimg">
            <Image alt="gridp1" src={'/gridp1.jpg'} width={386} height={386} />
          </div>
          <Link className="h22" href="/1">
            <article>
              <h3>MAC에</h3>
              <h4>나에게 딱</h4>
            </article>
          </Link>
          <p className="ptas">Mac에 딱 맞는 컬러, 디자인, 레이아웃. Logi for Mac을 만나보세요.</p>
          <Link className="h22" href="/2">
            <span>MAC 솔루션 알아보기 &gt;</span>
          </Link>
        </section>
        <section className="card">
          <article className="nextimg">
            <Image alt="gridp2" src={'/gridp2.jpg'} width={386} height={386} />
          </article>
          <Link className="h22" href="/1">
            <article>
              <h2>MAC을 마스터하다.</h2>
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
            <Image alt="gridp3" src={'/gridp3.jpg'} width={386} height={386} />
          </div>
          <Link className="h22" href="/1">
            <div>
              <h2>새로운 OPTIONS+ 기능</h2>
            </div>
          </Link>
          <p className="ptas">Logi Options+로 로지텍 마우스와 키보드를 원하는대로 커스터마이징해보세요.</p>
          <Link className="h22" href="/2">
            <span>LOGI OPTIONS+ &gt;</span>
          </Link>
        </section>
      </div>
    </GridPh>
  );
}

export default GridPhoto;
