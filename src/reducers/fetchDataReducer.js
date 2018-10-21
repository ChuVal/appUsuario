const INITIAL_STATE = {
  fetching: false,
  fetched: false,
  error: null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEND_DATA":
      return { ...state, info: action.payload };
    default:
      return state;
  }
};
