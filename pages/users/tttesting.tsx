/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

function asdfsadf() {
  const [values, setValues] = useState(0);

  useEffect(() => {
    console.log(values);
  }, []);
  let value1 = 1;
  const value2 = 1234;
  if (value2 > value1) {
    value1 += 1;
  }
  function asdf(props: number) {
    if (values > 2) {
      return null;
    }
    console.log(props + 1);
    setValues(props + 1);
    return props + 1;
  }
  asdf(value1);
  return <div>{value1}</div>;
}

export default asdfsadf;
