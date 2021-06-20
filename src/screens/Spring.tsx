import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { backgrounds } from "../constants/theme";
import { Title } from "../components"


export default () => {

    return (
        <View style={styles.container}>
            <Title title={"Spring Screen"} />

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgrounds.screen,
        alignItems: "center",
        justifyContent: "flex-start",
    }
});