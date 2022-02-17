import React from "react";

import { Div } from "react-native-magnus";
import HeroSignIn from "./HeroSignIn";
import MailSignInForm from "./MailSingInForm";
const MailSignInLayout = () => {
  return (
    <Div>
      <HeroSignIn mt={157} />
      <MailSignInForm mt={100} />
    </Div>
  );
};

export default MailSignInLayout;
