import AWS from "aws-sdk";
import { DATA_API } from "react-native-dotenv";
import {
  SEND_PARTIAL_INFO_SUCCES,
  SEND_PARTIAL_INFO_ERROR,
  SEND_PARTIAL_INFO_REQUEST
} from "./types";

export const fetchData = () => dispatch => {
  dispatch({ type: SEND_PARTIAL_INFO_REQUEST });
  return fetch(DATA_API)
    .then(res => {
      res.json().then(data => {
        // dispatch({
        //   type: SEND_PARTIAL_INFO_SUCCES,
        //   payload: data
        // });
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_PREDICTIONS_ERROR, payload: err });
    });
};
