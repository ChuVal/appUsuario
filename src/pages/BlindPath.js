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
  componentWillMount() {
    this.setState({
      actualPrediction: "",
      count: 0
    });
  }
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
    var timeoutId = setTimeout(() => this.firstInstrucction(), 100);
    this.setState({ timeoutId });
  }

  componentWillUnmount() {
    AudioPlayer.stop();
    clearTimeout(this.state.timeoutId);
    clearTimeout(this.state.btimeoutId);
    clearTimeout(this.state.playtimeoutId);
  }

  firstInstrucction = () => {
    AudioPlayer.prepare(
      "https://s3-sa-east-1.amazonaws.com/posifi-app/primera.mp3",
      () => {
        AudioPlayer.play();
      }
    );
    this.setState({
      audioName: "Bienvenida"
    });
    var timeoutId = setTimeout(() => this.getBestLocation(), 72000); //Poner lo que dura el audio
    this.setState({ timeoutId });
  };

  playAudio = () => {
    if (
      this.props.data[0].audio_url === undefined ||
      this.props.data[0].audio_url === null ||
      this.props.data[0] === undefined
    ) {
      AudioPlayer.prepare(
        "https://s3-sa-east-1.amazonaws.com/posifi-app/placeholder.wav",
        () => {
          AudioPlayer.play();
        }
      );
    } else {
      AudioPlayer.prepare(this.props.data[0].audio_url, () => {
        AudioPlayer.play();
      });
      this.setState({
        audioName: this.props.data[0].location_name
      });
    }
  };

  displayAudio = async () => {
    var id;
    if (
      this.state.locations.findIndex(
        elem => elem === this.state.actualPrediction
      ) !== -1
    ) {
      this.setState({
        locations: this.state.locations.filter(
          id => id !== this.state.actualPrediction
        )
      });
      this.props.fetchAudioBlindPath(this.state.actualPrediction);

      id = setTimeout(() => this.playAudio(), 3000); // Esperar el tiempo necesario
      this.setState({
        playtimeoutId: id
      });
      id = setTimeout(() => this.getBestLocation(), 120000);
      this.setState({
        timeoutId: id
      });
    } else {
      id = setTimeout(() => this.getBestLocation(), 3000);
      this.setState({
        timeoutId: id
      });
    }
  };

  getBestLocation = () => {
    this.props.sendWifiSignals();
    this.props.fetchPredictions();
    if (this.state.actualPrediction !== this.props.bestPrediction) {
      this.setState({
        actualPrediction: this.props.bestPrediction,
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }
    if (this.state.count === 5) {
      this.displayAudio();
    } else {
      var btimeoutId = setTimeout(() => this.getBestLocation(), 500);
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
          {"Usted esta escuchando audio de " + this.state.audioName}
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

var mapStateToProps = state => ({
  data: state.data.info,
  bestPrediction: state.predictions.bestPrediction
});

export default connect(
  mapStateToProps,
  { fetchAudioBlindPath, sendWifiSignals, fetchPredictions, step }
)(BlindPath);
