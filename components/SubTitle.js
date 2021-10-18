import React from "react";

import { Text } from "react-native-magnus";

const SubTitle = (props) => {
  return (
    <Text color="white" fontSize={22} fontWeight="100" {...props}>
      {props.children}
    </Text>
  );
};

export default SubTitle;
