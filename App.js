import React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider } from "react-native-magnus";
import { theme } from "./styles/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import MailSignInScreen from "./screens/MailSignInScreen";
import OTPScreen from "./screens/OTPScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DonorSelectForm from "./containers/foodlisting/DonorSelectForm";
const Stack = createNativeStackNavigator();

import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="SignUp" component={DonorSelectForm} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="MailSignIn" component={MailSignInScreen} />
              <Stack.Screen name="OTP" component={OTPScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

AppRegistry.registerComponent("App", () => App);
