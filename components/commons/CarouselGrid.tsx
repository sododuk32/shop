/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React from 'react';
import styles from './CarouselGrid.module.css';
import Image from 'next/image';
import { useState, useRef } from 'react';
import styled from 'styled-components';
const Carosuel = styled.main`
  @media only screen and (min-width: 801px) {
    width: 90vw;
    height: 46rem;
    .gridsContainer {
      width: 90vw;
      height: 45rem;
      overflow-x: hidden;
      background: transparent;
      scroll-behavior: smooth;
      transition: transform 0.5s;
    }
    .btnBox {
      position: absolute;
    }

    .boxs {
      width: 580rem;
      height: 45rem;
      display: flex;
      transition: transform 0.5s;
    }

    .boxs::before {
      content: '';
      display: block;
      width: 28rem;
    }
    .gridbox1,
    .gridbox2,
    .gridbox3 {
      display: grid;
      margin-left: 3rem;
      grid-template-areas:
        'a a b'
        'a a b'
        'c d b';
      grid-auto-columns: 1fr 1fr;
      grid-auto-rows: 1fr 1fr;
      height: 100%;
      width: 70rem;
      transition: transform 0.5s;
      scroll-behavior: smooth;
      overflow: hidden;
    }

    .prevBtn {
      position: absolute;
      width: 12rem;
      height: 45rem;
      opacity: 0.1;
      top: -45rem;
      left: 30rem;
      z-index: 2;
    }

    .nextBtn {
      position: absolute;
      width: 12rem;
      height: 45rem;
      opacity: 0.2;
      top: -45rem;
      left: 80vw;
      z-index: 2;
    }

    .nextBtn:hover {
      opacity: 0.5;
    }
    .prevBtn:hover {
      opacity: 0.5;
    }

    .keyboardwhite {
      grid-area: a;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .headset {
      grid-area: b;
      position: relative;
      width: 100%;
      height: 100%;
    }
    .laptop {
      grid-area: c;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .webcam {
      grid-area: d;
      position: relative;
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1024px) {
      .gridbox {
        grid-template-columns: unset;
      }
    }

    .gridbox1 > div:hover {
      transform: scale(1.3);
      transition: 0.2s;
    }
    .gridbox2 > div:hover {
      transform: scale(1.3);
      transition: 0.2s;
    }
    .gridbox3 > div:hover {
      transform: scale(1.3);
      transition: 0.2s;
    }
  }
  @media only screen and (max-width: 800px) {
    
    .gridsContainer {
      width:fit-contents;
      height:fit-contents;
      transition: transform 0.5s;
      overflow-x: scroll;

    }
    .gridsContainer::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
  

    .boxs {
      width:320vw;
      height:60vw;
      display: flex;
      flex-direction:row;
      overflow-x: scroll;

    
    } 

    .gridbox1,
    .gridbox2,
    .gridbox3 {
      display: grid;
      grid-template-areas:
        'a a'
        'a a'
        'c c'
        'c c';
      grid-auto-columns: 1fr;
      grid-auto-rows: 1fr;
      width:100vw;
      overflow-x: scroll;

    }

    .prevBtn {
      visibility: hidden;
    }

    .nextBtn {
      visibility: hidden;
    }

   .gridtext{
    position:relative;
    z-index:10;
   }
   .nextimg
   {
    position:relative;
   }
    .keyboardwhite {
      grid-area: a;
      position: relative;
  
      width: 90vw;
      height: 30vw;
    }

    .headset {
      visibility: hidden;

      grid-area: b;
      position: relative;
      width: 30%;
      height: 100%;
    }
    .laptop {

      grid-area: c;
      position: relative;
      display:flex;
      flex-direction:column;
      width: 100vw;
      height: 30vw;
    }
    .webcam {
      visibility: hidden;
      grid-area: d;
      position: relative;
      width: 100%;
      height: 100%;
    }


    .gridbox1 > div:hover {
      transform: scale(1.3);
      transition: 0.2s;
    }
    .gridbox2 > div:hover {
      transform: scale(1.3);
      transition: 0.2s;
    }
    .gridbox3 > div:hover {
      transform: scale(1.3);
      transition: 0.2s;
    }
    
  }
  }
`;
function CarouselGrid() {
  const [slide, setslide] = useState('1');
  let nowslide = parseInt(slide, 10);
  const slidePhoto = useRef<HTMLInputElement>(null);

  const prevClick = () => {
    if (slidePhoto.current) {
      if (nowslide === 1) {
        slidePhoto.current.style.transform = 'translate3d(-133.6rem, 0px, 0px)';
        setslide('3');
      }
      if (nowslide === 2) {
        slidePhoto.current.style.transform = 'translate3d(0, 0px, 0px)';

        setslide('1');
      }
      if (nowslide === 3) {
        slidePhoto.current.style.transform = 'translate3d(-60.3rem, 0px, 0px)';

        setslide('2');
      }
    }
  };
  const nextClick = () => {
    if (slidePhoto.current) {
      if (nowslide === 1) {
        slidePhoto.current.style.transform = 'translate3d(-60.3rem, 0px, 0px)';

        setslide('2');
      }
      if (nowslide === 2) {
        slidePhoto.current.style.transform = 'translate3d(-133.6rem, 0px, 0px)';

        setslide('3');
      }
      if (nowslide === 3) {
        slidePhoto.current.style.transform = 'translate3d(0, 0px, 0px)';
        setslide('1');
      }
    }
  };
  return (
    <Carosuel>
      <section id="gridsContainer" className="gridsContainer">
        <article id="boxs" ref={slidePhoto} className="boxs">
          <div id="slide1" data-slide-index="1" aria-hidden="true" className="gridbox1">
            <div className="keyboardwhite">
              <Image className="nextimg" src={'/keyboardwhite.jpg'} alt="1" fill />
            </div>
            <div className="headset">
              <Image className="nextimg" src={'/headset.jpg'} alt="1" fill />
            </div>
            <div className="laptop">
              <Image className="nextimg" src={'/laptop.jpg'} alt="1" fill />
            </div>
            <div className="webcam">
              <Image className="nextimg" src={'/webcam.jpg'} alt="1" fill />
            </div>
          </div>
          <div id="slide2" data-slide-index="2" aria-hidden="true" className="gridbox2">
            <div className="keyboardwhite">
              <Image className="nextimg" src={'/keyboardwhite.jpg'} alt="1" fill />
            </div>
            <div className="headset">
              <Image className="nextimg" src={'/headset.jpg'} alt="1" fill />
            </div>
            <div className="laptop">
              <Image className="nextimg" src={'/laptop.jpg'} alt="1" fill />
            </div>
            <div className="webcam">
              <Image className="nextimg" src={'/webcam.jpg'} alt="1" fill />
            </div>
          </div>
          <div id="slide3" data-slide-index="3" aria-hidden="true" className="gridbox3">
            <div className="keyboardwhite">
              <Image className="nextimg" src={'/keyboardwhite.jpg'} alt="1" fill />
            </div>
            <div className="headset">
              <Image className="nextimg" src={'/headset.jpg'} alt="1" fill />
            </div>
            <div className="laptop">
              <Image className="nextimg" src={'/laptop.jpg'} alt="1" fill />
            </div>
            <div className="webcam">
              <Image className="nextimg" src={'/webcam.jpg'} alt="1" fill />
            </div>
          </div>
        </article>
      </section>
      <div className="btnBox">
        <button id="prevbtn" className="prevBtn" onClick={prevClick}>
          &#8592;
        </button>
        <button id="nextbtn" className="nextBtn" onClick={nextClick}>
          &#8594;
        </button>
      </div>
    </Carosuel>
  );
}

export default CarouselGrid;
