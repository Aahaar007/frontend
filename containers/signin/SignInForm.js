import React from "react";
import { useForm } from "react-hook-form";

import { Button, Div } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";

const SignInForm = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Div {...props}>
      <FormInput
        control={control}
        name="email"
        rules={{
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^[7-9][0-9]{9}$/,
        }}
        errors={errors}
        errorMessage="Phone/Email Required"
        label="Enter your phone number or email address"
        placeHolder="Phone/Email"
      />
      <FormInput
        control={control}
        name="password"
        rules={{ required: true }}
        errors={errors}
        errorMessage="Password Required"
        label="Enter your password"
        placeHolder="Password"
        mt={40}
        isPass={true}
      />

      <Button
        title="Submit"
        onPress={handleSubmit((data) => console.log(data))}
        bg="primary"
        w="100%"
        h={55}
        mt={40}
      >
        Submit
      </Button>
    </Div>
  );
};

export default SignInForm;
