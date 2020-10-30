import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numbers: function(state, action) {
    switch (action.type) {
      case 'NUM_MIN_ALTERADO':
        return {
          ...state,
          min: action.payload
        }
      default:
        return {
          min: 10,
          max: 50
        }
    }
  },
});

function storeConfig() {
  return createStore(reducers)
};

export default storeConfig;