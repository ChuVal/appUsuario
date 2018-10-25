import { SEND_PARTIAL_INFO_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  info: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_PARTIAL_INFO_SUCCESS:
      return { ...state, info: action.payload };
    default:
      return state;
  }
};
