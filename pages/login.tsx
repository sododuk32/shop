/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import { DOMAttributes } from 'react';
import { ComponentProps } from 'react';

function login() {
  const handleChange: ComponentProps<'button'>['onClick'] = (e) => {
    e.target.innerText = '222';
  };
  return (
    <div>
      {/* <input onScroll={handleChange} /> */}
      {/* <input onChange={handleChange} /> */}
      <button onClick={handleChange}>asdfasfd</button>
    </div>
  );
}

export default login;
