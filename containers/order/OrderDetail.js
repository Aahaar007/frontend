import React, { useState } from "react";
import { Button, Div, Text } from "react-native-magnus";

const OrderDetail = (props) => {
  const showDetail = () => {
    props.setShow(1 - props.show);
  };
  return (
    <Div>
      <Button
        bg="#f2f6f6"
        p={0}
        h="auto"
        // shadow="lg"
        // shadowColor="black"
        rounded={20}
        mt={10}
        onPress={showDetail}
        zIndex={20}
      >
        <Div
          col
          bg="#f2f6f6"
          minH={props.show === 0 ? 350 : 200}
          mt={10}
          w="100%"
          overflow={props.show === 0 ? "scroll" : "hidden"}
          zIndex={30}
        >
          <Div bg="#f2f6f6" h={30} w="100%">
            <Text
              color="#4f4e4e"
              fontWeight="bold"
              fontSize={20}
              ml={50}
              mt={10}
            >
              {props.title}
            </Text>
          </Div>
          <Div bg="#f2f6f6" h="auto" w="100%" mt={10}>
            {props.show == 0 && (
              <Text color="#4f4e4e" fontWeight="bold" fontSize={15} ml={50}>
                {props.title2}
              </Text>
            )}
          </Div>
        </Div>
      </Button>
      {props.show === 1 && (
        <Div
          row
          justifyContent="space-evenly"
          bg="white"
          h={80}
          rounded={20}
          w="80%"
          mt={-130}
          ml="10%"
          zIndex={40}
        >
          <Div flex={1} justifyContent="space-around" alignItems="center" col>
            <Text>dir</Text>
            <Text>Message</Text>
          </Div>
          <Div flex={1} justifyContent="space-around" alignItems="center" col>
            <Text>cal</Text>
            <Text>Direction</Text>
          </Div>
          <Div flex={1} justifyContent="space-around" alignItems="center" col>
            <Text>text</Text>
            <Text>Call</Text>
          </Div>
        </Div>
      )}
    </Div>
  );
};

export default OrderDetail;
