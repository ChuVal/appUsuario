import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  audioPlaying,
  audioTime,
  audioError,
  audioPaused,
  audioSetTime,
  audioCurrentTime
} from "../actions";
import AudioPlayer from "react-native-play-audio";
import Svg, { Path } from "react-native-svg";
import ProgressBar from "./ProgressBar";

class AudioPlayerComponent extends Component {
  _audioPlay = url => {
    var id = setInterval(() => {
      AudioPlayer.getCurrentTime(currentTime => {
        this.props.audioCurrentTime(currentTime);
      });
    }, 1000);

    this.setState({
      id
    });

    if (this.props.isPlaying === false && this.props.isPaused === false) {
      AudioPlayer.prepare(url, () => {
        this.props.audioPlaying(true);
        AudioPlayer.play();

        AudioPlayer.getDuration(duration => {
          this.props.audioTime(duration);
        });
      });
    } else {
      this.props.audioPlaying(true);
      AudioPlayer.play();
    }
  };

  _audioPause = url => {
    clearInterval(this.state.id);
    this.props.audioPlaying(false);
    this.props.audioPaused(true);
    AudioPlayer.pause();
  };

  audioPlayPauseToggle = url => {
    if (this.props.isPlaying === true) {
      return (
        <TouchableOpacity
          style={styles.audioBtn}
          onPress={() => this._audioPause(url)}
        >
          <Svg height={32} width={32}>
            <Path
              d="M4 4h10v24h-10zM18 4h10v24h-10z"
              fill="#009FB7"
              stroke="#009FB7"
            />
          </Svg>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.audioBtn}
          onPress={() => this._audioPlay(url)}
        >
          <Svg height={32} width={32}>
            <Path d="M6 4l20 12-20 12z" fill="#009FB7" stroke="#009FB7" />
          </Svg>
        </TouchableOpacity>
      );
    }
  };

  componentWillUnmount = () => {
    this.props.audioCurrentTime(0);
    this.props.audioPlaying(false);
    this.props.audioPaused(false);
    this.props.audioSetTime(0);
    this.props.audioTime(0);
    AudioPlayer.stop();
  };

  render() {
    const url = this.props.url;
    const title = this.props.title;

    return (
      <View style={styles.selectedTourAudioInfoBox}>
        <View style={styles.audioTitleBox}>
          <Text style={styles.audioTitle}>{title}</Text>
        </View>
        <View style={styles.audioControls}>
          <View style={styles.audioBtnBox}>
            {this.audioPlayPauseToggle(url)}
          </View>
          <View style={styles.audioProgressBarBox}>
            <ProgressBar
              row
              progress={this.props.currentTime}
              duration={500}
              borderColor={"#ffffff"}
              fillColor={"white"}
              barColor={"#009FB7"}
              borderWidth={0}
              borderRadius={10}
              maxValue={this.props.totalTime}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectedTourAudioInfoBox: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  // TITLE STYLING
  audioTitleBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  audioTitle: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  // AUDIO CONTROL STYLING
  audioControls: {
    flex: 0.9,
    display: "flex",
    flexDirection: "row"
  },
  audioBtnBox: {
    flex: 0.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  audioBtn: {
    padding: 5,
    borderRadius: 50
  },
  audioProgressBarBox: {
    flex: 0.7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    marginLeft: 5,
    paddingRight: 5,
    paddingLeft: 5
  },
  audioProgressBar: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    totalTime: state.audio.totalTime,
    isPlaying: state.audio.isPlaying,
    isPaused: state.audio.isPaused,
    setTime: state.audio.setTime,
    currentTime: state.audio.currentTime,
    error: state.audio.error
  };
};

export default connect(
  mapStateToProps,
  {
    audioPlaying,
    audioTime,
    audioError,
    audioPaused,
    audioSetTime,
    audioCurrentTime
  }
)(AudioPlayerComponent);
