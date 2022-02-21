import React, { useState, useCallback } from "react";
import { Div, Button } from "react-native-magnus";
import PhoneInput from "../../components/form/PhoneInput";
import EmailPasswordInput from "./EmailPasswordInput";
import HeroSignUp from "./HeroSignUp";

const SignUpLayout = () => {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({});

  const modifyData = useCallback((val) => {
    const temp = { ...userData, ...val };
    setUserData(temp);
  }, []);

  // pass modifyData function to children
  return (
    <Div>
      <HeroSignUp mt={157} />
      {/* <PhoneInput mt={100} setData={modifyData} /> */}
      {/* TODO: Add OTP Component to verify OTP here TODO: Add Email, password
      Component to add email, pass data to userData */}
      <EmailPasswordInput mt={60}></EmailPasswordInput>
    </Div>
  );
};

export default SignUpLayout;
