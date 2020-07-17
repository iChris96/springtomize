import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { withTheme } from "react-native-paper";
import { appColors, backgrounds } from "../constants/theme";

const Home: React.FC = (props: any) => {
  const { colors } = props.theme;
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary }}>Home Screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgrounds.screen,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withTheme(Home);
