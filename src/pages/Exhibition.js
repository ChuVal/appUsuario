import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import SelectedExhibition from "../components/SelectedExhibition";

export default class Exhibition extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tourContainer}>
          <SelectedExhibition
            selectedExhibition={this.props.selectedExhibition}
          />
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
  tourContainer: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
