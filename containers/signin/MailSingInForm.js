import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Div, Input, Text } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import { Regex } from "../../constants/Regex";

const MailSignInForm = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigation = useNavigation();

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
        isPass={true}
      />
      <Div row justifyContent="flex-end" mt={25}>
        <Text
          color="grey"
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
        mt={50}
      >
        Submit
      </Button>
      <Div ml="auto" row flex={2} mt={50}>
        <Text color="grey">No account?.</Text>
        <Button
          p={0}
          bg="transparent"
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text color="white" textDecorLine="underline">
            Sign Up
          </Text>
        </Button>
      </Div>
    </Div>
  );
};

export default MailSignInForm;
