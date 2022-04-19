import React from "react";
import { Div, Text } from "react-native-magnus";

const QueueCard = ({ amount }) => {
  return (
    <Div
      borderTopWidth={3}
      borderBottomWidth={3}
      borderColor="rgba(91,69,27,1)"
      borderStyle="dashed"
      py={5}
      px={10}
      bg="oldYellow"
      mr={5}
      rounded={10}
      minW={100}
      alignItems="center"
    >
      <Text fontSize={30}>{amount}</Text>
      <Text fontSize={10}>PEOPLE</Text>
    </Div>
  );
};

export default QueueCard;
