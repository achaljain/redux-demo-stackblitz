import React, { useState } from 'react';
import ReduxApp from './redux';
import ContextApp from './ctx';

import './style.css';

export default function App() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1>Redux vs Context</h1>
      <div>
        <button onClick={toggleHandler}>Mode</button>
        <span>{`${toggle ? 'Redux' : 'Context'}`}</span>
      </div>
      {toggle ? <ReduxApp /> : <ContextApp />}
    </div>
  );
}
