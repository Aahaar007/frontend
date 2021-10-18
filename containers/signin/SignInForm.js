import React from "react";

import { Div } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";

const SignInForm = (props) => {
  return (
    <Div {...props}>
      <FormInput
        label="Enter your phone number or email address"
        placeHolder="Phone/Email"
      />
      <FormInput
        label="Enter your password"
        placeHolder="Password"
        mt={40}
        isPass={true}
      />
    </Div>
  );
};

export default SignInForm;
