import React from "react";
import { AppRegistry, View } from "react-native";
import { ThemeProvider } from "react-native-magnus";
import { Text } from "react-native-magnus";

export default function App() {
  return (
    <ThemeProvider>
      <View>
        <Text color="red">
          Open up App.js to start working on your app! Try not to add any bugs!
        </Text>
      </View>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent("App", () => App);
