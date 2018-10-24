import { DATA_API } from "react-native-dotenv";
import {
  SEND_PARTIAL_INFO_SUCCES,
  SEND_PARTIAL_INFO_ERROR,
  SEND_PARTIAL_INFO_REQUEST
} from "./types";

export const fetchData = id => dispatch => {
  dispatch({ type: SEND_PARTIAL_INFO_REQUEST });
  return fetch(DATA_API + `posifi_id/${id}`)
    .then(res => {
      res.json().then(data => {
        dispatch({
          type: SEND_PARTIAL_INFO_SUCCES,
          payload: data
        });
      });
    })
    .catch(err => {
      dispatch({ type: SEND_PARTIAL_INFO_ERROR, payload: err });
    });
};
