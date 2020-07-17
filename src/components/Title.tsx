import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
import { appColors } from "../constants/theme";

type TitleProps = {
  title: string;
};

const Title: FunctionComponent<TitleProps> = ({ title }) => {
  return <Text style={styles.textStyle}> {title} </Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 28,
    color: appColors.secondary,
  },
});
export default Title;
