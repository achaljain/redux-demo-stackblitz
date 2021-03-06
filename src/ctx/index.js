import React, { Profiler } from 'react';
import { WithContextProvider } from 'smart-context';

import Counter from './counter';
import User from './user';
import callback from '../callback';

import config from './config';

function ContextApp() {
  return (
    <Profiler id="ctx-app" onRender={callback}>
      <div>
        <User />
        <Counter />
      </div>
    </Profiler>
  );
}

export default WithContextProvider(ContextApp, [config]);
