export function addValue(value) {
  return {
    type: 'add-value',
    payload: value
  };
}

export function subtractValue(value) {
  return {
    type: 'subtract-value',
    payload: value
  };
}

export function subtractValueLater(value) {
  return function(dispatch) {
    setTimeout(() => dispatch(subtractValue(value)), 1000);
    setTimeout(() => dispatch(subtractValue(value)), 2000);
  };
}
