import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Div } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import ImageBox from "../../components/ImageBox";
import UserOnBoardHeader from "./UserOnBoardHeader";
import Title from "../../components/Title";
import images from "./img";
import { useNavigation } from "@react-navigation/native";

const UserOnBoardLayout = (props) => {
  const navigation = useNavigation();

  const property = [
    {
      titleHeader: "Let's get acquantied",
      src: images.Screen1,
      buttonText: "Let's go!",
      color: "#f9d57b",
      placeHolder: "",
    },
    {
      titleHeader: "What is your Name",
      src: images.Screen2,
      buttonText: "Next",
      color: "#ff8774",
      placeHolder: "Enter Your Full Name...",
    },
    {
      titleHeader: "What is your Bithday",
      src: images.Screen3,
      buttonText: "Next",
      color: "#ffbea2",
      placeHolder: "Enter Your Date of Birth",
    },
    {
      titleHeader: "Enter the Address",
      src: images.Screen4,
      buttonText: "Submit",
      color: "#90b7c1",
      placeHolder: "Enter Your Adress....",
    },
  ];
  const [stage, setStage] = useState(0);
  const next = (data) => {
    if (stage < 3) {
      setStage(stage + 1);
    } else {
      console.log(data);
      //send data to backend API
      //fetch user
      navigation.goBack();
    }
  };

  const previous = () => {
    if (stage > 0) {
      setStage(stage - 1);
    }
  };
  const nameComponent = () => {
    return (
      <FormInput
        control={control}
        name="Name"
        rules={{
          required: true,
        }}
        errors={errors}
        errorMessage="Field Required"
        label={null}
        focusBorderColor="white"
        placeHolder="Enter the Name"
        inputProp={inputProp}
        errorProp={errorProp}
      />
    );
  };

  const DOBComponent = () => {
    return (
      <FormInput
        control={control}
        name="DOB"
        rules={{
          required: true,
        }}
        errors={errors}
        errorMessage="Field Required"
        label={null}
        focusBorderColor="white"
        placeHolder="Enter the Date of Birth"
        inputProp={inputProp}
        errorProp={errorProp}
      />
    );
  };

  const addressComponent = () => {
    return (
      <FormInput
        control={control}
        name="Addres"
        rules={{
          required: true,
        }}
        errors={errors}
        errorMessage="Field Required"
        label={null}
        focusBorderColor="white"
        placeHolder="Enter Your Address"
        inputProp={{ ...inputProp }}
        errorProp={errorProp}
      />
    );
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const inputProp = {
    bg: "white",
    borderWidth: 0,
    color: "black",
    py: 0,
    mt: 10,
    w: "80%",
    h: 40,
    ml: "auto",
    mr: "auto",
    mt: 20,
  };

  const errorProp = {
    color: "red",
    mr: 40,
    mt: 5,
  };

  return (
    <Div bg={property[stage].color} minH={900} h="100%">
      <UserOnBoardHeader mt={100} />
      <Title
        mt={80}
        ml={20}
        textAlign="center"
        color="white"
        // fontFamily="Dancing Script , cursive"
        fontSize={30}
      >
        {property[stage].titleHeader}
      </Title>
      <Div mt={60}>
        <ImageBox h={250} w="90%" src={property[stage].src} />
        {stage == 1 && nameComponent()}
        {stage == 2 && DOBComponent()}
        {stage == 3 && addressComponent()}
      </Div>
      <Div row justifyContent="space-between" px="10%" mb={60}>
        {stage !== 0 && (
          <Button
            title="Submit"
            bg={property[stage].color}
            onPress={previous}
            color="black"
            w="40%"
            rounded={10}
            h={40}
            mt={40}
          >
            Previous
          </Button>
        )}
        <Button
          title="Submit"
          bg="white"
          onPress={handleSubmit((data) => next(data))}
          color="black"
          w="40%"
          rounded={10}
          h={40}
          mt={40}
          ml={stage === 0 ? "30%" : 0}
        >
          {property[stage].buttonText}
        </Button>
      </Div>
    </Div>
  );
};

export default UserOnBoardLayout;
