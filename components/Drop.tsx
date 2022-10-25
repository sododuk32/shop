/* eslint-disable react/no-string-refs */
import React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { SxProps } from '@mui/system';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './Drop.module.css';
function Dropbox() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  // https://mui.com/material-ui/react-click-away-listener/#main-content
  const styles: SxProps = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
    height: 40,
    width: 85,
    backgroundcolor: 'white',
  };
  return (
    <div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ position: 'relative' }}>
          <button type="button" onClick={handleClick}>
            우리브랜드
          </button>
          {open ? (
            <Box sx={styles}>
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
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
    </div>
  );
}

export default Dropbox;
