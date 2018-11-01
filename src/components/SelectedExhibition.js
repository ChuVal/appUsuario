import React, { Component } from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { audioPlayerViewWidth } from "../actions";
import AudioPlayerComponent from "./AudioPlayer";

class SelectedExhibition extends Component {
  _findDimensions = layout => {
    const { width } = layout;
    this.props.audioPlayerViewWidth(width);
  };

  renderImage = () => {
    return (
      <Image
        style={styles.selectedExhibitionImg}
        source={{
          uri:
            this.props.selectedExhibition.image_url ||
            "https://s3-sa-east-1.amazonaws.com/posifi-app/placeholder.jpg"
        }}
      />
    );
  };

  render() {
    const url = this.props.selectedExhibition.audio_url;

    return (
      <View
        style={styles.selectedExhibition}
        onLayout={event => {
          this._findDimensions(event.nativeEvent.layout);
        }}
      >
        <View style={styles.imgArea}>
          <View style={styles.tourImgBox}>{this.renderImage()}</View>
        </View>

        <View style={styles.moreInfoBox}>
          <ScrollView style={styles.infoContainer}>
            <Text style={styles.price}>
              {this.props.selectedExhibition.description}
            </Text>
          </ScrollView>
        </View>

        <View style={styles.selectedExhibitionAudioInfoBox}>
          <AudioPlayerComponent
            url={url}
            title={this.props.selectedExhibition.location_name}
          />
        </View>
      </View>
    );
  }
}

// FE4A49 red highlight
const styles = StyleSheet.create({
  // CONTAINER
  selectedExhibition: {
    flex: 1,
    display: "flex",
    margin: 10
  },
  infoContainer: {
    flex: 1,
    display: "flex"
  },
  // 3 PARTS OF CONTAINER
  imgArea: {
    flex: 0.6
  },
  selectedExhibitionAudioInfoBox: {
    flex: 0.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  moreInfoBox: {
    flex: 0.2,
    marginTop: 5
  },

  // IMG STYLING
  tourImgBox: {
    flex: 1,
    display: "flex",
    height: 1100
  },
  selectedExhibitionImg: {
    flex: 1,
    height: null,
    width: null,
    margin: 5
  },

  // LEARN MORE SECTION STYLING
  infoBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4a93f",
    marginTop: 10
  },
  infoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  },
  price: {
    margin: 10,
    color: "black",
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return {
    viewWidth: state.audio.viewWidth
  };
};

export default connect(
  mapStateToProps,
  { audioPlayerViewWidth }
)(SelectedExhibition);
