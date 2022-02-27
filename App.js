import React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider } from "react-native-magnus";
import { theme } from "./styles/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import MailSignInScreen from "./screens/MailSignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserSetupScreen from "./screens/UserSetupScreen";
import FoodDonationScreen from "./screens/FoodDonationScreen";

import CardTest from "./containers/feed/CardTest";
const Stack = createNativeStackNavigator();
import { store } from "./store";
import { Provider } from "react-redux";
import FeedLayout from "./containers/feed/FeedLayout";
import BookScreen from "./screens/BookScreen";
import FoodListingScreen from "./screens/FoodListingScreen";
import DonorSelectScreen from "./screens/DonorSelectScreen";
import BookFoodScreen from "./screens/BookFoodScreen";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="MailSignIn" component={MailSignInScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Listing" component={FoodListingScreen} />
              <Stack.Screen name="DonorSelect" component={DonorSelectScreen} />
              <Stack.Screen
                name="DonationDetail"
                component={FoodDonationScreen}
              />
              <Stack.Screen name="BookFood" component={BookFoodScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

AppRegistry.registerComponent("App", () => App);
