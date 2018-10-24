import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchData,
  fetchTourData,
  fetchPredictions,
  sendWifiSignals
} from "../actions";
import { View, StyleSheet } from "react-native";
import TourBox from "../components/TourBox";
import Spinner from "../components/Spinner";

class Exhibitions extends Component {
  checkNearZone = () => {
    this.props.sendWifiSignals();
    var bestPrediction = this.props.fetchPredictions();

    if (
      bestPrediction !== this.state.actualPrediction &&
      bestPrediction !== null
    ) {
      this.setState({
        actualPrediction: bestPrediction,
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count++
      });
    }
  };

  changeView = () => {
    if (
      this.state.lastPrediction !== this.state.actualPrediction &&
      this.state.count > 3
    ) {
      this.setState({
        lastPrediction: this.state.actualPrediction
      });
      this.fetchData(this.state.actualPrediction);
    }
  };

  componentWillMount() {
    this.props.fetchTourData();
    this.props.sendWifiSignals();
    var bestPrediction = this.props.fetchPredictions();
    this.fetchData(bestPrediction);
    this.setState({
      lastPrediction: bestPrediction,
      actualPrediction: bestPrediction
    });
    setInterval(() => {
      this.checkNearZone();
    }, 2000);

    this.setState({
      predictionIntervalId
    });

    var viewIntervalId = setInterval(() => {
      this.changeView();
    }, 15000);

    this.setState({
      viewIntervalId
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.predictionIntervalId);
    clearInterval(this.state.viewIntervalId);
  }

  renderTourBox = () => {
    let tours = this.props.data;
    let spin = this.props.fetching;
    console.log(tours);
    // spinner on images if passing smaller images doesn't work
    if (spin === true) {
      return <Spinner />;
    } else {
      return tours.map(tour => <TourBox key={tour._id} tour={tour} />);
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
    predictions: state.predictions.predictions,
    fetching: state.data.fetching,
    fetched: state.data.fetched,
    error: state.data.error,
    data: state.data.data
  };
};

export default connect(
  mapStateToProps,
  { fetchData, fetchTourData, fetchPredictions, sendWifiSignals }
)(Exhibitions);
