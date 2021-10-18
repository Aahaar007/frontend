import React from "react";

import { Div, Input, Text } from "react-native-magnus";

const FormInput = (props) => {
  return (
    <Div {...props}>
      <Text px={4} color="dimGray">
        {props.label}
      </Text>
      <Input
        bg="transparent"
        borderColor="dimGray"
        borderWidth={0}
        borderBottomWidth={1}
        placeholder={props.placeHolder}
        color="white"
        py={0}
        mt={10}
        secureTextEntry={props.isPass}
      />
    </Div>
  );
};

export default FormInput;
