/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from 'components/commons/Headers/Header';
import SetLanguage from 'components/commons/Headers/SetLanguage';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getOderinfo } from 'lib/fetches/ApiCall';
import { useSelector } from 'react-redux';
import { userStat } from 'lib/redux/reducers/isLoginSlice';
import { oidDay, orderProduct, productInfo } from 'lib/redux/interface';
import ShowOrder from 'components/userpage/ShowOrder';
const Orderbody = styled.body`
  .bodyContainer {
    margin-top: 5.8vw;
  }
  .header {
    position: relative;
  }

  .bodyContainer {
    margin-top: 5.8vw;
  }
  .pannelContainer {
    width: 60%;
    display: flex;
    flex-direction: row;
    margin: 0% auto;
  }
  .pannelContainer > section {
    width: 100%;
  }
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function orders() {
  const stat = useSelector(userStat);
  const uid = stat.uid;
  const [order, setorder] = useState<orderProduct[][]>([[]]);
  const [oidy, setoidy] = useState<oidDay[]>([]);

  useEffect(() => {
    startFetching(uid);
  }, []);

  function startFetching(uid: string) {
    let myorder: orderProduct[] = [{ amount: '', daytoEnd: '', oid: '', orderCondition: '', orderSday: '', price: 0, productId: '', uid: '' }];
    try {
      getOderinfo(uid).then((res) => {
        myorder = res.data.yourData;
        let sortedOrder: orderProduct[][] = [];
        let oidArray: oidDay[] = [];
        let temp2 = myorder[0].oid;
        let present = 0; //시작지점
        let start = 0; //자르는 기준
        let price = 0;
        myorder.map((props: orderProduct) => {
          price += Number(props.amount) * Number(props.price);
          if (temp2 === props.oid) {
            if (myorder.length === myorder.indexOf(props) + 1) {
              sortedOrder.push(myorder.slice(present, myorder.indexOf(props) + 1));
              oidArray.push({
                oid: props.oid,
                daytoEnd: props.daytoEnd,
                orderSday: props.orderSday,
                orderCondition: props.orderCondition,
                totalPrice: Number(props.amount) * Number(props.price),
              });
              price = 0;
            }
          }
          if (temp2 != props.oid) {
            temp2 = props?.oid;
            present = myorder.indexOf(props);
            sortedOrder.push(myorder.slice(start, present));
            start = present;
            oidArray.push({
              oid: props.oid,
              daytoEnd: props.daytoEnd,
              orderSday: props.orderSday,
              orderCondition: props.orderCondition,
              totalPrice: price,
            });
            price = 0;
          }
        });

        setorder(sortedOrder);
        setoidy(oidArray);
        //api 콜백 끝
      });
    } catch (error) {
      return alert(error);
    }
  }
  return (
    <div>
      <header id="pageHeader">
        <SetLanguage />
        <Header />
      </header>
      <Orderbody>
        <section className="bodyContainer">
          <div className="pannelContainer">
            {order[0].length != 0 && order[0] != undefined && oidy.length != 0 && oidy[0] != undefined ? ShowOrder(order, oidy) : null}
          </div>
        </section>
      </Orderbody>
    </div>
  );
}

export default orders;

// -> 상품이 1개 이상일 경우 첫번째 상품.... 그외 1로 보여주고

// -> 클릭 시 숨겨진 창에서 모든 상품 표기.

// 알림창 이쁜거 하나 찾아서 띄울수 있게 하기.
