import { API } from "react-native-dotenv";

export const sendWifiSignals = () => {
  return dispatch => {
    dispatch({ type: `FETCHING_PRREDICTIONS_START` });
    fetch(API + "/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstParam: "yourValue",
        secondParam: "yourOtherValue"
      })
    })
      .then(res => {
        res.json().then(data => console.log(data.analysis.guesses));
        dispatch({ type: `RECIEVE_PREDICTIONS`, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: `FETCHING_PREDICTIONS_ERROR`, payload: err });
      });
  };
};
