import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from './reducers';

const User = () => {
  const user = useSelector((state) => state.user);

  const inputRef = React.useRef();

  const dispatch = useDispatch();

  console.log('User Render');

  return (
    <div className="comp-container">
      <h2>User Component</h2>

      <label htmlFor="user-input">Enter a name: </label>
      <input id="user-input" ref={inputRef} />
      <button onClick={() => dispatch(userAction(inputRef.current.value))}>
        Dispatch action
      </button>
      {user && <h3>{`User details - ${user.name} (${user.age})`}</h3>}
    </div>
  );
};

export default User;
