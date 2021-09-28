import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import { ThemeProvider } from "react-native-magnus";
import { Text } from "react-native-magnus";

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text color="red">Open up App.js to start working on your app!</Text>
      </View>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent("App", () => App);
