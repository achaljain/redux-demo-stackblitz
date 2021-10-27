import React, { useState } from 'react';
import ReduxApp from './redux';
import ContextApp from './ctx';

import './style.css';

export default function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>Redux vs Context</h1>
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle Mode</button>{' '}
        <span>{toggle ? 'Redux' : 'Context'}</span>
      </div>
      {toggle ? <ReduxApp /> : <ContextApp />}
    </div>
  );
}
