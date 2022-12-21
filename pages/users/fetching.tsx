import axios from 'axios';
import { useCookies } from 'react-cookie';

export async function updater() {
  const [cookies] = useCookies<string>(['jwt']);

  console.log('updater실행');
  return axios.get('http://localhost:8080/verify', {
    headers: {
      'Content-Type': `application/json`,
      withCredentials: true,
      Authorization: cookies.get('jwt'),
    },
  });
}
