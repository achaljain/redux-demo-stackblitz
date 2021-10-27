import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  counter: 0,
  user: null,
};

export default function configureStore(state = initialState) {
  return createStore(rootReducer, state);
}
