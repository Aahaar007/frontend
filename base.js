import React, { useEffect, useState } from "react";
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
import DonateRecieveScreen from "./screens/DonateRecieveScreen";
import NavScreen from "./screens/NavScreen";

const Stack = createNativeStackNavigator();

import { getAuth } from "firebase/auth";
import UserSetupScreen from "./screens/UserSetupScreen";
import RequestDetailScreen from "./screens/RequestDetailScreen";
import DonationDetailScreen from "./screens/DonationDetailScreen";
import HotspotDetailScreen from "./screens/HotspotDetailScreen";

const Base = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const onAuthStateChanged = (user) => {
    if (user && user?.providerData.length >= 2) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  useEffect(() => {
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {loggedIn ? (
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="NavScreen" component={NavScreen} />
              {/* <Stack.Screen
                name="DonateRecieve"
                component={DonateRecieveScreen}
              /> */}
              {/* <Stack.Screen name="Listing" component={FoodListingScreen} />
              <Stack.Screen name="DonorSelect" component={DonorSelectScreen} />
              <Stack.Screen
                name="DonationDetail"
                component={FoodDonationScreen}
              /> */}
              <Stack.Screen name="UserSetup" component={UserSetupScreen} />
              <Stack.Screen name="BookFood" component={BookFoodScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen
                name="RequestDetail"
                component={RequestDetailScreen}
              />
              <Stack.Screen
                name="DonationDetail"
                component={DonationDetailScreen}
              />
              <Stack.Screen
                name="HotspotDetail"
                component={HotspotDetailScreen}
              />
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
