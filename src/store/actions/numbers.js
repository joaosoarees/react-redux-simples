// Action Creator
export function changeMinNumber(newNumber) {
  return {
    type: 'NUM_MIN_ALTERADO',
    payload: newNumber
  }
};