import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";

import { Button, Div, Text } from "react-native-magnus";
import ImageBox from "../../components/ImageBox";

const LoginButtonGroup = () => {
  const [touchSignIn, setTouchSignIn] = useState(false);
  const navigation = useNavigation();
  return (
    <Div>
      <Div mt={30} alignItems="center">
        <Button bg="primary" color="black" w={180} alignSelf="center">
          Sign Up
        </Button>
        <Text my={5} color="primary">
          OR
        </Text>
        <Button
          bg={touchSignIn ? "primary" : "transparent"}
          borderWidth={2}
          borderColor={touchSignIn ? "transparent" : "primary"}
          color={touchSignIn ? "black" : "primary"}
          w={180}
          alignSelf="center"
          onTouchStart={() => setTouchSignIn(true)}
          onTouchEnd={() => setTouchSignIn(false)}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign In
        </Button>
      </Div>
    </Div>
  );
};

export default LoginButtonGroup;
