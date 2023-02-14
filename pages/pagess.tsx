/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productInfo } from 'lib/redux/interface';
import { changeCart } from 'lib/redux/reducers/getUserSlice';
import { store } from 'store';

function pagess() {
  function handlCallbackResponse(res) {
    console.log('encoded jwt id token:' + res.credential);
  }
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     clinet_id: '423405105562-vrmtaoo0seqckj7pn4btflvk82dubk55.apps.googleusercontent.com',
  //     callback: handlCallbackResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById('signInDiv')), { theme: 'outline', size: 'large' };
  // }, []);

  return (
    <div>
      {' '}
      <script src="https://apis.google.com/js/platform.js" async defer />
      <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com" />
    </div>
  );
}

export default pagess;
