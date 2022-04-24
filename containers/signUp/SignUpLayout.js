import React, { useState, useCallback, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/core";
import { Div, Button, Icon, Snackbar, Text } from "react-native-magnus";
import PhoneInput from "../../components/form/PhoneInput";
import HeroSignUp from "./HeroSignUp";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import OTPForm from "../../components/form/OTP/OTPForm";
import EmailPass from "./EmailPass";
import Spinner from "../../components/Spinner";
import * as FirebaseRecaptcha from "expo-firebase-recaptcha";
import firebaseConfig from "../../utils/firebase";
import { Dimensions } from "react-native";
import {
  getAuth,
  PhoneAuthProvider,
  linkWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import codes from "../../constants/countryCode.json";

import { useCreateUserMutation } from "../../services/aahaar";

import { BACKEND_URL } from "@env";
import axios from "axios";

const auth = getAuth();

const SignUpLayout = () => {
  const [userData, setUserData] = useState({});
  const recaptchaVerifier = useRef(null);
  const [createStatus, setCreateStatus] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    register,
  } = useForm();

  const navigator = useNavigation();
  const snackbarRef = useRef();

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const modifyData = useCallback(
    (val) => {
      console.log("USER:", userData, "VAL: ", val);
      const temp = { ...userData, ...val };
      setUserData(temp);
      //TODO: dispatch clear state and logout user if going back
    },
    [userData]
  );

  const callCreateUser = async (res, message) => {
    if (res) {
      setCreateStatus(true);
      if (snackbarRef.current) {
        snackbarRef.current.show(message, {
          duration: 1500,
          suffix: (
            <Icon
              name="checkcircle"
              color="white"
              fontSize="md"
              fontFamily="AntDesign"
            />
          ),
        });
      }
      if (auth.currentUser) await auth.signOut();
      setTimeout(() => {
        navigator.navigate("SignIn");
      }, 1500);
    } else {
      setCreateStatus(false);
      if (snackbarRef.current) {
        snackbarRef.current.show(message, {
          duration: 2000,
          suffix: (
            <Icon
              name="closecircle"
              color="white"
              fontSize="md"
              fontFamily="AntDesign"
            />
          ),
        });
      }
    }
  };

  const formatCountryCode = (val) => {
    return val.length > 0 && !val.includes("+") ? "+" + val : val;
  };

  const checkExistingUser = async (data) => {
    const url = `${BACKEND_URL}/user/checkExisting`;
    console.log(url);
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
    if (data["password"]) {
      if (data["password"] === data["rePassword"]) {
        const credential = EmailAuthProvider.credential(
          data.email,
          data.password
        );

        try {
          const usercred = await linkWithCredential(
            auth.currentUser,
            credential
          );
          const user = usercred.user;
          console.log("Account linking success", user);
        } catch (error) {
          console.log("Account linking error", error);
        }
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
        const res = await checkExistingUser(data);
        if (!res) {
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
          callCreateUser(true, "Account already exists, login to continue");
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

  const [triggerCreateUser, userRes] = useCreateUserMutation();

  useEffect(() => {
    //LOG: console.log("userData: ", userData);
    if (userData["password"]) {
      triggerCreateUser({
        email: userData.email,
        phone: {
          region: codes[userData.code],
          number: userData.phone,
        },
        token: auth.currentUser.accessToken,
      });
    }
  }, [userData]);

  useEffect(() => {
    if (userRes.isUninitialized || userRes.isLoading) {
      return;
    }
    console.log("Response: ", userRes);
    if (userRes.isSuccess) {
      callCreateUser(true, "Account created successfully, login to continue");
    } else {
      callCreateUser(false, "Account creation failed please try again");
    }
    //TODO: Reset form and delete firebase account if couldn't create account on back-end.
  }, [userRes]);

  return (
    <Div position="relative">
      <HeroSignUp mt={157} />
      {getComponent()}
      <Spinner
        top={windowHeight / 2 - 30}
        left={windowWidth / 2 - 30}
        show={userRes.isLoading}
        imgStyle={{ width: 60, height: 60 }}
      />
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
      <Snackbar
        ref={snackbarRef}
        mb="150%"
        borderWidth={1}
        bg={createStatus ? "limeGreen" : "red"}
        borderColor={createStatus ? "green" : "error"}
      />
    </Div>
  );
};

export default SignUpLayout;
