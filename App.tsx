import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Home from "./src/screens/Home";
import { theme as appTheme } from "./src/constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: appTheme.appColors.primary,
    accent: appTheme.appColors.accent,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}
