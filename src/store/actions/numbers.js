// Action Creator
export function changeMinNumber(newNumber) {
  return {
    type: 'NUM_MIN_ALTERADO',
    payload: newNumber
  }
};

export function changeMaxNumber(newNumber) {
  return {
    type: 'NUM_MAX_ALTERADO',
    payload: newNumber
  }
}