import React, { useContext } from 'react';
import { getContext } from 'smart-context';

const User = () => {
  const { state, actions } = useContext(getContext('demo'));

  const { user } = state;
  const { setUser } = actions;

  const nameRef = React.useRef();

  const addUser = () => {
    setUser({
      user: {
        name: nameRef.current.value,
      },
      counter: 0,
    });
  };

  console.log('User Render');

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

export default User;
