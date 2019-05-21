import React from 'react';
import {StyleSheet, Text, ScrollView, View, ActivityIndicator, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const platform = Platform.OS;

export default class App extends React.Component {


    render() {
        console.log('plattform:', Platform.OS);
        console.log('width:', width);
        console.log('height:', height);

        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>Welcome to react-native-web!</Text>
                    <Text style={styles.text}>Your platform is '{platform}'.</Text>
                    <Text style={styles.text}>Your screen dimensions are {Math.floor(width)} x {Math.floor(height)} px.</Text>
                    <ActivityIndicator size={height/10} color={'white'} style={{marginTop: 100}}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        height: height,
        width: width,
        backgroundColor: '#333',
        // borderWidth: 1,
        // borderColor: '#0f0'
    },
    innerContainer: {
        paddingTop: height / 6,
        paddingHorizontal: width / 10,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: '#f0f'
    },
    text: {
        color: '#eee',
        marginBottom: 20,
    },
});
