import React from 'react';

const UserForm = ({ name, updateHandler }) => {
  const nameRef = React.useRef();

  const addUser = () => {
    updateHandler(nameRef.current.value);
  };

  return (
    <div className="comp-container">
      <h2>User Details</h2>
      <label htmlFor="user-input">Enter name: </label>
      <input id="user-input" ref={nameRef} />

      <button onClick={addUser}>Start counter</button>
      {name && <span>Success!</span>}
    </div>
  );
};

export default React.memo(UserForm);
