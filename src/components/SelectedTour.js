import React, {Component} from 'react';
import {
    Text, 
    View, 
    Image, 
    ImageBackground,
    StyleSheet, 
    ScrollView, 
    TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {audioPlayerViewWidth} from '../actions';
import Svg, {Path} from 'react-native-svg';
import AudioPlayerComponent from './AudioPlayer';

class SelectedTour extends Component {

    _findDimensions = (layout) => {
        const {x, y, width, height} = layout;
        console.log(x);
        console.log(y);
        console.log(width);
        console.log(height);

        this.props.audioPlayerViewWidth(width);
    }

    renderImages = () => {
        console.log('floorGallery array? ', this.props.floorGallery);
        return this.props.floorGallery.map((image, index) => 
            <ImageBackground key={index} style={styles.selectedTourImg} source={{ uri: image }}/>
        );
    }

    render() {
        console.log(this.props);
        const url = this.props.audioLinkName;

        return (
            <View style={styles.selectedTour} onLayout={(event) => { this._findDimensions(event.nativeEvent.layout) }}>

                <View style={styles.imgArea}>
                    <ScrollView horizontal={true}>
                        <View style={styles.tourImgBox}>
                            {this.renderImages()}
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.selectedTourAudioInfoBox}>
                    <AudioPlayerComponent url={url}/>
                </View>                

                <View style={styles.moreInfoBox}>
                    <TouchableOpacity style={styles.infoBtn}>
                        <Text style={styles.infoText}>
                            Learn More
                        </Text>
                    </TouchableOpacity>
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
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        height: 'auto'
    },

    // 3 PARTS OF CONTAINER
    imgArea: {
        flex: 1
    },
    selectedTourAudioInfoBox: {
        flex: .3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    moreInfoBox: {
        flex: .2, 
        marginTop: 5
    },

    // IMG STYLING 
    tourImgBox: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        width: 950
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'teal'
    },
    infoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    }

});

const mapStateToProps = state => {
    return {
        viewWidth: state.audio.viewWidth,
    }
}

export default connect(mapStateToProps, { audioPlayerViewWidth})(SelectedTour);