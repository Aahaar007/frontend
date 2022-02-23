import React from "react";
import { useForm } from "react-hook-form";
import { Button, Div, Input, Text, Tooltip, Icon } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import { Regex } from "../../constants/Regex";
import { useState } from "react";

const EmailPasswordInput = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const tooltipRef = React.createRef();

  const submitData = (data) => {
    if (data.Password != data.VerifyPassword) {
      console.log("Verify Password is not same as Password");
      return;
    }
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
          name="VerifyPassword"
          rules={{
            required: true,
          }}
          errors={errors}
          errorMessage="Password Required"
          label="Verify Password"
          isPass={true}
          mt={50}
        />
        <Div position="relative" row justifyContent="flex-end" mt={10}>
          <Tooltip
            flexDir="row"
            justifyContent="flex-end"
            w="100%"
            bg="primary"
            color="black"
            fontWeight="bold"
            ref={tooltipRef}
            text={`- Minimum 8 characters\n- Atleast 1 uppercase letter\n- Atleast 1 lowercase letter\n- Atleast 1 numeric character`}
          >
            <Text
              color="grey"
              fontSize="lg"
              textDecorLine="underline"
              fontWeight="bold"
              onPress={() => {
                if (tooltipRef.current) {
                  tooltipRef.current.show();
                }
              }}
            >
              <Icon name="infocirlceo" color="primary" fontFamily="AntDesign" />{" "}
              Password Guidelines
            </Text>
          </Tooltip>
        </Div>
      </Div>
      <Button
        title="Submit"
        onPress={handleSubmit((data) => submitData(data))}
        bg="primary"
        w="100%"
        h={55}
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
