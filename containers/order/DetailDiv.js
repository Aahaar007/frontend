import React from "react";
import { Button, Div, Text } from "react-native-magnus";
const DetailDiv = (props) => {
  return (
    <Div
      row
      bg="#fbf0e6"
      h={80}
      rounded={10}
      mt={20}
      shadow="lg"
      shadowColor="black"
      {...props}
    >
      <Text color="#4f4e4e" fontWeight="bold" fontSize={20} ml={50}>
        {props.title}
      </Text>
      <Text color="#D5B029" fontWeight="bold" fontSize={20} ml={40}>
        {props.title2}
      </Text>
    </Div>
  );
};

export default DetailDiv;
