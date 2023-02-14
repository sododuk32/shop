/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from 'components/commons/Headers/Header';
import SetLanguage from 'components/commons/Headers/SetLanguage';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { getOderinfo } from 'lib/fetches/ApiCall';
import { useSelector } from 'react-redux';
import { userStat } from 'lib/redux/reducers/isLoginSlice';
import { oidDay, orderProduct, productInfo } from 'lib/redux/interface';
import ShowOrder from 'components/userpage/ShowOrder';
import generator from 'components/commons/generator';
import { Button } from 'react-bootstrap';

const Orderbody = styled.body`
  .bodyContainer {
    margin-top: 5.8vw;
  }
  .header {
    position: relative;
  }

  .bodyContainer {
    margin-top: 5.8vw;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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
const ListBody = styled.section`
  .OrderInformation {
    border: 1px solid gray;
  }
  .oids {
    display: flex;
    height: 6vw;
    justify-content: space-between;
  }
  .oid {
    font-weight: bold;
    font-size: 0.7vw;
  }
  .orderSummery {
    display: flex;
    flex-direction: column;
    padding-right: 1vw;
    font-size: 0.8vw;
  }
  .orderImage {
    width: 6vw;
    height: 6vw;
    position: relative;
  }
  .productList {
    list-style: none;
    border: 1px solid red;
    -webkit-transition: all 1s ease-in-out;
    height: fit-contents;
    margin-top: 0.5vw;
  }
  .products {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .showBtn {
    margin: 0% auto;
    overflow: hidden!;
    display: block;
  }
  .producsTap {
    display: flex;
    justify-content: space-between;
  }
  .summry2 {
    margin-right: 10vw;
  }
`;
type setStateFunction = (a: React.MouseEvent<HTMLElement>) => void;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function orders() {
  const stat = useSelector(userStat);
  const uid: string = stat.uid;
  const [order, setorder] = useState<orderProduct[][]>([[]]);
  const [oidy, setoidy] = useState<oidDay[]>([
    {
      oid: 'nodata',
      orderCondition: '',
      daytoEnd: '',
      orderSday: '',
      totalPrice: 0,
    },
  ]);

  const [btnKey, setBtnKey] = useState('');
  const myInput = { orderList: order, dayNumber: oidy, btnKey: btnKey, eventFunction: showing };
  useEffect(() => {
    memoizedValue(uid);
  }, []);
  console.log(order);

  const memoizedValue = useMemo(
    () => (uid: string) => {
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
              if (myorder.length === myorder.indexOf(props)) {
                sortedOrder.push(myorder.slice(present, myorder.indexOf(props)));
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
            console.log('계산!');
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
          return { sortedOrder, oidArray };
        });
      } catch (error) {
        return alert(error);
      }
    },
    [order, oidy],
  );

  function showing(e: React.MouseEvent<HTMLElement>) {
    console.log(e.currentTarget.id);
    return setBtnKey(e.currentTarget.id);
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
            {order[0].length != 0 && oidy[0].oid != 'nodata' && order[0] != undefined && oidy.length > 0 && oidy[0] != undefined ? (
              <ShowOrder {...myInput} />
            ) : null}
          </div>
        </section>
      </Orderbody>
    </div>
  );
}
export default orders;
