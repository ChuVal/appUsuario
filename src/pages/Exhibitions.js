import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTourData, fetchPredictions } from "../actions";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import TourBox from "../components/TourBox";
import Spinner from "../components/Spinner";
import wifi from "react-native-android-wifi";

class Exhibitions extends Component {
  componentWillMount = () => {
    // this.props.fetchTourData();
    this.props.fetchPredictions();
  };
  getWifiNetworksOnPress() {
    wifi.loadWifiList(
      wifiStringList => {
        console.log(wifiStringList);
      },
      error => {
        console.log(error);
      }
    );
  }

  renderTourBox = () => {
    let tours = this.props.data;
    let spin = this.props.fetching;
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
        <View>
          <TouchableOpacity
            style={styles.enterBtn}
            onPress={this.getWifiNetworksOnPress.bind(this)}
          >
            <Text style={styles.enterText}>Continuar</Text>
          </TouchableOpacity>
        </View>
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
  { fetchTourData, fetchPredictions }
)(Exhibitions);
