import { DATA_API } from "react-native-dotenv";
import {
  SEND_PARTIAL_INFO_SUCCES,
  SEND_PARTIAL_INFO_ERROR,
  SEND_PARTIAL_INFO_REQUEST
} from "./types";

export const fetchAudioBlindPath = id => dispatch => {
  dispatch({ type: SEND_PARTIAL_INFO_REQUEST });
  return fetch(DATA_API + `posifi_id/${id}`)
    .then(res => {
      return res.json().then(data => {
        dispatch({
          type: SEND_PARTIAL_INFO_SUCCES
        });
        return data.filter(d => d.is_blind_path === true);
      });
    })
    .catch(err => {
      dispatch({ type: SEND_PARTIAL_INFO_ERROR, payload: err });
    });
};
