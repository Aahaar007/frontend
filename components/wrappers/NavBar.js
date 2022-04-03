import React, { useState } from "react";
import { Button, Div, Icon } from "react-native-magnus";
import { Dimensions } from "react-native";

const NavBar = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [tabSelected, setTabSelected] = useState("donate-recieve");
  return (
    <Div
      h="100%"
      position="relative"
      bg="pink"
      minH={windowHeight}
      minW={windowWidth}
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
          onPress={() => setTabSelected("donate-recieve")}
        >
          <Icon
            name="heart"
            fontFamily="AntDesign"
            fontSize={25}
            color={tabSelected === "donate-recieve" ? "red" : "black"}
          />
        </Button>
        <Button
          py={10}
          px={20}
          alignSelf="center"
          rounded={25}
          bg="transparent"
          onPress={() => setTabSelected("volunteer")}
        >
          <Icon
            name="volunteer-activism"
            fontFamily="MaterialIcons"
            fontSize={25}
            color={tabSelected === "volunteer" ? "red" : "black"}
          />
        </Button>
        <Button
          py={10}
          px={20}
          alignSelf="center"
          rounded={25}
          bg="transparent"
          onPress={() => setTabSelected("my-order")}
        >
          <Icon
            name="package"
            fontFamily="MaterialCommunityIcons"
            fontSize={25}
            color={tabSelected === "my-order" ? "red" : "black"}
          />
        </Button>
        <Button
          py={10}
          px={20}
          alignSelf="center"
          rounded={25}
          bg="transparent"
          onPress={() => setTabSelected("profile")}
        >
          <Icon
            name="person"
            fontFamily="Ionicons"
            fontSize={25}
            color={tabSelected === "profile" ? "red" : "black"}
          />
        </Button>
      </Div>
    </Div>
  );
};

export default NavBar;
