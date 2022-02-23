import React from "react";
import { ScrollDiv } from "react-native-magnus";

const Layout = (props) => {
  return (
    <ScrollDiv w="100%" h="100%" pt={40} bg="bgGray" px={10}>
      {props.children}
    </ScrollDiv>
  );
};

export default Layout;
