import './globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie';
import { store } from '../store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);

  return (
    <CookiesProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />;
          </SessionProvider>
        </PersistGate>
      </Provider>
    </CookiesProvider>
  );
}

export default MyApp;
