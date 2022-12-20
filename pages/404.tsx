import Image from 'next/image';
import React from 'react';
export default function Custom404() {
  const handleHistory = () => {
    history.back();
  };
  const tempStyle = {
    position: 'relative',
  };

  return (
    <>
      <div style={tempStyle}>
        <Image src="/error.jpg" onClick={handleHistory} alt="a" width={2000} height={1200} />
      </div>
    </>
  );
}
