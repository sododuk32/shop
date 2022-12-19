import Image from 'next/image';
import React from 'react';
export default function Custom404() {
  const handleHistory = () => {
    history.back();
  };
  const tempStyle = {
    Position: 'relative',
  };
  const tempStyle2 = {
    display: 'flex',
    justifycontent: 'center',
    width: '100%',
    height: '100px',
    boder: '1px solid black',
  };
  return (
    <>
      <div style={tempStyle2}>404 - Page Not Found</div>
      <div style={tempStyle}>
        <Image src="/error.jpg" onClick={handleHistory} alt="a" width={2000} height={1200} />
      </div>
    </>
  );
}
