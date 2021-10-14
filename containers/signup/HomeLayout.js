import React from "react";

import { Button, Div, Text } from "react-native-magnus";
import ImageBox from "../../components/ImageBox";

const HomeLayout = () => {
  return (
    <Div alignItems="center" position="relative">
      <Div alignItems="center" position="relative" w={375} mt={157} zIndex={2}>
        <ImageBox h={194} src={require("./img/logo.png")} />
        <ImageBox
          position="absolute"
          top={80}
          left={30}
          h={167.5}
          w={"82%"}
          src={require("./img/small_boxes.png")}
          zIndex={-1}
        />
      </Div>
      <Div mt={50}>
        <Text color="white">Let's get you setup!</Text>
        <Text color="white">so you can go save the world</Text>
      </Div>
      <Div mt={30} alignItems="center">
        <Button bg="primary" color="black" w={180} alignSelf="center">
          Sign Up
        </Button>
        <Text my={5} color="primary">
          OR
        </Text>
        <Button
          bg="transparent"
          borderWidth={2}
          borderColor="primary"
          color="primary"
          w={180}
          alignSelf="center"
        >
          Sign In
        </Button>
        <Text my={5} color="primary">
          OR
        </Text>
        <Div
          flexDir="row"
          bg="white"
          color="black"
          w={180}
          alignSelf="center"
          rounded={31}
        >
          <Button bg="white" color="black" w={180} alignSelf="center">
            Sign in with Google
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default HomeLayout;
