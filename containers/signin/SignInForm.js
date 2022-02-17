import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useNavigation } from "@react-navigation/core";
import { Button, Div } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";

const SignInForm = (props) => {
  const [touchSignIn, setTouchSignIn] = useState(false);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitData = (data) => {
    if (!isValidPhoneNumber(data.phone, "IN")) {
      setError("phone", {
        type: "manual",
        message: "Enter a valid phone number",
      });
    }
    console.table(data);
  };

  return (
    <Div {...props}>
      <FormInput
        control={control}
        name="phone"
        rules={{
          required: true,
        }}
        errors={errors}
        errorMessage="Phone Required"
        label="Enter your phone number"
        placeHolder="Phone"
      />
      <Button
        title="Submit"
        onPress={handleSubmit((data) => submitData(data))}
        bg="primary"
        w="100%"
        h={55}
        mt={40}
      >
        Submit
      </Button>
      <Button
        bg={touchSignIn ? "primary" : "transparent"}
        borderWidth={2}
        borderColor={touchSignIn ? "transparent" : "primary"}
        color={touchSignIn ? "black" : "primary"}
        w="100%"
        mt={20}
        alignSelf="center"
        onTouchStart={() => setTouchSignIn(true)}
        onTouchEnd={() => setTouchSignIn(false)}
        onPress={() => navigation.navigate("MailSignIn")}
      >
        Login using Email
      </Button>
    </Div>
  );
};

export default SignInForm;
