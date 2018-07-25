import Reactotron from "reactotron-react-native";
import { applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";

export default function configureStore(initialState) {
  return Reactotron.createStore(
    reducers,
    initialState,
    applyMiddleware(ReduxThunk, logger)
  );
}
