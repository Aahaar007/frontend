import React from "react";
import { Div, ScrollDiv } from "react-native-magnus";
import { Dimensions } from "react-native";

const ListingWrapper = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <Div h="100%" bg="white" pt="60%" position="relative">
      <Div
        position="absolute"
        bg="staleYellow"
        h={windowWidth + 30}
        w={2 * windowWidth}
        top="-40%"
        left={-windowWidth / 2}
        roundedBottom={windowWidth + 30}
        zIndex={0}
      />
      <ScrollDiv col>{props.children}</ScrollDiv>
    </Div>
  );
};

export default ListingWrapper;
