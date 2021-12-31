import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from './reducers';

const User = () => {
  const user = useSelector((state) => state.user);

  const nameRef = React.useRef();

  const dispatch = useDispatch();

  const addUser = () => {
    dispatch(userAction({ name: nameRef.current.value }));
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
