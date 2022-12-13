import React from 'react';

function userResist() {
  return (
    <div>
      <div>
        <label>id</label>
        <input id="inputid" type="text" />
        <button>중복확인</button>
      </div>
      <div>
        <label>pw</label>
        <input id="inputpw" type="text" />
      </div>
      <button>등록</button>
    </div>
  );
}

export default userResist;
