import React, { Component } from "react";
import { Provider } from "react-redux";
import Router from "./Router";
import { YellowBox } from "react-native";
import configureStore from "./configureStore.js";
import configureReactotron from "./ReactotronConfig";
import { PermissionsAndroid } from "react-native";
import clone from "lodash/clone.js";

YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated"]);

YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

var idleState = {};
configureReactotron();
const store = configureStore(idleState);

class App extends Component {
  async askForUserPermissions() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Wifi networks",
          message: "We need your permission in order to find wifi networks"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Thank you for your permission! :)");
      } else {
        console.log(
          "You will not able to retrieve wifi available networks list"
        );
      }
    } catch (err) {
      console.warn(err);
    }
  }
  componentDidMount() {
    this.askForUserPermissions();
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
