import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
import Router from "./Router";
import { YellowBox } from "react-native";
import configureStore from "./configureStore.js";
import configureReactotron from "./ReactotronConfig"
YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated"]);

var idleState = {};
configureReactotron()
const store = configureStore(idleState);

class App extends Component {
  render() {
    // configureStore();

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
