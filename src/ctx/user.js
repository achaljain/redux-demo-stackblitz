import React from 'react';
import { WithContextConsumer } from 'smart-context';

const User = ({ demo }) => {
  const { state, actions } = demo;

  const { user } = state;
  const { setUser } = actions;

  const inputRef = React.useRef();

  const buttonClick = () => {
    setUser({
      user: {
        name: inputRef.current.value,
        age: 30,
      },
    });
  };

  console.log('User Render');

  return (
    <div className="comp-container">
      <h2>User Component</h2>

      <label htmlFor="user-input">Enter a name: </label>
      <input id="user-input" ref={inputRef} />
      <button onClick={buttonClick}>Dispatch action</button>
      {user && <h3>{`User details ${user.name} (${user.age})`}</h3>}
    </div>
  );
};

export default WithContextConsumer(User, ['demo']);
