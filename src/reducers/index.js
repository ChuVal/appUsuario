import { combineReducers } from "redux";
import fetchToursReducer from "./fetchToursReducer";
import audioPlayingReducer from "./audioPlayingReducer";
import fetchProgramReducer from "./fetchProgramReducer";
import app from "./app";
import fetchPredictionsReducer from "./fetchPredictionsReducer";
import sendWifiSignalReducer from "./sendWifiSignalReducer";

export default combineReducers({
  data: fetchToursReducer,
  audio: audioPlayingReducer,
  programs: fetchProgramReducer,
  app: app,
  predictions: fetchPredictionsReducer,
  wifi: sendWifiSignalReducer
});
