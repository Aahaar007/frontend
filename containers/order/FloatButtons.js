import React from "react";
import { Div, Icon, Text, Button } from "react-native-magnus";
const FLoatButtons = (props) => {
  const pressMessage = () => {
    console.log("pressed message");
  };
  const pressCall = () => {
    console.log("pressed call");
  };

  const pressDirection = () => {
    console.log("pressed directions");
  };

  return (
    <Div
      row
      justifyContent="space-evenly"
      bg="white"
      w="100%"
      borderColor="dullWhite"
      borderTopWidth={1}
      mb={40}
      {...props}
    >
      <Button
        flex={1}
        rounded={0}
        h={85}
        bg="transparent"
        onPress={pressMessage}
      >
        <Div justifyContent="space-around" alignItems="center" col>
          <Icon
            color="dimGray"
            rounded={100}
            p={7}
            bg="dullWhite"
            fontSize={30}
            name="message1"
            fontFamily="AntDesign"
          />
          <Text color="dimGray" fontSize={12} fontWeight="bold">
            Message
          </Text>
        </Div>
      </Button>
      <Button
        flex={1}
        rounded={0}
        h={85}
        bg="transparent"
        borderColor="dullWhite"
        borderRightWidth={1}
        borderLeftWidth={1}
        onPress={pressDirection}
      >
        <Div justifyContent="space-around" alignItems="center" col>
          <Icon
            color="dimGray"
            rounded={100}
            p={7}
            bg="dullWhite"
            name="directions"
            fontSize={30}
            fontFamily="FontAwesome5"
          />
          <Text color="dimGray" fontSize={12} fontWeight="bold">
            Directions
          </Text>
        </Div>
      </Button>
      <Button flex={1} rounded={0} h={85} bg="transparent" onPress={pressCall}>
        <Div justifyContent="space-around" alignItems="center" col>
          <Icon
            color="dimGray"
            rounded={100}
            p={7}
            bg="dullWhite"
            name="phone-call"
            fontSize={30}
            fontFamily="Feather"
          />
          <Text color="dimGray" fontSize={12} fontWeight="bold">
            Call
          </Text>
        </Div>
      </Button>
    </Div>
  );
};

export default FLoatButtons;
