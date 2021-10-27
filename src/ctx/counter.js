import React, { useContext } from 'react';
import { getContext } from 'smart-context';

const Counter = () => {
  const { state, actions } = useContext(getContext('demo'));

  const { counter, user } = state;
  const { setCounter } = actions;

  console.log('Counter Render');

  return (
    <div className="comp-container">
      <h2>Counter Component</h2>
      <p>Count: {counter}</p>
      <p>User age {user ? user.age : ''} </p>
      <button onClick={() => setCounter({ counter: counter + 1 })}>
        Increment
      </button>
      <button onClick={() => setCounter({ counter: counter - 1 })}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
