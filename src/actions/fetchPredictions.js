import axios from "axios";

export const fetchPredictions = () => {
  return dispatch => {
    dispatch({ type: `FETCHING_PRREDICTIONS_START` });
    axios
      .get("https://cloud.internalpositioning.com/api/v1/location/posifi/nuevo")
      .then(res => {
        // console.log(res.analysis.guesses);
        dispatch({ type: `RECIEVE_PREDICTIONS`, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_PROGRAMS_ERROR, payload: err });
      });
  };
};
