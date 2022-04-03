import React, { useState } from "react";
import { Button, Div, Icon } from "react-native-magnus";
import { Dimensions } from "react-native";

const NavBar = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const { selected, changeSelected } = props;
  return (
    <Div
      h="100%"
      position="relative"
      bg="pink"
      minH={windowHeight}
      minW={windowWidth}
      pb={50}
    >
      {props.children}
      <Div
        position="absolute"
        bottom={0}
        bg="greenishYellow"
        h={50}
        w="100%"
        row
        justifyContent="space-around"
      >
        <Button
          py={10}
          px={20}
          alignSelf="center"
          rounded={25}
          bg="transparent"
          onPress={() => changeSelected("donate-recieve")}
        >
          <Icon
            name="heart"
            fontFamily="AntDesign"
            fontSize={25}
            color={selected === "donate-recieve" ? "red" : "black"}
          />
        </Button>
        <Button
          py={10}
          px={20}
          alignSelf="center"
          rounded={25}
          bg="transparent"
          onPress={() => changeSelected("volunteer")}
        >
          <Icon
            name="volunteer-activism"
            fontFamily="MaterialIcons"
            fontSize={25}
            color={selected === "volunteer" ? "red" : "black"}
          />
        </Button>
        <Button
          py={10}
          px={20}
          alignSelf="center"
          rounded={25}
          bg="transparent"
          onPress={() => changeSelected("my-order")}
        >
          <Icon
            name="package"
            fontFamily="MaterialCommunityIcons"
            fontSize={25}
            color={selected === "my-order" ? "red" : "black"}
          />
        </Button>
        <Button
          py={10}
          px={20}
          alignSelf="center"
          rounded={25}
          bg="transparent"
          onPress={() => changeSelected("profile")}
        >
          <Icon
            name="person"
            fontFamily="Ionicons"
            fontSize={25}
            color={selected === "profile" ? "red" : "black"}
          />
        </Button>
      </Div>
    </Div>
  );
};

export default NavBar;
