import React, { useState, useCallback, useEffect } from "react";
import { Div, Button, Text } from "react-native-magnus";
import PhoneInput from "../../components/form/PhoneInput";
import HeroSignUp from "./HeroSignUp";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import OTPForm from "../../components/form/OTP/OTPForm";

const SignUpLayout = () => {
  const [userData, setUserData] = useState({});
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    register,
  } = useForm();

  const modifyData = useCallback(
    (val) => {
      console.log("USER:", userData, "VAL: ", val);
      const temp = { ...userData, ...val };

      setUserData(temp);
    },
    [userData]
  );

  //debug log
  useEffect(() => {
    console.log("userData: ", userData);
  }, [userData]);

  const submitData = (data) => {
    if (data["phone"]) {
      if (isValidPhoneNumber(data["phone"], userData.code)) {
        modifyData(data);
      } else {
        setError("phone", {
          type: "manual",
          message: "Enter a valid phone number",
        });
      }
    }
    console.log("data", data);
  };

  const getComponent = () => {
    if (Object.entries(userData).length < 2) {
      //phone input component
      return (
        <PhoneInput
          mt={100}
          setData={modifyData}
          control={control}
          errors={errors}
        />
      );
    } else if (Object.entries(userData).length < 3) {
      return <OTPForm register={register} />;
    } else {
      return (
        <Text bg="red">Email</Text>
        //TODO: email, pass input component
      );
    }
  };

  // pass modifyData function to children
  return (
    <Div>
      <HeroSignUp mt={157} />
      {getComponent()}
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
    </Div>
  );
};

export default SignUpLayout;
