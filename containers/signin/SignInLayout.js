import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Div, Button, Text } from "react-native-magnus";
import { useNavigation } from "@react-navigation/core";
import PhoneInput from "../../components/form/PhoneInput";
import HeroSignIn from "./HeroSignIn";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import OTPForm from "../../components/form/OTP/OTPForm";

import { BACKEND_URL } from "@env";

import axios from "axios";

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

const SignInLayout = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({});
  const recaptchaVerifier = useRef(null);
  const [touchSignIn, setTouchSignIn] = useState(false);

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

  const checkExistingUser = async (data) => {
    const url = `${BACKEND_URL}/user/checkExisting`;
    try {
      const res = await axios({
        method: "POST",
        url,
        data: {
          phone: {
            region: codes[userData.code],
            number: data.phone,
          },
        },
      });
      console.log("res: ", res.data);
      return res.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const submitData = async (data) => {
    if (data["validOTP"]) {
      //DO Something.
    } else if (data["phone"]) {
      if (isValidPhoneNumber(data["phone"], userData.code)) {
        const res = await checkExistingUser(data);
        if (res) {
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
            message: "Account does not exist.",
          });
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
    } else {
      return (
        <OTPForm
          register={register}
          phone={userData?.phone}
          verificationId={userData?.verificationId}
        />
      );
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
      {Object.entries(userData).length < 3 && (
        <Button
          bg={touchSignIn ? "primary" : "transparent"}
          borderWidth={2}
          borderColor={touchSignIn ? "transparent" : "primary"}
          color={touchSignIn ? "black" : "primary"}
          w="100%"
          mt={20}
          alignSelf="center"
          onTouchStart={() => setTouchSignIn(true)}
          onTouchEnd={() => setTouchSignIn(false)}
          onPress={() => navigation.navigate("MailSignIn")}
        >
          Login using Email
        </Button>
      )}
      <Div row mt="31%" ml="auto" position="relative">
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
