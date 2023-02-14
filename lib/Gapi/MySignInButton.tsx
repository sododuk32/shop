import React from 'react';
import { SignInButton } from 'react-gapi-auth2';
import styled from 'styled-components';
// The same options object in the signature of `gapi.signin2.render`
// https://developers.google.com/identity/sign-in/web/reference#gapisignin2renderid_options
const Btn = styled.div`
  width: 20vw;
  height: 20vw;
`;
function MySignInButton() {
  const options = {
    width: 200,
    height: 50,
    theme: 'light',
    onsuccess: () => console.log('Successfully logged in'),
    onfailure: () => console.error('Error logging in'),
  };
  return (
    <Btn>
      <SignInButton options={options} />
    </Btn>
  );
}

export default MySignInButton;
