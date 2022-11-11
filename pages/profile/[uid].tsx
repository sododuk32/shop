import { useRouter } from 'next/router';
import React from 'react';

function Profile() {
  const router = useRouter();
  const productid = router.query.pid;
  console.log(productid);
  return <div>{productid}</div>;
}

export default Profile;
