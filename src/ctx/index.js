import React from 'react';
import { WithContextProvider } from 'smart-context';
import config from './config';
import Counter from './counter';
import User from './user';

function ContextApp() {
  return (
    <div>
      <h3>Context demo</h3>
      <Counter />
      <User />
    </div>
  );
}

export default WithContextProvider(ContextApp, [config]);
