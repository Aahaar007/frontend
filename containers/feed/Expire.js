import React from "react";
import { Div, Text } from "react-native-magnus";

const Expire = (props) => {
  return (
    <Div>
      <Div
        h={40}
        w={55}
        alignSelf="center"
        justifyContent="center"
        borderColor={props.color}
        borderWidth={2}
        bg={props.color}
        rounded="lg"
      >
        <Text
          textAlign="center"
          color="white"
          fontSize={30}
          fontWeight="700"
          mt={-2}
        >
          {props.time}
        </Text>
      </Div>
      <Div
        h={45}
        w={55}
        alignSelf="center"
        justifyContent="flex-end"
        borderColor={props.color}
        borderWidth={2}
        rounded="lg"
        mt={-15}
        borderTopColor="transparent"
      >
        <Text
          textAlign="center"
          fontSize="xs"
          color={props.color}
          fontWeight="500"
        >
          {props.unit}
        </Text>
        <Text
          textAlign="center"
          fontSize="xs"
          color={props.color}
          fontWeight="500"
          pb={5}
          mt={-5}
        >
          to expiry
        </Text>
      </Div>
    </Div>
  );
};

export default Expire;
