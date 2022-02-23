import React, { useState } from "react";
import { Button, Div, Text } from "react-native-magnus";
import OTPInput from "../../components/form/OTP/OTPInput";
import { Regex } from "../../constants/Regex";
import { useNavigation } from "@react-navigation/core";

const OTPForm = (props) => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");

  const submitData = () => {
    if (!Regex.OTPPattern.test(value)) {
      console.log("OTP should have 6 numbers");
    } else navigation.navigate("Profile");
    //TODO: firebase OTP check
    console.table(value);
  };

  return (
    <Div {...props}>
      <OTPInput value={value} setValue={setValue} />
      <Div alignSelf="center">
        <Text color="dimGray" textAlign="center">
          Didn't recieve OTP?
        </Text>
        <Text
          color="white"
          textDecorLine="underline"
          fontWeight="bold"
          textAlign="center"
          fontSize={17}
        >
          Resend OTP
        </Text>
      </Div>
      <Button
        title="Submit"
        onPress={submitData}
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

export default OTPForm;
