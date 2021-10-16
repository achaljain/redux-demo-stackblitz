import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Counter from './counter';
import User from './user';

import './style.css';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <div>
        <h1>Redux demo</h1>
        <Counter />
        <User />
      </div>
    </Provider>
  );
}
