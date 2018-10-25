import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  fetchAudioBlindPath,
  sendWifiSignals,
  fetchPredictions,
  step
} from "../actions";
import { connect } from "react-redux";
import AudioPlayer from "react-native-play-audio";

class BlindPath extends Component {
  componentDidMount() {
    this.setState({
      locations: [
        "location_1",
        "location_2",
        "location_3",
        "location_4",
        "location_5",
        "location_6",
        "location_7",
        "location_8"
      ]
    });
    AudioPlayer.prepare(
      "https://s3-sa-east-1.amazonaws.com/posifi-app/otherInstruction.wav",
      () => {
        AudioPlayer.play();
      }
    );
    this.props.step("Primeros pasos");

    var timeoutId = setTimeout(() => this.firstInstrucction(), 9100);
    this.setState({ timeoutId });
  }

  componentWillUnmount() {
    AudioPlayer.stop();
    clearTimeout(this.state.timeoutId);
    clearTimeout(this.state.btimeoutId);
  }

  firstInstrucction = () => {
    this.props.step("First Instrucction");
    AudioPlayer.prepare(
      "https://s3-sa-east-1.amazonaws.com/posifi-app/firstInstruction.wav",
      () => {
        AudioPlayer.play();
      }
    );
    var timeoutId = setTimeout(() => this.getBestLocation(), 13000); //Poner lo que dura el audio
    this.setState({ timeoutId });
  };

  displayAudio = () => {
    this.props.step("Displaying Audio");
    var id;
    if (
      this.state.locations.findIndex(elem => elem === this.state.prediction) !==
      -1
    ) {
      this.setState({
        locations: this.state.locations.filter(
          id => id !== this.state.prediction
        )
      });
      // Logica de mostrar los audios
      // FetchData, filter y mandarle cumbia
      // var exhibition = this.fetchAudioBlindPath(this.state.prediction);
      // AudioPlayer.prepare(
      //   exhibition.audio_url,
      //   () => {
      //     AudioPlayer.play();
      //   }
      // );
      id = setTimeout(() => this.getBestLocation(), 10000); // Esperar el tiempo necesario
      this.setState({
        timeoutId: id
      });
    } else {
      id = setTimeout(() => this.getBestLocation(), 3000); // Esperar el tiempo necesario
      this.setState({
        timeoutId: id
      });
    }
  };

  getBestLocation = () => {
    this.props.step("Getting best");
    // Logica de obtener la ubicacion
    //this.props.sendWifiSignals();
    var prediction = "location_2"; // this.props.fetchPredictions();
    if (this.state.prediction !== prediction) {
      this.setState({
        prediction,
        count: 0
      });
    } else {
      this.setState({
        count: 3
      });
    }
    if (this.state.count === 3) {
      this.displayAudio();
    } else {
      var btimeoutId = setTimeout(() => this.getBestLocation(), 2000);
      this.setState({
        btimeoutId
      });
    }
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
  { fetchAudioBlindPath, sendWifiSignals, fetchPredictions, step }
)(BlindPath);
