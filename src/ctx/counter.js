import React, { useEffect, useContext } from 'react';
import { getContext } from 'smart-context';

const CTR = 1000 * 10000;
let start = 0;

const Counter = () => {
  const { state, actions } = useContext(getContext('demo'));

  const { counter, user } = state;
  const { setCounter } = actions;

  useEffect(() => {
    if (!user) {
      return;
    }

    let i = 0;
    while (i <= CTR) {
      setCounter({ counter: i });
      i++;
    }
  }, [user]);

  useEffect(() => {
    if (counter === 0) {
      start = new Date().getTime();
    }
    if (counter === CTR) {
      console.log('Time spent - ', (new Date().getTime() - start) / 1000);
    }
  }, [counter]);

  console.log('Counter Render');

  if (!user) {
    return null;
  }

  const { name } = user;

  return (
    <div className="comp-container">
      <h2>Counter</h2>
      <p>User: {`${name}`}</p>
      <p>Count: {counter}</p>
    </div>
  );
};

export default Counter;
