import React, { useState } from "react";
import { Div, ScrollDiv, Text } from "react-native-magnus";
import { Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { theme } from "../../styles/theme";
const ListingWrapper = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [userData, setUserData] = useState({
    address: "420-Delhi, India",
    profile: "./img/default_pp.jpg",
  });
  return (
    <Div h="100%" bg="white" pt="60%" position="relative">
      {/* <Div
        position="absolute"
        bg="staleYellow"
        w="130%"
        left="-15%"
        h="20%"
        top={0}
        roundedBottom={9999}
        zIndex={0}
      /> */}
      <Svg position="absolute" top={0} zIndex={0}>
        <Circle cx="50%" cy="-25%" r="75%" fill={theme.colors.staleYellow} />
      </Svg>
      <Div
        position="absolute"
        h="40%"
        w="100%"
        top={0}
        pt="15%"
        borderColor="red"
        borderWidth={1}
      >
        <Div bg="blue" w="100%" color="burgundy">
          <Text>{userData?.address}</Text>
        </Div>
      </Div>
      <ScrollDiv col>{props.children}</ScrollDiv>
      <Div bg="greenishYellow" h="7%" />
    </Div>
  );
};

export default ListingWrapper;
