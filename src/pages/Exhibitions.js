import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchData,
  fetchTourData,
  fetchPredictions,
  sendWifiSignals,
  step
} from "../actions";
import { View, StyleSheet } from "react-native";
import TourBox from "../components/TourBox";
import Spinner from "../components/Spinner";
import ExhibitionsBox from "../components/ExhibitionsBox";

class Exhibitions extends Component {
  checkNearZone = () => {
    // this.props.step("Checkear Zona");
    // this.props.sendWifiSignals();
    // var bestPrediction = this.props.fetchPredictions();
    // if (
    //   bestPrediction !== this.state.actualPrediction &&
    //   bestPrediction !== null
    // ) {
    //   this.setState({
    //     actualPrediction: bestPrediction,
    //     count: 0
    //   });
    // } else {
    //   this.setState({
    //     count: this.state.count++
    //   });
    // }
  };

  changeView = () => {
    // this.props.step("Cambiar Vista");
    // if (
    //   this.state.lastPrediction !== this.state.actualPrediction &&
    //   this.state.count > 3
    // ) {
    //   this.setState({
    //     lastPrediction: this.state.actualPrediction
    //   });
    //   this.props.fetchData(this.state.actualPrediction);
    // }
  };

  componentWillMount() {
    // this.props.fetchTourData();
    // this.props.sendWifiSignals();
    // var bestPrediction = this.props.fetchPredictions();
    // this.props.fetchData(bestPrediction);
    // this.setState({
    //   lastPrediction: bestPrediction,
    //   actualPrediction: bestPrediction
    // });
    // var predictionIntervalId = setInterval(() => {
    //   this.checkNearZone();
    // }, 2000);
    // this.setState({
    //   predictionIntervalId
    // });
    // var viewIntervalId = setInterval(() => {
    //   this.changeView();
    // }, 15000);
    // this.setState({
    //   viewIntervalId
    // });
  }
  componentWillUnmount() {
    clearInterval(this.state.predictionIntervalId);
    clearInterval(this.state.viewIntervalId);
  }

  renderTourBox = () => {
    let tours = this.props.data;
    let spin = this.props.fetching;
    // spinner on images if passing smaller images doesn't work
    if (spin === true) {
      return <Spinner />;
    } else {
      // return ( tours.map(tour => <TourBox key={tour._id} tour={tour} />
      return (
        <ExhibitionsBox
          exhibitions={[
            {
              audio_url: null,
              description: "Luna con dormilones, 2012",
              image_url:
                "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531871395/20110602133546-DDlogs.jpg",
              is_blind_path: false,
              location_name: "Luna con dormilones, 2012",
              piece_id: "cjnmhnytb0002305ihp8z4ms9",
              posifi_id: "location_1"
            },
            {
              audio_url:
                "https://posifi-app.s3.sa-east-1.amazonaws.com/cjnmi9769001d305itxw72s1x/Hostesses.mp3",
              description: "HOSTESSES",
              image_url:
                "https://res.cloudinary.com/dawjvqyvd/image/upload/v1531871395/20110602133546-DDlogs.jpg",
              is_blind_path: true,
              location_name: "HOSTESSES",
              piece_id: "cjnmi9769001d305itxw72s1x",
              posifi_id: "location_1"
            }
          ]}
        />
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toursContainer}>{this.renderTourBox()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  toursContainer: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#ffffff"
  },
  enterBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  enterText: {
    fontSize: 24,
    fontWeight: "700",
    color: "black"
  }
});

const mapStateToProps = state => {
  return {
    fetching: state.data.fetching,
    fetched: state.data.fetched,
    error: state.data.error,
    data: state.data.data
  };
};

export default connect(
  mapStateToProps,
  { fetchData, fetchTourData, fetchPredictions, sendWifiSignals, step }
)(Exhibitions);
