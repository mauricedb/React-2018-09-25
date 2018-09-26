export const valueReducer = (state = { value: 121 }, action = {}) => {
  console.log(action);

  switch (action.type) {
    case 'add-value':
      //   return Object.assign({}, state, { value: state.value + action.payload });
      return { ...state, value: state.value + action.payload };
    case 'subtract-value':
      //   return Object.assign({}, state, { value: state.value + action.payload });
      return { ...state, value: state.value - action.payload };
  }

  return state;
};
