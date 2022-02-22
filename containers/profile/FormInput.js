import React, { useEffect } from "react";
import { Controller } from "react-hook-form";

import { Div, Input, Text } from "react-native-magnus";

const FormInput = (props) => {
  //from props
  const {
    name,
    control,
    placeHolder,
    isPass,
    inputProp,
    rules,
    defaultValue = "",
    errors = {},
    errorMessage = "Field Required",
  } = props;
  return (
    <Div position="relative">
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            bg="white"
            borderWidth={0}
            placeholder={placeHolder}
            color="black"
            py={0}
            mt={10}
            w="80%"
            h="40px"
            ml="auto"
            mr="auto"
            mt="20px"
            secureTextEntry={isPass}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            {...inputProp}
          />
        )}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
      />
      {errors[name] && (
        <Div
          position="absolute"
          right={0}
          bottom={-25}
          alignItems="flex-end"
          px={5}
        >
          <Text alignSelf="right" color="red" mt={5} mr={40}>
            {errors[name].message ? errors[name].message : errorMessage}
          </Text>
        </Div>
      )}
    </Div>
  );
};

export default FormInput;
