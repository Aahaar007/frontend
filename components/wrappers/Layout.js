import React from "react";
import { Div } from "react-native-magnus";

const Layout = (props) => {
  return (
    <Div w="100%" h="100%" bg="bgGray">
      {props.children}
    </Div>
  );
};

export default Layout;
