import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import { backgrounds } from "../constants/theme";
import { Title, Button } from "../components"
import { useEffect } from 'react';

const TIME_MODE = {
    stop: 'stop',
    play: 'play',
    pause: 'pause'
}

const handleModeColor = (mode: string) => {
    if (mode == TIME_MODE.stop) {
        return 'azure'
    }

    if (mode == TIME_MODE.play) {
        return 'lightcoral'
    }

    if (mode == TIME_MODE.pause) {
        return 'lightgreen'
    }
}

const handleNextMode = (mode: string) => {
    if (mode == TIME_MODE.stop) {
        return 'PLAY'
    }

    if (mode == TIME_MODE.play) {
        return 'PAUSE'
    }

    if (mode == TIME_MODE.pause) {
        return 'CONTINUE'
    }
}

export default () => {

    const [timeMode, setTimeMode] = useState<string>(TIME_MODE.stop);
    const [counter, setCounter] = useState(0);


    const handleOnTime = () => {
        //Stop -> Play
        if (timeMode == TIME_MODE.stop) {
            setTimeMode(TIME_MODE.play);
        }

        //Play -> Pause
        if (timeMode == TIME_MODE.play) {
            setTimeMode(TIME_MODE.pause)

        }

        //Pause -> Play
        if (timeMode == TIME_MODE.pause) {
            setTimeMode(TIME_MODE.play)
        }
    }

    const handleClean = () => {
        setTimeMode(TIME_MODE.stop);
        setCounter(0);
    }



    useEffect(() => {
        const condition = timeMode == TIME_MODE.play;
        const timer = condition && setInterval(() => setCounter(prev => prev + 1), 1000);
        return () => clearInterval(timer);
    }, [timeMode])


    return (
        <SafeAreaView style={styles.container}>
            <Title title={"Spring Screen"} />

            <Text style={styles.counter}>{counter}</Text>


            <View style={styles.buttonsContainer}>
                <Button style={{ backgroundColor: handleModeColor(timeMode) }} onPress={handleOnTime}>{handleNextMode(timeMode)}</Button>
                {timeMode !== TIME_MODE.stop && <Button onPress={handleClean}>{'CLEAN'}</Button>}
            </View>



        </SafeAreaView >

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgrounds.screen,
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    },
    counter: {
        fontSize: 62,
        color: 'white',
        fontWeight: 'bold'
    },
    buttonsContainer: {
        width: '40%'
    }
});