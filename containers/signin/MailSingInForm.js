import React from "react";
import { useForm } from "react-hook-form";
import { Button, Div, Input, Text } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import { theme } from "./../../styles/theme";

const MailSignInForm = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const submitData = (data) => {
    console.log(data);
  };
  return (
    <Div {...props}>
      <Div mb={50}>
        <FormInput
          control={control}
          name="Email"
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
          }}
          errors={errors}
          errorMessage="Enter Valid Email"
          label="Enter your Email"
          placeHolder="abc@gmail.com"
        />
      </Div>
      <FormInput
        control={control}
        name="Password"
        rules={{
          required: true,
        }}
        errors={errors}
        errorMessage="Password Required"
        label="Enter your Password"
        placeHolder="12345678"
        isPass="Yes"
      />
      <Div row justifyContent="flex-end" mt={10}>
        <Text
          color={theme.colors.grey}
          fontSize="lg"
          textDecorLine="underline"
          fontWeight="bold"
        >
          Forgot password?
        </Text>
      </Div>
      <Button
        title="Submit"
        onPress={handleSubmit((data) => submitData(data))}
        bg="primary"
        w="100%"
        h={55}
        mt={80}
      >
        Submit
      </Button>
      <Div row flex={2} flexDir="column" mt={50}>
        <Text color={theme.colors.grey}>No account?.</Text>
        <Text color={theme.colors.white} textDecorLine="underline">
          Sign Up
        </Text>
      </Div>
    </Div>
  );
};

export default MailSignInForm;
