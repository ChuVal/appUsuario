import {
  AUDIO_PLAYING,
  AUDIO_TIME,
  AUDIO_ERROR,
  AUDIO_PAUSE,
  AUDIO_SET_TIME,
  AUDIO_CURRENT_TIME,
  AUDIO_PLAYER_VIEW_WIDTH
} from "./types";

export const audioPlaying = value => {
  return {
    type: AUDIO_PLAYING,
    payload: value
  };
};

export const audioTime = time => {
  return {
    type: AUDIO_TIME,
    payload: time
  };
};

export const audioError = err => {
  return {
    type: AUDIO_ERROR,
    payload: err
  };
};

export const audioPaused = value => {
  return {
    type: AUDIO_PAUSE,
    payload: value
  };
};

export const audioSetTime = setTime => {
  return {
    type: AUDIO_SET_TIME,
    payload: setTime
  };
};

export const audioCurrentTime = value => {
  return {
    type: AUDIO_CURRENT_TIME,
    payload: value
  };
};

export const audioPlayerViewWidth = value => {
  return {
    type: AUDIO_PLAYER_VIEW_WIDTH,
    payload: value
  };
};
