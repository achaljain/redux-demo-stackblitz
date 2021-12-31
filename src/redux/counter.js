import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from './reducers';

const CTR = 1000 * 10000;
let start = 0;

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      return;
    }

    let i = 0;
    start = Date.now();
    while (i <= CTR) {
      dispatch(counterAction(i));
      i++;
    }
  }, [user]);

  useEffect(() => {
    if (count === 0) {
      start = new Date().getTime();
    }
    if (count === CTR) {
      console.log('Time spent - ', (new Date().getTime() - start) / 1000);
    }
  }, [count]);

  console.log('Counter Render');

  if (!user) {
    return null;
  }

  const { name } = user;

  return (
    <div className="comp-container">
      <h2>Counter</h2>
      <p>User: {`${name}`}</p>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
