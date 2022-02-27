import React, { useState } from "react";
import { Button, Div, Text } from "react-native-magnus";

const OrderDetail = (props) => {
  return (
    <Div
      col
      minH={80}
      rounded={10}
      mt={10}
      shadow="xs"
      shadowColor="black"
      p={5}
      {...props}
    >
      <Div row justifyContent="center" bg="#f2f6f6" w="100%">
        <Text color="#4f4e4e" fontWeight="bold" fontSize={20} mt={10}>
          {props.title}
        </Text>
      </Div>
      <Div bg="#f2f6f6" h="auto" w="100%" mt={10}>
        <Text color="#4f4e4e" fontWeight="600" fontSize={15}>
          {props.title2}
        </Text>
      </Div>
    </Div>
  );
};

export default OrderDetail;
