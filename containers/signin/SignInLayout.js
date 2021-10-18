import React from "react";

import { Div } from "react-native-magnus";
import HeroSignIn from "./HeroSignIn";
import SignInForm from "./SignInForm";
const SignInLayout = () => {
  return (
    <Div>
      <HeroSignIn mt={157} />
      <SignInForm mt={100} />
    </Div>
  );
};

export default SignInLayout;
