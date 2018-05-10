export default {
  updateBase(state, payload) {
    state.base = payload;
    sessionStorage.setItem('base', JSON.stringify(payload))
  }
}
