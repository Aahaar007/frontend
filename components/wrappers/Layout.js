import React from "react";
import { ScrollDiv } from "react-native-magnus";
import { Dimensions } from "react-native";
const Layout = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <ScrollDiv
      minH={windowHeight}
      minW={windowWidth}
      w="100%"
      h="100%"
      pt={40}
      bg="bgGray"
      px={10}
      {...props}
      decelerationRate="fast"
    >
      {props.children}
    </ScrollDiv>
  );
};

export default Layout;
