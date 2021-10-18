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
        <Text my={5} color="primary">
          OR
        </Text>
        <Div
          flexDir="row"
          alignItems="center"
          position="relative"
          bg="white"
          color="black"
          w={180}
          alignSelf="center"
          rounded={3}
        >
          <ImageBox
            h={35}
            w={30}
            left="2%"
            position="absolute"
            zIndex={1}
            src={require("./img/google-color.png")}
          />
          <Button
            bg="white"
            color="black"
            w={180}
            pl={35}
            rounded={3}
            alignSelf="center"
          >
            Sign in with Google
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default LoginButtonGroup;
