import React from "react";

import { Div } from "react-native-magnus";
import HeroSignIn from "./HeroSignIn";
import OTPForm from "./OTPForm";
const OTPLayout = () => {
  return (
    <Div>
      <HeroSignIn mt={157} />
      <OTPForm mt={100} />
    </Div>
  );
};

export default OTPLayout;
