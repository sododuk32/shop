import Image from 'next/image';
import React from 'react';
export default function Custom404() {
  const handleHistory = () => {
    history.back();
  };
  const tempStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <div style={tempStyle}>
        <Image src="/error.jpg" onClick={handleHistory} alt="a" width={1910} height={940} />
      </div>
    </>
  );
}
