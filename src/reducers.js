export default (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    case 'user':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const incrementAction = () => {
  return {
    type: 'increment',
  };
};

export const decrementAction = () => {
  return {
    type: 'decrement',
  };
};

// Possible failure in action payload type and value
// TS can catch that, might miss also
export const userAction = (name) => {
  return {
    type: 'user',
    payload: { name, age: 30 },
  };
};
