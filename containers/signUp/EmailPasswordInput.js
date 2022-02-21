import React from "react";
import { useForm } from "react-hook-form";
import { Button, Div, Input, Text } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import { Regex } from "../../constants/Regex";

const EmailPasswordInput = (props) => {
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
            pattern: Regex.emailPattern,
          }}
          errors={errors}
          errorMessage="Enter Valid Email"
          label="Enter your Email address"
          placeHolder="abc@gmail.com"
        />
        <FormInput
          control={control}
          name="Password"
          rules={{
            required: true,
          }}
          errors={errors}
          errorMessage="Password Required"
          label="Enter Password"
          placeHolder="12345678"
          isPass={true}
          mt={50}
        />
        <FormInput
          control={control}
          name="Verify Password"
          rules={{
            required: true,
          }}
          errors={errors}
          errorMessage="Password Required"
          label="Verify Password"
          isPass={true}
          mt={50}
        />
        <Div row justifyContent="flex-end" mt={10}>
          <Text
            color="grey"
            fontSize="lg"
            textDecorLine="underline"
            fontWeight="bold"
          >
            Password Guidelines
          </Text>
        </Div>
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
        <Text color="grey">Have an account?</Text>
        <Text color="white" textDecorLine="underline">
          Sign In
        </Text>
      </Div>
    </Div>
  );
};

export default EmailPasswordInput;
