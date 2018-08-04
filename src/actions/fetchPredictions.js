import { API } from "react-native-dotenv";

export const fetchPredictions = () => {
  return dispatch => {
    dispatch({ type: `FETCHING_PRREDICTIONS_START` });
    fetch( API + "/api/v1/location/posifi/nuevo")
      .then(res => {
        res.json().then(data => console.log(data.analysis.guesses, API));
        dispatch({ type: `RECIEVE_PREDICTIONS`, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: `FETCHING_PREDICTIONS_ERROR`, payload: err });
      });
  };
};
