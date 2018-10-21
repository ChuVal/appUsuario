import { API } from "react-native-dotenv";
import {
  FETCH_PREDICTIONS_START,
  FETCH_PREDICTIONS_ERROR,
  FETCH_PREDICTIONS_SUCCESS
} from "./types";
export const fetchPredictions = () => {
  return dispatch => {
    dispatch({ type: FETCH_PREDICTIONS_START });
    return fetch(API + "/api/v1/location/posifi/nuevo")
      .then(res => {
        res.json().then(data => {
          dispatch({
            type: FETCH_PREDICTIONS_SUCCESS,
            payload: data.analysis.guesses
          });
          return buildPredictions(data.analysis.guesses);
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_PREDICTIONS_ERROR, payload: err });
      });
  };
};

var buildPredictions = data => {
  return data;
};
