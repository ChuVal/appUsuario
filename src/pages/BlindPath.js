import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { fetchData, sendWifiSignals, fetchPredictions, step } from "../actions";
import { connect } from "react-redux";
import AudioPlayer from "react-native-play-audio";

class BlindPath extends Component {
  componentDidMount() {
    this.setState({
      locations: [1, 2, 3, 4, 5, 6, 7, 8]
    });
    AudioPlayer.prepare(
      "https://s3-sa-east-1.amazonaws.com/posifi-app/firstInstruction.wav",
      () => {
        AudioPlayer.play();
      }
    );
    this.props.step("ACA");

    setTimeout(() => this.blindTravel(), 4000);
  }

  componentWillUnmount() {
    AudioPlayer.stop();
    clearTimeout(this.state.timeoutId);
  }

  blindTravel = () => {
    this.props.step("ACA TRAVEL");
    AudioPlayer.prepare(
      "https://s3-sa-east-1.amazonaws.com/posifi-app/otherInstruction.wav",
      () => {
        AudioPlayer.play();
      }
    );
    var location = this.getBestLocation(0, "");

    if (this.location.findIndex(location.id) !== -1) {
      this.setState({
        locations: this.state.locations.filter(id => id !== location.id)
      });
      // Logica de mostrar los audios
    }
    var id = setTimeout(() => this.blindTravel(), 10000);
    this.setState({
      timeoutId: id
    });
  };

  getBestLocation = (count, pred) => {
    // Logica de obtener la ubicacion
    this.props.sendWifiSignals();
    var prediction = this.props.fetchPredictions();
    if (pred !== prediction) {
      count = 0;
    }
    return count === 3 ? pred : this.getBestLocation(count++, prediction);
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
          {"Bienvenido al recorrido a ciegas!"}
        </Text>
        <Text style={styles.text2Style}>
          {"Esta escuchando audio de iniciacion"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    display: "flex"
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: "50%"
  },
  text2Style: {
    fontSize: 18,
    textAlign: "center"
  }
});

var mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { fetchData, sendWifiSignals, fetchPredictions, step }
)(BlindPath);
