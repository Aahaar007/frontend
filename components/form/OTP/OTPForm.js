import React, { useEffect, useState } from "react";
import { Button, Div, Text } from "react-native-magnus";
import OTPInput from "./OTPInput";
import { Regex } from "../../../constants/Regex";

import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";

const auth = getAuth();

const OTPForm = (props) => {
  const { register, phone, verificationId } = props;

  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const callResendOTP = () => {
    console.log("Resend OTP called");
  };

  const validateOTP = async (otp) => {
    return true;
    const credential = PhoneAuthProvider.credential(verificationId, otp);
    try {
      const authResult = await signInWithCredential(auth, credential);
      // console.log("LOGIN SUCCESS!", authResult);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  useEffect(() => {
    setError(null);
    const temp = async () => {
      if ((await validateOTP(value)) === true) {
        register("validOTP", { value: true });
        setError(null);
      } else {
        setError({ message: "Invalid OTP" });
      }
    };
    if (Regex.OTPPattern.test(value)) {
      temp();
    }
  }, [value]);

  return (
    <Div {...props}>
      <OTPInput value={value} setValue={setValue} />
      {error && (
        <Div
          position="absolute"
          right="40%"
          bottom="40%"
          alignItems="flex-end"
          px={5}
        >
          <Text alignSelf="right" color="error" mt={5}>
            {error?.message && error?.message}
          </Text>
        </Div>
      )}
      <Div alignSelf="center">
        <Text color="dimGray" textAlign="center">
          Didn't recieve OTP?
        </Text>
        <Button
          color="white"
          bg="transparent"
          textDecorLine="underline"
          fontWeight="bold"
          textAlign="center"
          fontSize={17}
          onPress={callResendOTP}
        >
          Resend OTP
        </Button>
      </Div>
    </Div>
  );
};

export default OTPForm;
