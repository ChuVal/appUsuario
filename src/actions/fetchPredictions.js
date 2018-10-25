import { API } from "react-native-dotenv";
import {
  FETCH_PREDICTIONS_START,
  FETCH_PREDICTIONS_ERROR,
  FETCH_PREDICTIONS_SUCCESS
} from "./types";
export const fetchPredictions = () => {
  return dispatch => {
    dispatch({ type: FETCH_PREDICTIONS_START });
    return fetch(API + "/api/v1/location/posifi/moto")
      .then(res => {
        return res.json().then(data => {
          dispatch({
            type: FETCH_PREDICTIONS_SUCCESS,
            payload: selectBest(data.analysis.guesses)
          });
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_PREDICTIONS_ERROR, payload: err });
      });
  };
};

var selectBest = data => {
  return data[0].probability > 0.3 ? mapLocToTag[data[0].location] : null;
};

var mapLocToTag = {
  uno: "location_1",
  dos: "location_2",
  tres: "location_3",
  cuatro: "location_4",
  cinco: "location_5",
  seis: "location_6",
  siete: "location_7",
  ocho: "location_8",
  nueve: "location_9",
  diez: "location_10",
  once: "location_11",
  doce: "location_12",
  tresce: "location_13",
  catorce: "location_14",
  quince: "location_15"
};
