import {
  FETCH_PREDICTIONS_ERROR,
  FETCH_PREDICTIONS_START,
  FETCH_PREDICTIONS_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  fetching: false,
  fetched: false,
  predictions: [],
  error: null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PREDICTIONS_START:
      return { ...state, fetching: true };
    case FETCH_PREDICTIONS_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case FETCH_PREDICTIONS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        predictions: action.payload
      };
    default:
      return state;
  }
};
