import React, { useState, useCallback, useEffect, useRef } from "react";
import { Div, Button, Text } from "react-native-magnus";
import { useNavigation } from "@react-navigation/core";
import PhoneInput from "../../components/form/PhoneInput";
import HeroSignUp from "./HeroSignUp";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import OTPForm from "../../components/form/OTP/OTPForm";
import EmailPass from "./EmailPass";

import * as FirebaseRecaptcha from "expo-firebase-recaptcha";
import firebaseConfig from "../../utils/firebase";

import {
  getAuth,
  PhoneAuthProvider,
  linkWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import codes from "../../constants/countryCode.json";

const auth = getAuth();

const SignUpLayout = () => {
  const [userData, setUserData] = useState({});
  const recaptchaVerifier = useRef(null);
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

  const formatCountryCode = (val) => {
    return val.length > 0 && !val.includes("+") ? "+" + val : val;
  };
  const submitData = async (data) => {
    if (data["password"]) {
      if (data["password"] === data["rePassword"]) {
        modifyData(data);
        const credential = EmailAuthProvider.credential(
          userData.email,
          userData.password
        );
        linkWithCredential(auth.currentUser, credential)
          .then((usercred) => {
            const user = usercred.user;
            console.log("Account linking success", user);
          })
          .catch((error) => {
            console.log("Account linking error", error);
          });
      } else {
        setError("rePassword", {
          type: "manual",
          message: "Passwords do not match",
        });
      }
    } else if (data["validOTP"]) {
      //TODO: do something.
    } else if (data["phone"]) {
      if (isValidPhoneNumber(data["phone"], userData.code)) {
        const number = formatCountryCode(codes[userData.code]) + data.phone;
        const phoneProvider = new PhoneAuthProvider(auth);
        try {
          const verificationId = await phoneProvider.verifyPhoneNumber(
            number,
            recaptchaVerifier.current
          );
          data.verificationId = verificationId;
        } catch (e) {
          console.log(e);
        }
      } else {
        setError("phone", {
          type: "manual",
          message: "Enter a valid phone number",
        });
      }
    }
    modifyData(data);
    console.log("data", data);
  };

  const getComponent = () => {
    if (Object.entries(userData).length < 3) {
      //phone input component
      return (
        <Div>
          <PhoneInput
            mt={100}
            setData={modifyData}
            control={control}
            errors={errors}
          />
          <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            invisible={true}
            verify={true}
            //TODO: Create custom google re-captcha component.
          />
        </Div>
      );
    } else if (Object.entries(userData).length < 4) {
      return (
        <OTPForm
          register={register}
          phone={userData?.phone}
          verificationId={userData?.verificationId}
        />
      );
    } else {
      return (
        <EmailPass control={control} errors={errors} mt={100} />
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
      <Div row mt="50%" ml="auto" position="relative">
        <Text color="dimGray">Already have an account? </Text>
        <Button p={0} bg="transparent">
          <Text
            color="white"
            textDecorationLine="underline"
            fontWeight="bold"
            onPress={() => {
              navigator.navigate("SignIn");
            }}
          >
            Sign In
          </Text>
        </Button>
      </Div>
    </Div>
  );
};

export default SignUpLayout;
