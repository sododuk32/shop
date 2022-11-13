import { useRouter } from 'next/router';

function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
}

export default Post;
