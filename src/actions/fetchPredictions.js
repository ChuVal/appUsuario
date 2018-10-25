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
        return res.json().then(data => {
          dispatch({
            type: FETCH_PREDICTIONS_SUCCESS
          });
          return selectBest(data.analysis.guesses);
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_PREDICTIONS_ERROR, payload: err });
      });
  };
};

var selectBest = data => {
  return data[0].probability > 0.5 ? mapLocToTag[data[0].location] : null;
};

var mapLocToTag = {
  Uno: "location_1",
  Dos: "location_2",
  Tres: "location_3",
  Cuatro: "location_4",
  Cinco: "location_5",
  Seis: "location_6",
  Siete: "location_7",
  Ocho: "location_8",
  Nueve: "location_9",
  Diez: "location_10",
  Once: "location_11",
  Doce: "location_12",
  Tresce: "location_13",
  Catorce: "location_14",
  Quince: "location_15"
};
