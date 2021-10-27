import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Counter from './counter';
import User from './user';

export default function Redux() {
  return (
    <Provider store={configureStore()}>
      <div>
        <h3>Redux demo</h3>
        <Counter />
        <User />
      </div>
    </Provider>
  );
}
