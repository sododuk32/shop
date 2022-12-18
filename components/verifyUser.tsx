/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';

function verifyUser() {
  const [cookies, setCookie, removeCookie] = useCookies<string>(['jwt']);

  interface loginInfo {
    checkLogin: boolean;
    usersIdentity: string;
    yourId: string;
  }

  let userInfo: loginInfo;
  function authId() {
    return axios.get('http://localhost:8080/verify', {
      headers: {
        'Content-Type': `application/json`,
        withCredentials: true,
        Authorization: cookies.jwt,
      },
    });
  }
  const { isLoading, isError, data, error, isSuccess } = useQuery({ queryKey: ['myUid'], queryFn: authId, retry: 1 });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    userInfo = {
      checkLogin: false,
      usersIdentity: '0',
      yourId: '',
    };
    return null;
  }
  if (data) {
    userInfo = {
      checkLogin: data.data.message,
      usersIdentity: data.data.userid,
      yourId: data.data.yourId,
    };
  }
  return null;
}

export default verifyUser;
