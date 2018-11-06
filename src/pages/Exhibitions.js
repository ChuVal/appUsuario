import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData, fetchPredictions, sendWifiSignals, step } from "../actions";
import { View, StyleSheet } from "react-native";
import Spinner from "../components/Spinner";
import ExhibitionsBox from "../components/ExhibitionsBox";

class Exhibitions extends Component {
  checkNearZone = () => {
    this.setState({
      loading: false
    });
    this.props.sendWifiSignals();

    this.props.fetchPredictions();

    // Enqueue the new element
    var next = this.state.head + 1;

    if (next >= this.state.capacity) next = 0;

    var buffer = this.state.buffer;

    var prediction = this.props.bestPrediction;

    buffer[this.state.head] = prediction;

    this.setState({
      buffer,
      head: next
    });

    var actualPrediction = this.getBest(buffer);

    this.props.step(actualPrediction);

    if (actualPrediction !== this.state.previousPrediction) {
      this.props.fetchData(actualPrediction);
      this.setState({ previousPrediction: actualPrediction });
    }
  };

  getBest = array => {
    let result,
      best = -1,
      lookup = {};
    for (let i = 0; i < array.length; i++) {
      if (lookup[array[i]] == undefined) {
        lookup[array[i]] = 0;
      }
      lookup[array[i]]++;
      if (lookup[array[i]] > best) {
        best = lookup[array[i]];
        result = array[i];
      }
    }
    return result;
  };

  componentWillMount() {
    this.setState({
      loading: true,
      buffer: new Array(10),
      capacity: 10,
      head: 0,
      previousPrediction: ""
    });
    this.props.sendWifiSignals();

    this.props.fetchPredictions();

    var predictionIntervalId = setInterval(() => {
      this.checkNearZone();
    }, 1000);

    this.setState({
      predictionIntervalId
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.predictionIntervalId);
  }

  renderTourBox = () => {
    let spin = this.props.loading;
    var info = this.props.info;
    // spinner on images if passing smaller images doesn't work
    if (spin === true) {
      return <Spinner />;
    } else {
      // return ( tours.map(tour => <TourBox key={tour._id} tour={tour} />
      return <ExhibitionsBox exhibitions={info} />;
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
    bestPrediction: state.predictions.bestPrediction,
    data: state.data.data,
    info: state.data.info,
    loading: state.data.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchData, fetchPredictions, sendWifiSignals, step }
)(Exhibitions);
