/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productInfo } from 'lib/redux/interface';
import { changeCart } from 'lib/redux/reducers/getUserSlice';
import { store } from 'store';
import Link from 'next/link';
import qs from 'qs';
import { signIn, signOut, useSession } from 'next-auth/react';

function pagess() {
  const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
  const queryStr = qs.stringify({
    client_id: process.env.REACT_APP_GOOGLE_ID,
    redirect_uri: 'localhost:3000/pagess',
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/contacts.readonly',
  });
  const { data, status } = useSession();

  const loginUrl = AUTHORIZE_URI + '?' + queryStr;
  // let access_token: unknown;
  // if (typeof window !== undefined) {
  //   access_token = window.location.hash && qs.parse(window.location.hash.substr(1));
  // }
  if (loginUrl.length > 10) {
    console.log(loginUrl);
  }
  console.log(data);
  return (
    <div>
      <main className="main">
        <p>status: {status}</p>
        <p>{data?.user?.name}</p>
        {data?.user ? (
          <button type="button" onClick={() => signOut()}>
            Google Logout
          </button>
        ) : (
          <button type="button" onClick={() => signIn('google')}>
            Google Login
          </button>
        )}
      </main>
      <Link href={loginUrl}>
        <button>이동</button>
      </Link>
      {/* <script src="https://apis.google.com/js/platform.js" async defer />
      <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com" /> */}
    </div>
  );
}

export default pagess;
