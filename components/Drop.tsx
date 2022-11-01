/* eslint-disable react/no-string-refs */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './Drop.module.css';
function Dropbox() {
  return (
    <div>
      <button type="button">우리브랜드</button>
      <div className={style.link}>
        <Link className="link" href="/2">
          <Image src="/icon-category-cases-protection.png" width={99} height={46} />
        </Link>
      </div>
      <div className={style.link}>
        <Link className="link" href="/3">
          <Image src="/icon-category-cases-protection.png" width={99} height={46} />
        </Link>
      </div>
      <div className={style.link}>
        <Link className="link" href="/4">
          <Image src="/icon-category-cases-protection.png" width={99} height={46} />
        </Link>
      </div>
      <div className={style.link}>
        <Link className="link" href="/5">
          <Image src="/icon-category-cases-protection.png" width={99} height={46} />
        </Link>
      </div>
      <div className={style.link}>
        <Link className="link" href="/6">
          <Image src="/icon-category-cases-protection.png" width={99} height={46} />
        </Link>
      </div>
      <div className={style.link}>link2</div>
    </div>
  );
}

export default Dropbox;
