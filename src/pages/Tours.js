import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import TourBox from '../components/TourBox';

export default class Tours extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerFixed}>
                </View>
                <View style={styles.toursContainer}>
                    <ScrollView>
                        <TourBox />
                        <TourBox />
                        <TourBox />
                    </ScrollView>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    headerFixed: {
        flex: .1,
        backgroundColor: 'violet'

    },
    toursContainer: {
        flex: .9,
        backgroundColor: 'grey'
    }
})
