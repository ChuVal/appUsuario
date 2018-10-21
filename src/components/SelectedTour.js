import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { audioPlayerViewWidth } from "../actions";
import { Actions } from "react-native-router-flux";
import AudioPlayerComponent from "./AudioPlayer";


class SelectedTour extends Component {
  _findDimensions = layout => {
    const { x, y, width, height } = layout;
    this.props.audioPlayerViewWidth(width);
  };

  renderImages = () => {
    return (
      <Image
        style={styles.selectedTourImg}
        source={{ uri: this.props.floorGallery[0] }}
      />
    );
  };

  onLearnMorePress = () => {
    Actions.learnMore({ connect: this.props.connect });
  };

  render() {
    const url = this.props.audioLinkName;

    return (
      <View
        style={styles.selectedTour}
        onLayout={event => {
          this._findDimensions(event.nativeEvent.layout);
        }}
      >
        <View style={styles.imgArea}>
          <View style={styles.tourImgBox}>{this.renderImages()}</View>
        </View>

        <View style={styles.moreInfoBox}>
          <Text style={styles.price}>
            {"Esto va a ser la descripcion de la obra"}
          </Text>
        </View>

        <View style={styles.selectedTourAudioInfoBox}>
          <AudioPlayerComponent url={url} title={this.props.audioTitle} />
        </View>
      </View>
    );
  }
}

// FE4A49 red highlight
const styles = StyleSheet.create({
  // CONTAINER
  selectedTour: {
    flex: 1,
    display: "flex",
    margin: 10
  },

  // 3 PARTS OF CONTAINER
  imgArea: {
    flex: 0.6
  },
  selectedTourAudioInfoBox: {
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
  selectedTourImg: {
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
)(SelectedTour);
