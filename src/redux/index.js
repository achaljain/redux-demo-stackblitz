import React, { Profiler } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Counter from './counter';
import User from './user';
import callback from '../callback';

export default function Redux() {
  return (
    <Profiler id="redux-app" onRender={callback}>
      <Provider store={configureStore()}>
        <div>
          <User />
          <Counter />
        </div>
      </Provider>
    </Profiler>
  );
}
