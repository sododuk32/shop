import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const myid: string = process.env.REACT_APP_GOOGLE_ID || '';
const mysecret: string = process.env.REACT_APP_GOOGLE_SECRET || '';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: myid,
      clientSecret: mysecret,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
