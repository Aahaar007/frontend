import React, { useState, useCallback, useEffect } from "react";
import { Div, Button, Text } from "react-native-magnus";
import { useNavigation } from "@react-navigation/core";
import PhoneInput from "../../components/form/PhoneInput";
import HeroSignIn from "./HeroSignIn";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import OTPForm from "../../components/form/OTP/OTPForm";

const SignInLayout = () => {
  const [userData, setUserData] = useState({});
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    register,
  } = useForm();
  const navigator = useNavigation();
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
    if (data["validOTP"]) {
      navigator.navigate("Listing");
    } else if (data["phone"]) {
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
    } else {
      return <OTPForm register={register} phone={userData?.phone} />;
    }
  };

  return (
    <Div>
      <HeroSignIn mt={157} />
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
      <Div row mt="50%" ml="auto" position="relative">
        <Text color="dimGray">No account? </Text>
        <Button p={0} bg="transparent">
          <Text
            color="white"
            textDecorationLine="underline"
            fontWeight="bold"
            onPress={() => {
              navigator.navigate("SignUp");
            }}
          >
            Sign Up
          </Text>
        </Button>
      </Div>
    </Div>
  );
};

export default SignInLayout;
