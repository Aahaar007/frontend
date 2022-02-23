import React from "react";
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
      {props.label && (
        <Text px={4} color="dimGray" {...props}>
          {props.label}
        </Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            bg="transparent"
            borderColor="dimGray"
            borderWidth={0}
            borderBottomWidth={1}
            placeholder={placeHolder}
            color="white"
            py={0}
            mt={10}
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
          <Text alignSelf="right" color="error" mt={5}>
            {errors[name].message ? errors[name].message : errorMessage}
          </Text>
        </Div>
      )}
    </Div>
  );
};

export default FormInput;
