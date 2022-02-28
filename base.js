import React, { useEffect } from "react";
import { ThemeProvider } from "react-native-magnus";
import { theme } from "./styles/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import MailSignInScreen from "./screens/MailSignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";

import FoodDonationScreen from "./screens/FoodDonationScreen";
import FoodListingScreen from "./screens/FoodListingScreen";
import DonorSelectScreen from "./screens/DonorSelectScreen";
import BookFoodScreen from "./screens/BookFoodScreen";

const Stack = createNativeStackNavigator();

import { useSelector } from "react-redux";

const Base = () => {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {user && user.data && user.data._id ? (
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Listing" component={FoodListingScreen} />
              <Stack.Screen name="DonorSelect" component={DonorSelectScreen} />
              <Stack.Screen
                name="DonationDetail"
                component={FoodDonationScreen}
              />
              <Stack.Screen name="BookFood" component={BookFoodScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Group>
          ) : (
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="MailSignIn" component={MailSignInScreen} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Base;
