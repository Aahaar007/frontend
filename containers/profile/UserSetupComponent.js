import React from "react";
import { useForm } from "react-hook-form";
import { Button, Div, Input, Text } from "react-native-magnus";
import FormInput from "./../../components/form/FormInput";
import ImageBox from "../../components/ImageBox";
import UserSetupHeader from "./UserSetupHeader";
import Title from "../../components/Title";

const UserSetupComponent = (props) => {
  const next = (data) => {
    if (props.value < 3) {
      props.changeComponent(props.value + 1);
    } else if (props.value == 3) {
      console.log(data);
    }
  };

  const previous = () => {
    if (props.value > 0) {
      props.changeComponent(props.value - 1);
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
        inputProp={inputProp}
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
    borderWidth: "0px",
    color: "black",
    py: "0px",
    mt: "10px",
    w: "80%",
    h: "40px",
    ml: "auto",
    mr: "auto",
    mt: "20px",
  };

  const errorProp = {
    color: "red",
    mr: "40px",
    mt: "5px",
  };

  return (
    <Div h="100%">
      <UserSetupHeader />
      <Title
        mt={80}
        ml={20}
        textAlign="center"
        color="white"
        fontFamily="Dancing Script , cursive"
        fontSize="30px"
      >
        {props.componentProps[props.value].titleHeader}
      </Title>
      <Div mt={60}>
        <ImageBox
          h={250}
          w="90%"
          src={require(`${props.componentProps[props.value].src}`)}
          zIndex={-1}
        />
        {props.value == 1 && nameComponent()}
        {props.value == 2 && DOBComponent()}
        {props.value == 3 && addressComponent()}
      </Div>
      <Button
        position="absolute"
        title="Submit"
        bg="white"
        onPress={handleSubmit((data) => next(data))}
        color="black"
        w="40%"
        rounded={10}
        h={40}
        top={600}
        left={200}
        mt={40}
      >
        {props.componentProps[props.value].buttonText}
      </Button>
      {props.value != 0 && (
        <Button
          position="absolute"
          title="Submit"
          bg={props.componentProps[props.value].color}
          onPress={previous}
          color="black"
          w="40%"
          rounded={10}
          h={40}
          top={600}
          left={20}
          mt={40}
        >
          Previous
        </Button>
      )}
    </Div>
  );
};

export default UserSetupComponent;
