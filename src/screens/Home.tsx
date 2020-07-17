import React from "react";
import { View, StyleSheet } from "react-native";
import { withTheme, Button } from "react-native-paper";
import { backgrounds } from "../constants/theme";
import Title from "../components/Title";

const Home: React.FC = (props: any) => {
  const { colors } = props.theme;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title title={"Home Screen!"} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          New Spring
        </Button>
        <Button
          style={{ marginVertical: 10 }}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          My Springs
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgrounds.screen,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonsContainer: {
    flex: 2,
    marginTop: 50,
  },
});

export default withTheme(Home);
