import React from "react";
import { Button, Div, Text } from "react-native-magnus";
const DetailDiv = (props) => {
  return (
    <Div
      row
      bg="#fbf0e6"
      h={80}
      rounded={0}
      mt={8}
      shadow="xs"
      shadowColor="black"
      p={5}
      justifyContent="center"
      {...props}
    >
      <Text
        flex={1}
        color="#4f4e4e"
        fontWeight="bold"
        fontSize={20}
        textAlign="right"
        px={10}
      >
        {props.title}
      </Text>
      <Text
        flex={1}
        color="#D5B029"
        fontWeight="bold"
        fontSize={20}
        textAlign="left"
        px={10}
      >
        {props.title2}
      </Text>
    </Div>
  );
};

export default DetailDiv;
