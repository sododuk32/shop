/* eslint-disable prefer-const */
/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-string-refs */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './Drop.module.css';
import { useRef, useEffect } from 'react';
function Dropbox() {
  useEffect(() => {
    console.log(visi.current);
  });

  const visi = useRef<HTMLUListElement>(null);
  let toggle = false;
  function changeVisible() {
    if (visi.current) {
      if (!toggle) {
        toggle = !toggle;
        console.log(visi.current);
        console.log(toggle);

        return (visi.current.style.visibility = 'visible');
      } else {
        toggle = !toggle;
        console.log(visi.current);
        console.log(toggle);

        return (visi.current.style.visibility = 'hidden');
      }
    }
  }
  // return (visi.current.style.visibility = 'visible');

  return (
    <div>
      <div className={style.Dropbox} onClick={changeVisible}>
        우리브랜드▼
        <ul ref={visi} className={style.linkUl}>
          <li id="img1" className={style.link}>
            <Link className="link" href="/2">
              <span>
                {' '}
                <Image alt="no" src="/amazonlogo.png" width={114} height={46} />
              </span>
            </Link>
          </li>
          <li id="img2" className={style.link}>
            <Link className="link" href="/3">
              <span>
                {' '}
                <Image alt="no" src="/amazonlogo.png" width={114} height={46} />
              </span>
            </Link>
          </li>
          <li id="img3" className={style.link}>
            <Link className="link" href="/4">
              <span>
                {' '}
                <Image alt="no" src="/amazonlogo.png" width={114} height={46} />
              </span>
            </Link>
          </li>
          <li id="img4" className={style.link}>
            <Link className="link" href="/5">
              <span>
                {' '}
                <Image alt="no" src="/amazonlogo.png" width={114} height={46} />
              </span>
            </Link>
          </li>
          <li id="img5" className={style.link}>
            <Link className="link" href="/6">
              <span>
                {' '}
                <Image alt="no" src="/mainlogo.png" width={114} height={46} />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropbox;
