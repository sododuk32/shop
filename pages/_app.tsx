import './globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie';
import { store } from '../store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { GApiProvider } from 'react-gapi-auth2';

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);
  const myClientConfig = {
    client_id: '423405105562-neiiacpkiop2nodv79mf394emp5d1fsr.apps.googleusercontent.com',
    cookie_policy: 'single_host_origin',
    fetch_basic_profile: true,
    ux_mode: 'popup',
  };

  return (
    <CookiesProvider>
      <GApiProvider clientConfig={myClientConfig}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />;
          </PersistGate>
        </Provider>
      </GApiProvider>
    </CookiesProvider>
  );
}

export default MyApp;
