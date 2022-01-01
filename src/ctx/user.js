import React from 'react';
import { WithContextConsumer } from 'smart-context';

const User = ({ demo }) => {
  const nameRef = React.useRef();

  const { state, actions } = demo;

  const { user } = state;
  const { setUser } = actions;

  const addUser = () => {
    setUser({
      user: {
        name: nameRef.current.value,
      },
      counter: 0,
    });
  };

  return (
    <div className="comp-container">
      <h2>User Details</h2>
      <label htmlFor="user-input">Enter name: </label>
      <input id="user-input" ref={nameRef} />

      <button onClick={addUser}>Start counter</button>
      {user && <span>Success!</span>}
    </div>
  );
};

export default WithContextConsumer(User, ['demo']);
