import { combineReducers } from "redux";
import audioPlayingReducer from "./audioPlayingReducer";
import fetchProgramReducer from "./fetchProgramReducer";
import app from "./app";
import fetchPredictionsReducer from "./fetchPredictionsReducer";
import sendWifiSignalReducer from "./sendWifiSignalReducer";
import fetchDatareducer from "./fetchDataReducer";

export default combineReducers({
  audio: audioPlayingReducer,
  programs: fetchProgramReducer,
  app: app,
  predictions: fetchPredictionsReducer,
  wifi: sendWifiSignalReducer,
  data: fetchDatareducer
});
