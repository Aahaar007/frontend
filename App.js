import React from "react";
import { AppRegistry } from "react-native";
import DefaultApp from "./base";
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <DefaultApp></DefaultApp>
    </Provider>
  );
}

AppRegistry.registerComponent("App", () => App);
