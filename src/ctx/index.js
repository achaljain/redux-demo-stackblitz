import React, { Profiler } from 'react';
import { WithContextProvider } from 'smart-context';
import callback from '../callback';
import Main from './Main';
import config from './config';

function ContextApp() {
  return (
    <Profiler id="ctx-app" onRender={callback}>
      <div>
        <Main />
      </div>
    </Profiler>
  );
}

export default WithContextProvider(ContextApp, [config]);
