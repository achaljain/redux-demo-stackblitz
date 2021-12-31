export default (state, action) => {
  switch (action.type) {
    case 'counter':
      return { ...state, counter: action.payload };
    case 'user':
      return { ...state, user: action.payload, counter: 0 };
    default:
      return state;
  }
};

export const counterAction = (payload) => {
  return {
    type: 'counter',
    payload,
  };
};

// Possible failure in action payload type and value
// TS can catch that, might miss also
export const userAction = (payload) => {
  return {
    type: 'user',
    payload,
  };
};
