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
import Spinner from "../components/Spinner";
import ExhibitionsBox from "../components/ExhibitionsBox";

class Exhibitions extends Component {
  checkNearZone = () => {
    this.setState({
      timeCount: this.state.timeCount + 1
    });
    var bestPrediction = this.props.bestPrediction;
    this.props.sendWifiSignals();
    if (this.state.timeCount > 4) {
      this.props.fetchPredictions();
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
          count: this.state.count + 1
        });
      }
    }
  };

  changeView = () => {
    this.setState({
      timeCount: 0
    });
    if (
      this.state.lastPrediction !== this.state.actualPrediction &&
      this.state.count >= 5 &&
      this.state.lastPrediction !== null
    ) {
      this.setState({
        lastPrediction: this.state.actualPrediction,
        count: 0
      });
      this.props.fetchData(this.state.actualPrediction);
      this.setState({
        loading: false
      });
    }
  };

  componentWillMount() {
    this.setState({
      loading: true
    });
    this.props.sendWifiSignals();

    this.props.fetchPredictions();

    var bestPrediction = this.props.bestPrediction;

    this.props.fetchData(bestPrediction);
    this.setState({
      lastPrediction: bestPrediction,
      actualPrediction: bestPrediction,
      timeCount: 0
    });
    var predictionIntervalId = setInterval(() => {
      this.checkNearZone();
    }, 250);
    this.setState({
      predictionIntervalId
    });
    var viewIntervalId = setInterval(() => {
      this.changeView();
    }, 5000);
    this.setState({
      viewIntervalId
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.predictionIntervalId);
    clearInterval(this.state.viewIntervalId);
  }

  renderTourBox = () => {
    let spin = this.state.loading;
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
    info: state.data.info
  };
};

export default connect(
  mapStateToProps,
  { fetchData, fetchTourData, fetchPredictions, sendWifiSignals, step }
)(Exhibitions);
