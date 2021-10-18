import React from "react";

import { Text } from "react-native-magnus";

const Title = (props) => {
  return (
    <Text color="white" fontSize={35} fontWeight="700" {...props}>
      {props.children}
    </Text>
  );
};

export default Title;
