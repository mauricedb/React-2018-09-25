function createAddValue(value) {
  const addValueAction = {
    type: 'add-value',
    payload: value
  };

  return addValueAction;
}

const listeners = [];

const stores = [
  {
    listen(action) {
    //   console.log(action);

      switch (action.type) {
        case 'add-value':
          this.state.value += action.payload;
          break;
      }

      listeners.forEach(l => l(this.state));

    //   console.log(this.state);
    },
    state: {
      value: 0
    }
  }
];

function dispatch(action) {
  stores.forEach(s => s.listen(action));
}

listeners.push(console.log)

// In component
dispatch(createAddValue(1));

listeners.push(console.warn)

dispatch(createAddValue(5));
