import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAction, decrementAction } from './reducers';

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const userAge = useSelector((state) => state.user?.age);
  // const userAge = user?.age;

  const dispatch = useDispatch();

  console.log('Counter Render');

  return (
    <div className="comp-container">
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <p>User age {userAge} </p>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
    </div>
  );
};

export default Counter;
