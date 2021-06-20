import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Button } from "react-native-paper";

interface IButton {
    mode?: string,
    children?: React.ReactNode,
    onPress: () => any,
    style?: StyleProp<ViewStyle>
}

export default ({ mode = 'contained', children, onPress, style = {} }: IButton) => {

    return (<Button mode="contained" onPress={onPress} style={[styles.button, style]}>
        {children}
    </Button>)
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
    }
});