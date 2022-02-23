import React from "react";
import { Div, Button } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";

const EmailPass = (props) => {
  const { control } = props;
  return (
    <Div {...props}>
      <FormInput
        name="email"
        control={control}
        placeholder="example@mail.com"
        label="Enter your email address"
      />
      <FormInput
        name="password"
        control={control}
        placeholder="example@mail.com"
        label="Enter Password"
        isPass={true}
        mt={30}
      />
      <FormInput
        name="rePassword"
        control={control}
        placeholder="example@mail.com"
        label="Verify Password"
        isPass={true}
        mt={30}
      />
      <Div positon="relative" mb={50}>
        <Button
          position="absolute"
          bg="transparent"
          color="dimGray"
          textDecorLine="underline"
          right={0}
        >
          Password Guidelines
        </Button>
      </Div>
    </Div>
  );
};

export default EmailPass;
