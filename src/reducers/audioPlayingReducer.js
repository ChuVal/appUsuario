import {AUDIO_PLAYING, AUDIO_ERROR} from '../actions/types';

const INITIAL_STATE = {
    totalTime: 0,
    isPlaying: false,
    error: null
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case AUDIO_PLAYING: 
            return {...state, isPlaying: action.payload }
        case AUDIO_ERROR: 
            return {...state, error: action.payload }
        default:
            return state; 
    }
}