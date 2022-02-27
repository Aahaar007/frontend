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
import UserSetupScreen from "./screens/UserSetupScreen";
import DonorSelectForm from "./containers/foodlisting/DonorSelectForm";
const Stack = createNativeStackNavigator();

import FeedLayout from "./containers/feed/FeedLayout";
import BookScreen from "./screens/BookScreen";
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
