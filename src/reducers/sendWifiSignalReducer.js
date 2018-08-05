import {
  SEND_WIFI_ERROR,
  SEND_WIFI_SUCCESS,
  SEND_WIFI_START
} from "../actions/types";

const INITIAL_STATE = {
  sending: false,
  sent: false,
  error: null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_WIFI_START:
      return { ...state, sending: true };
    case SEND_WIFI_ERROR:
      return { ...state, sending: false, error: action.payload };
    case SEND_WIFI_SUCCESS:
      return {
        ...state,
        sending: false,
        sent: true
      };
    default:
      return state;
  }
};
