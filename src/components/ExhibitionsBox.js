import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ExhibitionHeader from "../components/ExhibitionHeader";
import Exhibition from "../components/Exhibition";

export default class ExhibitionsBox extends Component {
  renderExhibitions = () => {
    return this.props.exhibitions.map(selectedExhibition => (
      <Exhibition
        key={selectedExhibition.piece_id}
        selectedExhibition={selectedExhibition}
      />
    ));
  };

  render() {
    return (
      <View style={styles.tourBox}>
        <ExhibitionHeader title={this.props.title} />
        <View style={styles.tourBoxTours}>
          <ScrollView horizontal={true}>{this.renderExhibitions()}</ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tourBox: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    height: 560
  },
  tourBoxTours: {
    flex: 1,
    height: 650,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row"
  }
});
