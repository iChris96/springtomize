import React from "react";
import { View, StyleSheet } from "react-native";
import { withTheme } from "react-native-paper";
import { backgrounds } from "../constants/theme";
import { Title, Button } from "../components"

const Header = () => {
  return (
    <View style={styles.titleContainer}>
      <Title title={"Home Screen!"} />
    </View>
  )
}

const Content = ({ navigation }: any) => {
  return (
    <View style={styles.buttonsContainer}>
      <Button onPress={() => navigation.navigate('Spring')}>
        New Spring
      </Button>
      <Button
        onPress={() => console.log("Pressed2")}
      >
        My Springs
      </Button>
    </View>
  )
}

const Home: React.FC = (props: any) => {
  const { colors } = props.theme;

  return (
    <View style={styles.container}>
      <Header />
      <Content {...props} />
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
