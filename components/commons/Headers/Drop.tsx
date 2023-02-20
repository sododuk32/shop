/* eslint-disable prefer-const */
/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-string-refs */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import styled from 'styled-components';
const Drop = styled.div`
  @media only screen and (max-width: 800px) {
    font-size: xx-small;
    width: 20vw;
    margin-top: 3vw;
    .list > img {
      position: relative;
    }

    .Dropbox {
      width: 20vw;
      height: 5vw;
      padding-top: 0.5vw;
    }

    .linkUl {
      width: fit-content;
      list-style: none;
      padding-left: 0;
      visibility: hidden;
      transition: 0.6s;
    }
    .linkUlanimation {
      width: fit-content;
      list-style: none;
      padding-left: 0;
      transition: 0.6s;
    }

    .list {
      width: fit-content;
    }
    .linkUl:hover > list,
    .Dropbox .linkUl:hover > link {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }
  @media only screen and (min-width: 801px) {
    .list > img {
      position: relative;
    }

    .Dropbox {
      width: 10vw;
      height: 3vw;
      padding-top: 0.5vw;
    }

    .linkUl {
      width: fit-content;
      list-style: none;
      visibility: hidden;
      transition: 0.4s;
    }
    .linkUlanimation {
      width: fit-content;
      list-style: none;
      transition: 0.5s;
    }
    .link {
      margin-top: 3vw;
    }
    .list {
      width: fit-content;
      height: fit-content;
      list-style: none;
    }
  }
`;
function Dropbox() {
  const visi = useRef<HTMLUListElement>(null);
  let toggle = false;
  function changeVisible() {
    if (visi.current) {
      if (!toggle) {
        toggle = !toggle;

        visi.current.style.visibility = 'visible';
        visi.current.className = 'linkUlanimation';
      } else {
        toggle = !toggle;

        visi.current.style.visibility = 'hidden';
        visi.current.className = 'linkUl';
      }
    }
  }

  return (
    <Drop>
      <div className="Dropbox" onClick={changeVisible}>
        우리브랜드▼
        <ul ref={visi} className="linkUl">
          <li id="img1" className="list">
            <Link className="link" href="/2">
              <Image alt="no" src="/amazonlogo.png" width={114} height={46} layout="responsive" />
            </Link>
          </li>
          <li id="img2" className="list">
            <Link className="link" href="/3">
              <Image alt="no" src="/amazonlogo.png" width={114} height={46} layout="responsive" />
            </Link>
          </li>
          <li id="img3" className="list">
            <Link className="link" href="/4">
              <Image alt="no" src="/amazonlogo.png" width={114} height={46} layout="responsive" />
            </Link>
          </li>
          <li id="img4" className="list">
            <Link className="link" href="/5">
              <span>
                <Image alt="no" src="/amazonlogo.png" width={114} height={46} layout="responsive" />
              </span>
            </Link>
          </li>
          <li id="img5" className="list">
            <Link className="link" href="/6">
              <span>
                <Image alt="no" src="/mainlogo.png" width={114} height={46} layout="responsive" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </Drop>
  );
}

export default Dropbox;
