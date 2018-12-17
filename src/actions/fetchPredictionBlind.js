import { API } from "react-native-dotenv";
import {
  FETCH_PREDICTIONS_START,
  FETCH_PREDICTIONS_ERROR,
  FETCH_PREDICTIONS_SUCCESS
} from "./types";
import { AsyncStorage } from "react-native";
import cuid from "cuid";

export const fetchPredictionsBlind = () => {
  return async dispatch => {
    dispatch({ type: FETCH_PREDICTIONS_START });
    const device = await AsyncStorage.getItem("id");
    if (value === null) {
      device = cuid();
      await AsyncStorage.setItem("id", device);
    } else {
      return fetch(API + `/api/v1/location/posifi/${device}`)
        .then(res => {
          return res.json().then(data => {
            dispatch({
              type: FETCH_PREDICTIONS_SUCCESS,
              payload: data.analysis.guesses[0].location
            });
          });
        })
        .catch(err => {
          dispatch({ type: FETCH_PREDICTIONS_ERROR, payload: err });
        });
    }
  };
};
