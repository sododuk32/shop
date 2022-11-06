import styles from './[pid].module.css';
import { useRouter } from 'next/router';
function Goods() {
  const router = useRouter();
  const productid = router.query.pid;
  //pid가지고 서버에서 data가져와서 보여주기
  //오늘할것. pid로 보여줄 페이지 만들기,로그인 페이지만들기
  return (
    <div>
      this is goods number page
      <div className={styles.divdiv2}>asfd</div>
      <div>{productid}</div>
    </div>
  );
}

export default Goods;
