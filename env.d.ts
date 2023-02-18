declare namespace NodeJs {
  interface ProcessEnv {
    REACT_APP_GOOGLE_ID?: string;
    REACT_APP_GOOGLE_SECRET?: string;
    REACT_APP_GOOGLE_TEST?: 'TEST1' | 'TEST2';
    REACT_APP_MY_VARIABLE?: string;
  }
}
