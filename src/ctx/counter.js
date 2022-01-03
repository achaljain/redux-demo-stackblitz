import React from 'react';

const Counter = ({ name, counter }) => {
  return (
    <div className="comp-container">
      <h2>Counter</h2>
      <p>User: {`${name}`}</p>
      <p>Count: {counter}</p>
    </div>
  );
};

export default React.memo(Counter);
