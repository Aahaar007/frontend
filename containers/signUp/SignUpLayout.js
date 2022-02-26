import React, { useState, useCallback, useEffect, useRef } from "react";
import { Div, Button, Icon, Snackbar } from "react-native-magnus";
import PhoneInput from "../../components/form/PhoneInput";
import HeroSignUp from "./HeroSignUp";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import OTPForm from "../../components/form/OTP/OTPForm";
import EmailPass from "./EmailPass";
import { useNavigation } from "@react-navigation/native";

const SignUpLayout = () => {
  const [userData, setUserData] = useState({});
  const [createStatus, setCreateStatus] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    register,
  } = useForm();

  const navigatior = useNavigation();
  const snackbarRef = useRef();

  const modifyData = useCallback(
    (val) => {
      console.log("USER:", userData, "VAL: ", val);
      const temp = { ...userData, ...val };
      setUserData(temp);
    },
    [userData]
  );

  const callCreateUser = async (user) => {
    setTimeout(() => {
      console.log("called create user");
    }, 2000);
    //result of account creation
    let res = true;
    if (res) {
      setCreateStatus(true);
      if (snackbarRef.current) {
        snackbarRef.current.show(
          "Account created successfully, login to continue",
          {
            duration: 1500,
            suffix: (
              <Icon
                name="checkcircle"
                color="white"
                fontSize="md"
                fontFamily="AntDesign"
              />
            ),
          }
        );
      }
      setTimeout(() => {
        navigatior.navigate("SignIn");
      }, 1500);
    } else {
      setCreateStatus(false);
      if (snackbarRef.current) {
        snackbarRef.current.show("Account creation failed please try again", {
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

  const submitData = (data) => {
    if (data["password"]) {
      if (data["password"] === data["rePassword"]) {
        modifyData(data);
      } else {
        setError("rePassword", {
          type: "manual",
          message: "Passwords do not match",
        });
      }
    } else if (data["phone"]) {
      if (isValidPhoneNumber(data["phone"], userData.code)) {
        modifyData(data);
      } else {
        setError("phone", {
          type: "manual",
          message: "Enter a valid phone number",
        });
      }
    }

    //console.log("data", data);
  };

  const getComponent = () => {
    if (Object.entries(userData).length < 2) {
      //phone input component
      return (
        <PhoneInput
          mt={100}
          setData={modifyData}
          control={control}
          errors={errors}
        />
      );
    } else if (Object.entries(userData).length < 3) {
      return <OTPForm register={register} phone={userData?.phone} />;
    } else {
      return (
        <EmailPass control={control} errors={errors} mt={100} />
        //TODO: email, pass input component
      );
    }
  };

  useEffect(() => {
    //LOG: console.log("userData: ", userData);
    if (userData["password"]) {
      callCreateUser(userData);
    }
  }, [userData]);

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
