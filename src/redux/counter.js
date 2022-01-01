import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from './reducers';

const CTR = 1000 * 1000;

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      return;
    }

    let i = 0;
    while (i <= CTR) {
      dispatch(counterAction(i));
      i++;
    }
  }, [user]);

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
