const initialState = {
  counter: 0,
  user: null,
};

const actionsConfig = {
  setCounter: ['counter'],
  setUser: ['user', 'counter'],
};

const displayName = 'demo';

export default {
  initialState,
  actionsConfig,
  displayName,
};
